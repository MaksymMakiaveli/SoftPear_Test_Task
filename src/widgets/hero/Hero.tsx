import Graphics from '@assets/Graphics.png';
import Hand from '@assets/Hand.png';

export const Hero = () => {
  return (
    <section className="relative z-0 h-[850px] w-full overflow-clip bg-gradient-to-b from-[#282E46] via-[#44447A] via-[56.42%] to-[#0F1011] before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:right-0 before:z-30 before:block before:h-[140px] before:bg-gradient-to-b before:from-[#0D0E0E]/0 before:to-[#0E1121] before:to-[68.36%] md:before:to-[80.49%]">
      <div className="w-ful h-full">
        <div className="mx-auto w-full max-w-[560px] flex-col items-center justify-center p-0 lg:max-w-[1180px] lg:px-0">
          <h1 className="gradient-text mx-auto bg-clip-text pb-3 text-center text-6xl  font-semibold text-transparent  text-white lg:text-[120px]">
            Unlocking AI Wonders
          </h1>
        </div>
        <img
          src={Hand}
          alt="Hand with phone"
          className="pointer-events-none absolute  bottom-[26px] left-1/2 z-20 m-auto  w-[727px] max-w-none -translate-x-1/2  select-none shadow  lg:bottom-[-50px]  lg:w-[1120px]"
          width="1454"
          height="1454"
          sizes="(min-width: 1025px) 915px, 727px"
        />

        <img
          src={Graphics}
          loading="lazy"
          alt="Graphic Lines"
          width="2450"
          height="931"
          className="pointer-events-none select-none md:absolute md:bottom-0 md:left-1/2 md:z-10 md:ml-[-1328px] md:w-[2450px] md:max-w-none 2xl:left-[-17%] 2xl:ml-0 2xl:w-[120%]"
        />
      </div>
    </section>
  );
};
