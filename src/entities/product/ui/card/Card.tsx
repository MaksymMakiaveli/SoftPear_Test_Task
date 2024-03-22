import { Button, Each } from '@shared/UI';
import cl from 'classnames';
import { Ref } from 'react';

export interface Props extends ElementProps<'article', 'ref'> {
  label: string;

  description: string | string[];

  imageSrc: string;

  btnLabel?: string;

  imgProps?: ElementProps<'img', 'src'>;

  innerRef?: Ref<HTMLElement>;
}

export const Card = (props: Props) => {
  const {
    description,
    imageSrc,
    label,
    imgProps,
    btnLabel = 'Choose an option',
    className,
    innerRef,
    ...restProps
  } = props;

  const { className: imgClassName, ...restImgProps } = imgProps || {};

  const _description = Array.isArray(description) ? description : [description];

  const classes = cl(
    'bg-white overflow-clip lg:h-[426px]  rounded-[40px] md:shadow-[0px_-4px_40px_rgba(35,36,66,0.4)] shadow-[0px_-4px_30px_rgba(35,36,66,0.3)] top-0 z-10',
    className,
  );

  const imgClasses = cl('relative h-full w-full  ', imgClassName);

  return (
    <article className={classes} ref={innerRef} {...restProps}>
      <div className=" flex h-full gap-4 px-0 max-lg:flex-col md:gap-7 md:pl-10">
        <div className="flex-1 flex-col items-start justify-center pt-6 max-md:px-4 md:pt-[60px]">
          <h6 className="text-[40px] font-bold leading-[44px] text-slate-800">{label}</h6>
          <div className="flex flex-col gap-2 pt-2 text-left text-base leading-tight text-slate-700 md:pt-3">
            <Each each={_description} render={(text) => <p key={text}>{text}</p>} />
          </div>
          <div className="pt-5 md:pt-8">
            <Button variant="outline" className="">
              {btnLabel}
            </Button>
          </div>
        </div>
        <div className="relative -mb-[110px] w-[421px] max-w-none flex-1 shrink-0 select-none self-center max-sm:ml-[43px] sm:mr-[-60px] lg:-mb-[190px] ">
          <img src={imageSrc} className={imgClasses} {...restImgProps} />
        </div>
      </div>
    </article>
  );
};
