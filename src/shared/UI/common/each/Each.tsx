import { ReactNode } from 'react';

export interface Props<T> {
  each: T[];

  render: (item: T, index: number, array: T[]) => ReactNode;
}

export const Each = <T,>(props: Props<T>) => {
  const { each, render } = props;

  return <>{each.map(render)}</>;
};
