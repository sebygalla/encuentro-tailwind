import logoTipo from "../../assets/image/logoCruz.png";
import Redes from "../Redes/Social";

const Hero3 = () => {
  return (
    <section class="clipPath md:bg-center-top relative flex h-[80vh] w-full flex-col items-center justify-center gap-3 bg-portada-dos bg-fixed bg-center bg-no-repeat md:h-[90vh] md:gap-[25px] md:bg-top xl:bg-portada-tres">
      <div class="absolute inset-0  bg-gradient-to-br from-yellow-600/75 to-red-600/90 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="absolute right-0 top-0 -z-20 h-[90%] w-[45%] bg-red-900/60 xl:inset-0 xl:h-[80%] xl:w-[35%] xl:bg-red-900"></div>
      <div className="absolute inset-10 -z-20 h-[70%] w-[60%] bg-red-400/40 xl:h-[70%] xl:w-[15%] xl:bg-red-400"></div>
      <div className="absolute bottom-0 right-0 -z-20 h-[70%] w-[15%] bg-red-600/40"></div>

      <div className=" mr-9  flex w-[90%] items-center justify-center">
        <div className="z-20">
          <img className="z-10 w-24  md:w-20" src={logoTipo} />
        </div>

        <span className="z-10 mr-5 h-[58px] w-[1px] bg-white"></span>

        <div className="z-10 text-center text-white md:text-center">
          <h1 className="ml-2 text-[22px] font-semibold md:text-4xl md:tracking-[5px]">
            IGLESIA EL ENCUENTRO
          </h1>
          <h3 className="md:text-md font-base ml-2 text-[11px] tracking-[4.5px] md:tracking-[13px]">
            Tristán Suárez - 2023
          </h3>
        </div>
      </div>

      <div className="z-10 p-10 text-left">
        <h3 className="text-white font-semibold text-sm">
          El lugar de tu encuentro con Dios! son muy bienvenidos a nuestra casa,
          tu casa!
        </h3>
      </div>

      <Redes />
    </section>
  );
};

export default Hero3;
