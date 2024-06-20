import Image from 'next/image';

import {
  ArrowRightIcon,
  BuildingLibraryIcon,
  CubeIcon,
  DocumentIcon,
  FireIcon,
  PaintBrushIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

import Container from '~/core/ui/Container';
import SubHeading from '~/core/ui/SubHeading';
import Button from '~/core/ui/Button';
import Divider from '~/core/ui/Divider';
import Hero from '~/core/ui/Hero';
import Heading from '~/core/ui/Heading';

export default function Home() {
  return (
    <div>
     Holding
    </div>
  );
}

function HeroTitle({ children }: React.PropsWithChildren) {
  return (
    <h1
      className={
        'text-center text-4xl text-black-500 dark:text-white' +
        ' flex flex-col space-y-2 font-extrabold md:text-6xl' +
        ' xl:text-7xl 2xl:text-[5rem]'
      }
    >
      {children}
    </h1>
  );
}

function FeatureIcon(props: React.PropsWithChildren) {
  return (
    <div className={'flex justify-center'}>
      <div
        className={'rounded-xl bg-primary-500/10 p-4 dark:bg-primary-500/20'}
      >
        {props.children}
      </div>
    </div>
  );
}
