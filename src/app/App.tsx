import { LayoutHeader } from '../widgets/layout-header';
import { Hero } from '../widgets/hero';

export const App = () => {
  return (
    <div className="h-full min-h-screen overflow-y-auto pt-[76px]">
      <LayoutHeader />
      <Hero />
    </div>
  );
};
