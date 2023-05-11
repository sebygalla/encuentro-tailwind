import BotonDos from "../boton/Boton";

const HeroTitle = () => {
  return (
    <section className="w-full px-5 absolute xl:top-[70%] text-gray-900 left-[50%] xl:left-[50%] transform -translate-x-1/2 -translate-y-1/2 md:top-[60%] top-[55%]">
      <div className="mx-auto max-w-4xl font-['Poppins'] md:gap-0 xl:gap-4 text-center">

        <h2 className="xl:text-2xl text-md font-semibold uppercase text-blue-900">Iglesia Cristiana <span className="xl:text-4xl text-2xl">⛪</span></h2>
      
        <h1 className="text-[50px] -mt-3 font-semibold xl:text-[90px] md:text-[90px]">
          EL ENCUENTRO
        </h1>
        <p className=" -mt-2 font-semibold text-1xl md:text-xl xl:text-sm xl:tracking-[.9em] tracking-[.3em]">
          Tristán Suárez
        </p>

        <div className="w-[50%] mx-auto ">
          <BotonDos text="VER MÁS!" />
        </div>

      </div>
    </section>
  );
};

export default HeroTitle;
