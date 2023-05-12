import logoTipo from "../../assets/image/logoCruz.png";

const Hero3 = () => {
  return (
    <section class="relative bg-portada-dos bg-cover bg-center bg-no-repeat w-full h-[100vh] flex items-center justify-center md:gap-6 gap-3 bg-fixed">
      <div class="absolute inset-0 bg-black/90  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <img className="md:w-20 w-10 z-50" src={logoTipo}/>
      <span className="w-[1px] h-[55px] bg-white z-50"></span>

      <div className="text-white z-50 md:text-center text-left">    
        <h1 className="md:text-4xl text-lg md:tracking-[5px]">IGLESIA EL ENCUENTRO</h1>
        <h3 className="md:text-md text-[10px] md:tracking-[13px] tracking-[4px]">Tristán Suárez - 2023</h3>
      </div>

     

      
    </section>
  );
};

export default Hero3;
