import { createElement } from 'react';
import classNames from 'classnames';

type Props = React.LabelHTMLAttributes<unknown> & {
  as?: string;
};

const Label: React.FCC<Props> = ({ children, className, as, ...props }) => {
  const tag = as ?? `label`;

  return createElement(
    tag,
    {
      className: classNames(
        `w-full text-sm font-medium text-gray-500 dark:text-gray-400 [&>*]:mt-[0.3rem]`,
        className
      ),
      ...props,
    },
    children
  );
};

export default Label;
