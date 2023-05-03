const HeroTitle = () => {
  return (
    <section className="w-full px-5 absolute xl:top-[50%] text-white left-[50%] transform -translate-x-1/2 -translate-y-1/2 md:top-[70%] top-[70%]">
      <div className="max-w-4xl font-['Poppins'] md:gap-0 xl:gap-4 text-center xl:text-left">
        <h2 className="text-sm font-semibold uppercase text-blue-900">tristán suárez</h2>
      
        <h1 className="text-[50px] font-semibold xl:text-[90px]">
          EL ENCUENTRO
        </h1>
        <p className="font-light">
          El lugar de tu encuentro con Dios!
        </p>
        <button className="text-md xl:ml-0 md:ml-0  w-full rounded-md md:w-1/2 mt-6 px-4 py-2 bg-blue-900">
          ver más
        </button>
      </div>
    </section>
  );
};

export default HeroTitle;
