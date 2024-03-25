import { Card } from '@entities/product';
import { Each } from '@shared/UI';

import { MOCK_DATA, PRODUCT_VERSION_CONFIG } from '../config';
import { CSSProperties, useRef } from 'react';

export interface Props {
  singleCardSize: number;
  headerSize: number;
  headerWrapperSize: number;
  visibleCardSize: number;
  setupCardRef: (node: HTMLElement | null) => void;
}

const fraction = (num: number) => Number(num.toFixed(2));

export const CardList = (props: Props) => {
  const { singleCardSize, visibleCardSize, headerWrapperSize, headerSize, setupCardRef } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapperRef}
      className="flex flex-col"
      style={{
        marginTop: -(headerWrapperSize - headerSize - PRODUCT_VERSION_CONFIG.HEADER_START_STICKY),
      }}
    >
      <Each
        each={MOCK_DATA}
        render={(item, index, arr) => {
          const remainingLength = arr.length - (index + 1);

          const containerHeight =
            singleCardSize * (arr.length - index) -
            visibleCardSize * remainingLength +
            PRODUCT_VERSION_CONFIG.CARD_GAP * (arr.length - index);

          const marginTop = -(containerHeight - visibleCardSize - PRODUCT_VERSION_CONFIG.CARD_GAP);

          const top =
            index === arr.length - 1
              ? undefined
              : headerSize +
                PRODUCT_VERSION_CONFIG.HEADER_START_STICKY +
                20 +
                visibleCardSize * index;

          const styles: CSSProperties = {
            minHeight: index === arr.length - 1 ? undefined : fraction(containerHeight),
            marginTop: index === 0 ? undefined : fraction(marginTop),
          };

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
                  top,
                }}
              />
            </div>
          );
        }}
      />
    </div>
  );
};
