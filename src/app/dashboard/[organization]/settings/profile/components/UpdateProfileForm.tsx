import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import toaster from 'react-hot-toast';
import { useForm } from 'react-hook-form';

import type { SupabaseClient } from '@supabase/supabase-js';

import configuration from '~/configuration';
import useUpdateProfileMutation from '~/lib/user/hooks/use-update-profile';

import Button from '~/core/ui/Button';
import TextField from '~/core/ui/TextField';
import ImageUploadInput from '~/core/ui/ImageUploadInput';
import Trans from '~/core/ui/Trans';
import useSupabase from '~/core/hooks/use-supabase';

import type UserSession from '~/core/session/types/user-session';
import type UserData from '~/core/session/types/user-data';

function UpdateProfileForm({
  session,
  onUpdateProfileData,
}: {
  session: UserSession;
  onUpdateProfileData: (user: Partial<UserData>) => void;
}) {
  const updateProfileMutation = useUpdateProfileMutation();

  const client = useSupabase();
  const { t } = useTranslation();

  const currentPhotoURL = session.data?.photoUrl ?? '';
  const currentDisplayName = session?.data?.displayName ?? '';

  const user = session.auth?.user;
  const email = user?.email ?? '';

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      displayName: currentDisplayName,
      photoURL: '',
    },
  });

  const [avatarIsDirty, setAvatarIsDirty] = useState(false);

  const onAvatarCleared = useCallback(() => {
    setAvatarIsDirty(true);
    setValue('photoURL', '');
  }, [setValue]);

  const onSubmit = async (displayName: string, photoFile: Maybe<File>) => {
    const photoName = photoFile?.name;

    if (!user?.id) {
      return;
    }

    const photoUrl = photoName
      ? await uploadUserProfilePhoto(client, photoFile, user.id)
      : currentPhotoURL;

    const isAvatarRemoved = avatarIsDirty && !photoName;

    const info = {
      id: user.id,
      displayName,
      photoUrl: isAvatarRemoved ? '' : photoUrl,
    };

    // delete existing photo if different
    if (isAvatarRemoved) {
      try {
        await deleteProfilePhoto(client, currentPhotoURL);
      } catch (e) {
        // old photo not found
      }
    }

    const promise = updateProfileMutation.trigger(info).then(() => {
      onUpdateProfileData(info);
    });

    return toaster.promise(promise, {
      success: t(`profile:updateProfileSuccess`),
      error: t(`profile:updateProfileError`),
      loading: t(`profile:updateProfileLoading`),
    });
  };

  const displayNameControl = register('displayName', {
    value: currentDisplayName,
  });

  const photoURLControl = register('photoURL');

  useEffect(() => {
    reset({
      displayName: currentDisplayName ?? '',
      photoURL: currentPhotoURL ?? '',
    });
  }, [currentDisplayName, currentPhotoURL, reset]);

  return (
    <>
      <form
        data-cy={'update-profile-form'}
        onSubmit={handleSubmit((value) => {
          return onSubmit(value.displayName, getPhotoFile(value.photoURL));
        })}
      >
        <div className={'flex flex-col space-y-4'}>
          <TextField>
            <TextField.Label>
              <Trans i18nKey={'profile:displayNameLabel'} />

              <TextField.Input
                {...displayNameControl}
                data-cy={'profile-display-name'}
                minLength={2}
                placeholder={''}
              />
            </TextField.Label>
          </TextField>

          <TextField>
            <TextField.Label>
              <Trans i18nKey={'profile:profilePictureLabel'} />

              <ImageUploadInput
                {...photoURLControl}
                multiple={false}
                onClear={onAvatarCleared}
                image={currentPhotoURL}
              >
                <Trans i18nKey={'common:imageInputLabel'} />
              </ImageUploadInput>
            </TextField.Label>
          </TextField>

          <TextField>
            <TextField.Label>
              <Trans i18nKey={'profile:emailLabel'} />

              <TextField.Input disabled value={email} />
            </TextField.Label>

            <div>
              <Button
                type={'button'}
                color={'transparent'}
                size={'small'}
                href={'../' + configuration.paths.settings.email}
              >
                <span className={'text-xs font-normal'}>
                  <Trans i18nKey={'profile:updateEmailSubmitLabel'} />
                </span>
              </Button>
            </div>
          </TextField>

          <div>
            <Button
              className={'w-full md:w-auto'}
              loading={updateProfileMutation.isMutating}
            >
              <Trans i18nKey={'profile:updateProfileSubmitLabel'} />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

/**
 * @name getPhotoFile
 * @param value
 * @description Returns the file of the photo when submitted
 * It returns undefined when the user hasn't selected a file
 */
function getPhotoFile(value: string | null | FileList) {
  if (!value || typeof value === 'string') {
    return;
  }

  return value.item(0) ?? undefined;
}

async function uploadUserProfilePhoto(
  client: SupabaseClient,
  photoFile: File,
  userId: string,
) {
  const bytes = await photoFile.arrayBuffer();
  const bucket = client.storage.from('avatars');
  const extension = photoFile.name.split('.').pop();
  const fileName = `${userId}.${extension}`;

  const result = await bucket.upload(fileName, bytes, {
    upsert: true,
  });

  if (!result.error) {
    return bucket.getPublicUrl(fileName).data.publicUrl;
  }

  throw result.error;
}

function deleteProfilePhoto(client: SupabaseClient, url: string) {
  const bucket = client.storage.from('logos');

  return bucket.remove([url]);
}

export default UpdateProfileForm;
