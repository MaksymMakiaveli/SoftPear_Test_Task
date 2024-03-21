import { ReactNode } from 'react';

export interface Props {
  children?: ReactNode;
}

export const NavHeader = (props: Props) => {
  const { children } = props;

  return (
    <header className="mx-auto mt-3 h-[64px] w-full px-3">
      <div className="flex h-full w-full items-center justify-between rounded-2xl border border-solid border-white/20 bg-black/20 p-2 backdrop-blur-2xl md:p-4 lg:p-5">
        {children}
      </div>
    </header>
  );
};
