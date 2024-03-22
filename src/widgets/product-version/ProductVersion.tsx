import { Card, useAnimationCards } from '@entities/product';
import Graphics from '@assets/Graphics2.png';
import { Container } from '@entities/layout';
import Phones1 from '@assets/Phones1.png';
import Phones2 from '@assets/Phones2.png';
import Phones3 from '@assets/Phones3.png';
import { Each } from '@shared/UI';
import { RefObject } from 'react';

const MOCK_DATA = [
  {
    label: 'AI OF models',
    description: [
      'Transform social media using artificial intelligence, offering a new way to connect with famous influencers.',
      'Imagine how influencers can adapt to any preference, making every interaction unique and different using our game changing AI. We are changing the perception of how social media can be used by influencers, and how easy it can be to communicate with your audience without moving a muscle.',
    ],
    imgSrc: Phones1,
  },
  {
    label: 'AI IG influencers',
    description: [
      'We are redefining personal entertainment with AI-powered models for a unique and engaging private experience. ',
      'Dive into a world of unrivaled entertainment as our advanced algorithm adapts to the user’s preferences, while giving an opportunity to have a private chat with the OF model',
    ],
    imgSrc: Phones2,
  },
  {
    label: 'AI live dealer',
    description: [
      'AI Live Dealer elevates online gaming by blending live casino thrills with advanced artificial intelligence. ',
      'The players will enjoy personalised dealers, stunning live interactions and a real-time experience that will redefine your gaming user experience. ',
      'Welcome to the future, where gaming and artificial intelligence collide for an unmatched experience!',
    ],
    imgSrc: Phones3,
  },
];

interface Props {
  scrollArea: RefObject<HTMLDivElement>;
}

export const ProductVersion = (props: Props) => {
  const { scrollArea } = props;

  const { cardsWrapperRef, setupCardNode } = useAnimationCards(scrollArea);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0E1121] to-[#3A3C67]">
      <img
        src={Graphics}
        loading="lazy"
        alt="Graphic Lines"
        width="2450"
        height="931"
        className="z-1 pointer-events-none absolute  left-0 right-0 top-0 w-[2355px] max-w-none -translate-x-[14%] -translate-y-[10%] rotate-[9.39deg]  select-none md:rotate-[9.39deg]  xl:w-[164%]"
      />
      <Container className="z-2 pb-4  md:pt-[70px]">
        <div>
          <h3 className="gradient-text max-w-[690px] bg-clip-text text-4xl font-semibold text-transparent text-white md:text-6xl">
            Choose your own version of the product
          </h3>
          <p className="max-w-[380px] pt-4 text-base text-neutral-100 md:text-lg">
            You can choose not only different product logic and functionality but also stylistics!
          </p>
        </div>
        <div
          ref={cardsWrapperRef}
          className="relative flex flex-col gap-3 overflow-hidden pt-5 md:pt-8"
        >
          <Each
            each={MOCK_DATA}
            render={(item) => {
              return (
                <Card
                  innerRef={setupCardNode}
                  key={item.label}
                  description={item.description}
                  imageSrc={item.imgSrc}
                  label={item.label}
                  className=" shrink-0 will-change-transform"
                />
              );
            }}
          />
        </div>
      </Container>
    </section>
  );
};
