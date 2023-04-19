
const HeroTitle = () => {
  return (
    <section className=" text-white px-8 py-3 absolute top-[28%] md:top-[20%] xl:top-[40%] xl:ml-8">
      <div className="max-w-4xl  grid grid-cols-1 gap-2 xl:gap-4 font-['Poppins']">
        <h2 className="text-sm uppercase font-medium">Iglesia Cristiana</h2>
        <h1 className="text-3xl font-bold xl:text-8xl">El Encuentro Tristán Suárez</h1>
        <p className="font-light">Bienvenidos a nuestra casa! el lugar de tu encuentro con Dios! </p>
        <button className="bg-red-500 py-2 px-4 text-md rounded-md w-48">ver más</button>
      </div>
    </section>
  );
};

export default HeroTitle;
