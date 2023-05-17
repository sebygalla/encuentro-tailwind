import logoTipo from "../../assets/image/logoCruz.png";


const Hero3 = () => {
  return (
    <section class="relative bg-portada-dos bg-cover bg-center bg-no-repeat w-full h-[100vh] flex items-center justify-center md:gap-6 gap-3 bg-fixed">
      <div class="absolute inset-0 bg-black/60  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className=" w-[90%] flex items-center justify-center mr-9">
        <div className="z-20">
          <img className="md:w-20 w-16 z-10  ml-4" src={logoTipo}/>
        </div>
        
      
          <span className="w-[1px] h-[55px] bg-white z-10"></span>
      
      

        <div className="text-white z-10 md:text-center text-center">    
          <h1 className="md:text-4xl text-[24px] md:tracking-[5px] ml-2">IGLESIA EL ENCUENTRO</h1>
          <h3 className="md:text-md text-[11px] md:tracking-[13px] tracking-[4.5px] ml-2">Tristán Suárez - 2023</h3>
        </div>
      </div>

      <svg className=" w-full absolute md:-bottom-8 -bottom-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E5E7EB" fill-opacity="1" d="M0,256L1440,0L1440,320L0,320Z"></path></svg>
    
     

  
    </section>
    
  );
};

export default Hero3;
