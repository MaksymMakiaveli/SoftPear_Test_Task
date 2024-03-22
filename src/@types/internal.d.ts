declare type ElementProps<
  ElementType extends React.ElementType,
  PropsToOmit extends string = never,
> = Omit<React.ComponentPropsWithoutRef<ElementType>, PropsToOmit>;

declare type ObjectKeys<T extends Record<string, any>> = keyof T;
