import logoTipo from "../../assets/image/logoCruz.png";
import Redes from "../Redes/Social";






const Hero3 = () => {


  return (
    <section class="clipPath relative flex md:h-[90vh] md:bg-top h-[80vh] w-full flex-col items-center justify-center gap-3 bg-portada-dos xl:bg-portada-tres bg-fixed bg-center md:bg-center-top bg-no-repeat md:gap-[25px]">
      <div class="absolute inset-0  bg-gradient-to-br from-yellow-600/75 to-red-600/90 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="xl:bg-red-900 bg-red-900/60 xl:w-[35%] xl:h-[80%] w-[45%] h-[90%] absolute top-0 right-0 xl:inset-0 -z-20">
      </div>
      <div className="bg-red-400/40 xl:bg-red-400 w-[60%] h-[70%] xl:w-[15%] xl:h-[70%] absolute inset-10 -z-20">
      </div>
      <div className="bg-red-600/40 w-[15%] h-[70%] absolute bottom-0 right-0 -z-20">
      </div>

      <div className=" mr-9 flex w-[90%] items-center justify-center">
        <div className="z-20">
          <img className="z-10 w-24  md:w-20" src={logoTipo} />
        </div>

        <span className="z-10 h-[58px] mr-5 w-[1px] bg-white"></span>

        <div className="z-10 text-center text-white md:text-center">
          <h1 className="ml-2 font-semibold text-[22px] md:text-4xl md:tracking-[5px]">
            IGLESIA EL ENCUENTRO
          </h1>
          <h3 className="md:text-md ml-2 text-[11px] tracking-[4.5px] md:tracking-[13px] font-base">
            Tristán Suárez - 2023
          </h3>
        </div>
      </div>

      <Redes />



    </section>
  );
};

export default Hero3;
