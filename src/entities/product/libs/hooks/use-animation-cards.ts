import { useCallback, useLayoutEffect, useRef } from 'react';

export const useAnimationCards = () => {
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  const cards = useRef<Set<HTMLElement>>(new Set());

  const currentPos = useRef(0);

  const isInView = useRef(false);

  const handleScroll = (event: Event) => {
    if (!isInView.current || !cards.current.size) return;

    const { deltaY } = event as WheelEvent;

    if (deltaY > 0) {
      cards.current.forEach((card) => {
        console.log(card.offsetHeight);
      });
    } else {
      cards.current.forEach((card) => {});
    }
  };

  const setupCardNode = useCallback((node: HTMLElement | null) => {
    if (node) {
      cards.current.add(node);
    }
  }, []);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === cardsWrapperRef.current) {
            isInView.current = true;
          }
        });
      },
      { threshold: 0.5 },
    );

    if (cardsWrapperRef.current) {
      observer.observe(cardsWrapperRef.current);
    }

    window.addEventListener('wheel', handleScroll);

    return () => {
      if (cardsWrapperRef.current) {
        observer.unobserve(cardsWrapperRef.current);
      }

      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return {
    cardsWrapperRef,
    setupCardNode,
    handleScroll,
  };
};
