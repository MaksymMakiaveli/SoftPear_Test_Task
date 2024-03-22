import { RefObject, useCallback, useEffect, useRef } from 'react';

const STEP = 1.2;

export const useAnimationCards = (scrollArea: RefObject<HTMLDivElement>) => {
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cards = useRef<HTMLElement[]>([]);
  const isInView = useRef<boolean>(false);
  const translateY = useRef<number>(0);
  const delta = useRef<number>(0);
  const previousScrollTop = useRef<number>(0);

  const handleScroll = useCallback((event: Event) => {
    if (!isInView.current || cards?.current?.length === 0 || !scrollArea.current) return;

    requestAnimationFrame(() => {
      const scrollTop = (event.target as HTMLDivElement).scrollTop;
      if (previousScrollTop.current === 0) {
        previousScrollTop.current = scrollTop;
      }
      delta.current = scrollTop - previousScrollTop.current;

      previousScrollTop.current = scrollTop;

      cards.current.forEach((card, idx) => {
        const offset = (card.offsetHeight / 1.3) * idx;

        const amount = (delta.current / STEP) * -1;
        const value = amount + translateY.current;

        if (Math.abs(value) >= offset) return;

        translateY.current = value;

        card.style.transform = `translateY(${translateY.current}px)`;
      });
    });
  }, []);

  const setupCardNode = useCallback((node: HTMLElement | null) => {
    if (node) {
      cards.current.push(node);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === cardsWrapperRef.current) {
            isInView.current = true;
          } else {
            if (isInView.current) {
              console.log('not in view');
              isInView.current = false;
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    if (cardsWrapperRef.current) {
      observer.observe(cardsWrapperRef.current);
    }

    scrollArea.current?.addEventListener('scroll', handleScroll);

    return () => {
      if (cardsWrapperRef.current) {
        observer.unobserve(cardsWrapperRef.current);
      }

      scrollArea.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    cardsWrapperRef,
    setupCardNode,
  };
};
