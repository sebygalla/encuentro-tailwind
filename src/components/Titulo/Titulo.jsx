import BotonDos from "../boton/Boton";

const HeroTitle = () => {
  return (
    <section className="w-full ml-20 z-40">
      <div className="mx-auto max-w-4xl font-['Poppins'] md:gap-0 xl:gap-4 text-left flex flex-col ">

        <h2 className="xl:text-3xl text-md font-semibold uppercase text-black text-left">Iglesia Cristiana <span className="xl:text-4xl text-2xl">⛪</span></h2>
      
        <h1 className="text-6xl font-semibold text-left tracking-[5px]">
          EL ENCUENTRO
        </h1>
        <p className="text-left tracking-[.9em] font-semibold">
          Tristán Suárez
        </p>

        <div className="text-left mt-6">
          <BotonDos text="VER MÁS!" />
        </div>

      </div>
    </section>
  );
};

export default HeroTitle;
