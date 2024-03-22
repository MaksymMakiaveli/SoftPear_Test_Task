import { Hero, LayoutHeader, ProductVersion } from '@widgets';
import { useRef } from 'react';

export const App = () => {
  const scrollArea = useRef<HTMLDivElement>(null);

  return (
    <div ref={scrollArea} className="h-full min-h-screen overflow-y-auto pt-[76px]">
      <LayoutHeader />
      <Hero />
      <ProductVersion scrollArea={scrollArea} />
    </div>
  );
};
