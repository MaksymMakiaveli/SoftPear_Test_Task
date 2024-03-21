import { ReactNode } from 'react';

import cl from 'classnames';

export interface Props extends ElementProps<'header'> {
  children?: ReactNode;
}

export const NavHeader = (props: Props) => {
  const { children, className, ...restProps } = props;

  const classes = cl('mx-auto mt-3 h-[64px] w-full px-3', className);

  return (
    <header className={classes} {...restProps}>
      <div className="flex h-full w-full items-center justify-between rounded-2xl border border-solid  border-white/20 bg-black/20 p-2 pl-4 backdrop-blur-sm md:rounded-2xl md:p-4 lg:p-5">
        {children}
      </div>
    </header>
  );
};
