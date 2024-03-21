import { Logo, NavHeader } from '@entities/layout';
import { AnchorList } from '@features/navigation';

export interface Props {}

export const LayoutHeader = (props: Props) => {
  const {} = props;

  return (
    <NavHeader>
      <Logo />
      <AnchorList className="max-sm:hidden" />
    </NavHeader>
  );
};
