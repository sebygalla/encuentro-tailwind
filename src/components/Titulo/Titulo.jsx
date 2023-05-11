import BotonDos from "../boton/Boton";

const HeroTitle = () => {
  return (
    <section className="w-full px-5 absolute xl:top-[80%] text-gray-900 left-[50%] xl:left-[35%] transform -translate-x-1/2 -translate-y-1/2 md:top-[60%] top-[70%]">
      <div className="mx-auto max-w-4xl font-['Poppins'] md:gap-0 xl:gap-4 text-center xl:text-left">

        <h2 className="xl:text-2xl text-lg font-bold uppercase text-blue-900">Iglesia Cristiana <span className="xl:text-4xl text-2xl">⛪</span></h2>
      
        <h1 className="text-[40px] -mt-3 font-bold xl:text-[120px] md:text-[90px]">
          EL ENCUENTRO
        </h1>
        <p className=" -mt-2 font-semibold text-1xl md:text-xl xl:text-md xl:tracking-[.9em]">
          Tristán Suárez
        </p>

        <BotonDos text="VER MÁS!" />

      </div>
    </section>
  );
};

export default HeroTitle;
