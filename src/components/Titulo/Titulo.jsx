const HeroTitle = () => {
  return (
    <section className=" absolute md:ml-10 top-[55%] px-8 py-3 text-white md:top-[20%] xl:top-[40%] xl:ml-8">
      <div className="grid  max-w-4xl grid-cols-1 gap-0 font-['Poppins'] md:gap-0 xl:gap-4 text-left md:text-left">
        <h2 className="text-sm font-bold uppercase text-blue-900">tristán suárez</h2>
      
        <h1 className="text-[45px] font-bold xl:text-8xl">
          EL ENCUENTRO
        </h1>
        <p className="font-light">
          El lugar de tu encuentro con Dios!
        </p>
        <button className="text-md mt-6 xl:ml-0 md:ml-0  w-48 rounded-md px-4 py-2 bg-blue-900">
          ver más
        </button>
      </div>
    </section>
  );
};

export default HeroTitle;
