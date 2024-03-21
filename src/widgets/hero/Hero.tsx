import Hand from '@assets/Hand.png';

export const Hero = () => {
  // text-h1-m md:text-h1 font-semibold text-center -mb-3 bg-gradient-03 bg-clip-text pb-3 text-transparent transition-[opacity,transform] duration-700
  return (
    <section className="relative z-0 h-[850px] w-full overflow-hidden bg-gradient-to-b from-[#282E46] via-[#44447A] via-[56.42%] to-[#0F1011] before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:right-0 before:z-30 before:block before:h-[301px] before:bg-gradient-to-b before:from-[#0D0E0E]/0 before:to-[#0E1121] before:to-[68.36%] md:h-[1010px] md:before:to-[80.49%]">
      <div className="h-full w-full flex-col items-center justify-center pt-[74px] md:pt-[63px]">
        <div className="mx-auto w-full max-w-[360px] p-0 lg:max-w-[1180px] lg:px-0">
          <h1 className="gradient-text mx-auto bg-clip-text pb-3 text-center text-6xl  font-semibold text-transparent  text-white md:text-[120px]">
            Unlocking AI Wonders
          </h1>
        </div>
        <img
          src={Hand}
          alt="Hand"
          className="pointer-events-none absolute  bottom-[26px] left-1/2 z-20 m-auto  w-[727px] max-w-none -translate-x-1/2  select-none shadow  md:bottom-[-10px]  md:w-[1120px]"
          width="1454"
          height="1454"
          sizes="(min-width: 1025px) 915px, 727px"
        />
      </div>
    </section>
  );
};
