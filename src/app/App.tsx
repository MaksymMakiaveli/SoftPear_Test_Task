import { Hero, LayoutHeader, ProductVersion } from '@widgets';

export const App = () => {
  return (
    <div className="h-full min-h-screen overflow-y-auto pt-[76px]">
      <LayoutHeader />
      <Hero />
      <ProductVersion />
    </div>
  );
};
