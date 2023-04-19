const HeroTitle = () => {
  return (
    <section className=" absolute top-[40%] px-8 py-3 text-white md:top-[20%] xl:top-[40%] xl:ml-8">
      <div className="grid  max-w-4xl grid-cols-1 gap-2 font-['Poppins'] xl:gap-4">
        <h2 className="text-sm font-medium uppercase">Iglesia Cristiana</h2>
      
        <h1 className="text-3xl font-bold xl:text-8xl">
          El Encuentro Tristán Suárez
        </h1>
        <p className="font-light">
          Bienvenidos a nuestra casa! el lugar de tu encuentro con Dios!{" "}
        </p>
        <button className="text-md w-48 rounded-md px-4 py-2  bg-blue-500">
          ver más
        </button>
      </div>
    </section>
  );
};

export default HeroTitle;
