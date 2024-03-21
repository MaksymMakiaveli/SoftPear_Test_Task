import cl from 'classnames';

export interface Props extends ElementProps<'a', 'href'> {
  to: string;
}

export const Anchor = (props: Props) => {
  const { to, className, ...restPorps } = props;

  const classes = cl(
    'text-base text-white leading-tight md:transition-colors md:duration-[350ms] md:hover:text-indigo-400',
    className,
  );

  return <a href={to} className={classes} {...restPorps} />;
};
