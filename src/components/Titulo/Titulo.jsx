const HeroTitle = () => {
  return (
    <section className="w-full px-5 absolute xl:top-[55%] text-white left-[50%] transform -translate-x-1/2 -translate-y-1/2 md:top-[65%] top-[70%]">
      <div className="mx-auto max-w-4xl font-['Poppins'] md:gap-0 xl:gap-4 text-center">

        <h2 className="xl:text-2xl text-lg font-bold uppercase text-blue-900">Iglesia Cristiana <span className="xl:text-4xl text-2xl">⛪</span></h2>
      
        <h1 className="text-[50px] -mt-3 font-semibold xl:text-[120px] md:text-[60px]">
          EL ENCUENTRO
        </h1>
        <p className="xl:-m-7 -mt-2 font-light text-1xl md:text-xl xl:text-xl xl:tracking-[.6em]">
          Tristán Suárez
        </p>
        <button className="text-md xl:ml-0 md:ml-0  rounded-md md:mt-6 mt-5 xl:mt-14 px-4 py-2 bg-blue-900">
          ver más
        </button>
      </div>
    </section>
  );
};

export default HeroTitle;
