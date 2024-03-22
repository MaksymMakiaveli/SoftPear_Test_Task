import cl from 'classnames';

const Variant = {
  primary: `
  bg-white rounded-xl text-blue-950 
  enabled:md:hover:bg-indigo-400 enabled:md:hover:text-white
  enabled:active:text-white enabled:active:bg-indigo-400
  enabled:focus-visible:ring-2 enabled:focus-visible:ring-2 enabled:focus-visible:ring-blue-400
  `,
  outline: `
  bg-transparent border border-[#1F1F56] border-solid text-[#1F1F56] rounded-xl
  enabled:md:hover:bg-indigo-400 enabled:md:hover:text-white
  enabled:active:text-white enabled:active:bg-indigo-400
  enabled:focus-visible:ring-2 enabled:focus-visible:ring-2 enabled:focus-visible:ring-blue-400
  `,
} as const;

const Size = {
  sm: 'md:text-sm text-xs py-2 font-medium px-1 md:h-8 h-7 md:w-[120px]',
  md: 'md:text-sm text-xs py-3 font-medium px-1 md:h-10 h-9 md:w-[140px] w-[120px]',
  lg: 'md:text-base text-sm font-medium py-4 px-1 md:h-12 h-11 md:w-[180px]',
  full: 'w-full text-base px-3 md:h-10 h-9',
} as const;

export interface Props extends ElementProps<'button'> {
  variant?: ObjectKeys<typeof Variant>;
  size?: ObjectKeys<typeof Size>;
}

export const Button = (props: Props) => {
  const { variant = 'primary', size = 'md', className, ...restProps } = props;

  const classes = cl(
    Variant[variant],
    Size[size],
    'transition-colors duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer inline-flex items-center justify-center gap-2',
    className,
  );

  return <button className={classes} {...restProps} />;
};
