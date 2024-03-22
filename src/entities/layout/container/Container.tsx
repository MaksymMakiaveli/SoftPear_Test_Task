import { HTMLAttributes } from 'react';

import cl from 'classnames';

export interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Container = (props: Props) => {
  const { className, ...restProps } = props;

  const classes = cl('container mx-auto relative', className);

  return <div className={classes} {...restProps} />;
};
