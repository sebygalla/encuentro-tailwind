import logoTipo from "../../assets/image/logoCruz.png";
import Redes from "../Redes/Social";

const Hero3 = () => {
  return (
    <section class="clipPath relative flex h-[100vh] w-full flex-col items-center justify-center gap-3 bg-portada-dos bg-fixed bg-center bg-no-repeat md:gap-[25px]">
      <div class="absolute inset-0  bg-gradient-to-br from-yellow-600/95 to-red-600/90 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className=" mr-9 flex w-[90%] items-center justify-center">
        <div className="z-20">
          <img className="z-10 ml-4 w-16  md:w-20" src={logoTipo} />
        </div>

        <span className="z-10 h-[55px] w-[1px] bg-white"></span>

        <div className="z-10 text-center text-white md:text-center">
          <h1 className="ml-2 text-[24px] md:text-4xl md:tracking-[5px]">
            IGLESIA EL ENCUENTRO
          </h1>
          <h3 className="md:text-md ml-2 text-[11px] tracking-[4.5px] md:tracking-[13px]">
            Tristán Suárez - 2023
          </h3>
        </div>
      </div>

      <Redes />

      <marquee className="text-xs text-white font-extralight font-[Poppins]"> El lugar de tu encuentro con Dios! <span className="text-2xl"> El lugar de tu encuentro con Dios! </span><span className="text-3xl font-semibold"> El lugar de tu encuentro con Dios! </span>El lugar de tu encuentro con Dios!</marquee>


    </section>
  );
};

export default Hero3;
