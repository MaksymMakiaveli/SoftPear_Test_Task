import { Card } from '@entities/product';
import { Each } from '@shared/UI';

import { MOCK_DATA, PRODUCT_VERSION_CONFIG } from '../config';
import { CSSProperties } from 'react';

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

  return (
    <div
      className="flex flex-col gap-4"
      style={{
        marginTop: -(
          headerWrapperSize -
          headerSize -
          PRODUCT_VERSION_CONFIG.HEADER_START_STICKY -
          20
        ),
      }}
    >
      <Each
        each={MOCK_DATA}
        render={(item, index, arr) => {
          const remainingLength = arr.length - (index + 1);

          const containerHeight =
            singleCardSize * (remainingLength + 1) - visibleCardSize * remainingLength;

          const marginTop = -(containerHeight - visibleCardSize);

          const top =
            index === arr.length - 1
              ? undefined
              : visibleCardSize * index + PRODUCT_VERSION_CONFIG.LAYOUT_HEADER_HEIGHT + 20;

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
