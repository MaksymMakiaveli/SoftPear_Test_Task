import { Logo, NavHeader } from '@entities/layout';
import { AnchorList } from '@features/navigation';
import { Button } from '@shared/UI';

export const LayoutHeader = () => {
  return (
    <NavHeader className="fixed left-0 right-0 top-0 z-30 max-w-[1180px] pr-6">
      <Logo />
      <AnchorList className="max-md:hidden" />
      <Button>Contact us</Button>
    </NavHeader>
  );
};
