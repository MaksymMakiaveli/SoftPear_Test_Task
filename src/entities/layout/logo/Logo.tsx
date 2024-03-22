import { Anchor, AnchorProps } from '@shared/UI';
import cl from 'classnames';
export interface Props extends Omit<AnchorProps, 'to'> {}

export const Logo = (props: Props) => {
  const { className, ...restProps } = props;

  const classes = cl(
    'text-[20px]/[110%] font-bold uppercase md:col-span-2 md:text-[24px]/[110%]',
    className,
  );

  return (
    <Anchor to="/" className={classes} {...restProps}>
      Logo
    </Anchor>
  );
};
