import { Card } from '@entities/product';
import { Each } from '@shared/UI';

import { MOCK_DATA, PRODUCT_VERSION_CONFIG } from '../config';
import { CSSProperties, RefObject, useRef } from 'react';

export interface Props {
  singleCardSize: number;
  headerSize: number;
  headerWrapperSize: number;
  sectionRef: RefObject<HTMLDivElement>;
  setupCardRef: (node: HTMLElement | null) => void;
}

export const CardList = (props: Props) => {
  const { singleCardSize, headerWrapperSize, headerSize, setupCardRef } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);

  const firstCardHeight =
    singleCardSize * (MOCK_DATA.length - 1) +
    PRODUCT_VERSION_CONFIG.CARD_VISIBLE_HEIGHT * (MOCK_DATA.length - 1);

  return (
    <div
      ref={wrapperRef}
      className="flex flex-col gap-3 pt-5 md:pt-8"
      style={{
        marginTop: -(headerWrapperSize - headerSize - PRODUCT_VERSION_CONFIG.SECTION_OFFSET),
      }}
    >
      <Each
        each={MOCK_DATA}
        render={(item, index, arr) => {
          let styles: CSSProperties = {};

          if (index === 0) {
            styles = {
              minHeight: firstCardHeight,
            };
          } else if (arr.length - 1 === index) {
            styles = {
              marginTop: -(
                firstCardHeight -
                singleCardSize * (arr.length - 1) +
                PRODUCT_VERSION_CONFIG.CARD_VISIBLE_HEIGHT
              ),
            };
          } else {
            styles = {
              minHeight:
                firstCardHeight +
                PRODUCT_VERSION_CONFIG.CARD_VISIBLE_HEIGHT -
                singleCardSize * index,
              marginTop: singleCardSize * index - firstCardHeight,
            };
          }

          return (
            <div key={item.label} style={styles} className="product-card">
              <Card
                data-card={true}
                innerRef={setupCardRef}
                description={item.description}
                imageSrc={item.imgSrc}
                label={item.label}
                className="sticky"
                style={{
                  top: (PRODUCT_VERSION_CONFIG.HEADER_TOP + headerSize) * (index + 1),
                }}
              />
            </div>
          );
        }}
      />
    </div>
  );
};
