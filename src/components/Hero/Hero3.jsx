import logoTipo from "../../assets/image/logoCruz.png";

const Hero3 = () => {
  return (
    <section class="relative bg-portada-dos bg-cover bg-center bg-no-repeat w-full h-[100vh] flex items-center justify-center md:gap-6 gap-3 bg-fixed">
      <div class="absolute inset-0 bg-black/60  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="z-20">
        <img className="md:w-20 w-14 z-10" src={logoTipo}/>
      </div>
      
    
        <span className="w-[1px] h-[55px] bg-white z-10"></span>
    
    

      <div className="text-white z-10 md:text-center text-left">    
        <h1 className="md:text-4xl text-[22px] md:tracking-[5px]">IGLESIA EL ENCUENTRO</h1>
        <h3 className="md:text-md text-[9px] md:tracking-[13px] tracking-[7.5px]">Tristán Suárez - 2023</h3>
      </div>

     

      
    </section>
  );
};

export default Hero3;
