import { Hero, LayoutHeader, ProductVersion } from '@widgets';

export const App = () => {
  return (
    <>
      <LayoutHeader />
      <main className="overflow-clip  pt-[94px] ">
        <Hero />
        <ProductVersion />
      </main>
    </>
  );
};
