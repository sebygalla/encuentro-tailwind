import HeroTitle from "../Titulo/Titulo";


const Hero2 = () => {
  return (
    // Heads up! 👋

    //This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

    <section className="relative bg-portada bg-fixed w-full h-[100vh] md:w-full md:h-[100vh] bg-no-repeat bg-cover xl:bg-[left_-5rem] md:bg-[left_-5rem_top] bg-center">
      <div className="absolute inset-0 bg-black/70 sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"> 
        </div>
      </div>
     
      <HeroTitle />
      
     
    </section>
  );
};

export default Hero2;
