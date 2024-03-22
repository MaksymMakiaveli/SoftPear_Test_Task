import { Card, CardProps } from '@entities/product';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

export interface Props extends CardProps {}

export const AnimatedCard = (props: Props) => {
  const { ...restProps } = props;

  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ['start end', 'start start'],
  });

  console.log(scrollYProgress);

  return (
    <div ref={container} className="sticky top-[20px]">
      <Card {...restProps} />
    </div>
  );
};
