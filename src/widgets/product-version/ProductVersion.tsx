import { useCallback, useEffect, useRef, useState } from 'react';
import Graphics from '@assets/Graphics2.png';
import { Container } from '@entities/layout';

import { MOCK_DATA, PRODUCT_VERSION_CONFIG } from './config';
import { CardList } from './card-list';

export const ProductVersion = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLElement[]>([]);

  const [cardSize, setCardSize] = useState(0);
  const [headerSize, setHeaderSize] = useState(0);

  const headerWrapperSize =
    cardSize * (MOCK_DATA.length - 1) -
    PRODUCT_VERSION_CONFIG.SECTION_OFFSET * (MOCK_DATA.length - 1);

  const setupCardRef = useCallback((node: HTMLElement | null) => {
    if (node) cardRefs.current.push(node);
  }, []);

  const handleResizeSection = useCallback(() => {
    const card = cardRefs.current[0];

    if (!card) return;

    setCardSize(card.offsetHeight);
  }, []);

  const handleResizeHeader = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;
    setHeaderSize(header.offsetHeight);
  }, []);

  useEffect(() => {
    const resizeSection = new ResizeObserver(handleResizeSection);
    const resizeHeader = new ResizeObserver(handleResizeHeader);

    resizeSection.observe(sectionRef.current as HTMLElement);
    resizeHeader.observe(headerRef.current as HTMLElement);

    return () => {
      resizeSection.disconnect();
      resizeHeader.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-clip bg-gradient-to-b from-[#0E1121] to-[#3A3C67]"
    >
      <Container className=" pb-4 md:pt-[70px]">
        <div
          style={{
            minHeight: headerWrapperSize,
          }}
        >
          <div
            className="sticky"
            style={{ top: PRODUCT_VERSION_CONFIG.HEADER_TOP }}
            ref={headerRef}
          >
            <h3 className="gradient-text max-w-[690px] bg-clip-text text-4xl font-semibold text-transparent text-white md:text-6xl">
              Choose your own version of the product
            </h3>
            <p className="max-w-[380px] pt-4 text-base text-neutral-100 md:text-lg">
              You can choose not only different product logic and functionality but also stylistics!
            </p>
          </div>
        </div>

        <CardList
          sectionRef={sectionRef}
          singleCardSize={cardSize}
          headerSize={headerSize}
          headerWrapperSize={headerWrapperSize}
          setupCardRef={setupCardRef}
        />
      </Container>
      <img
        src={Graphics}
        loading="lazy"
        alt="Graphic Lines"
        width="2450"
        height="931"
        className="z-1 pointer-events-none absolute  left-0 right-0 top-0 w-[2355px] max-w-none -translate-x-[14%] -translate-y-[10%] rotate-[9.39deg]  select-none md:rotate-[9.39deg]  xl:w-[164%]"
      />
    </section>
  );
};
