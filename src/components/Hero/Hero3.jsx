import logoTipo from "../../assets/image/logoCruz.png";

const Hero3 = () => {
  return (
    <section class="clipPath relative flex h-[100vh] w-full flex-col items-center justify-center gap-3 bg-portada-dos bg-cover bg-fixed bg-center bg-no-repeat md:gap-6">
      <div class="absolute inset-0 bg-black/60  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

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

      <button className="z-10 text-white mt-5 animate-bounce
      ">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="md:h-16 md:w-16 h-8 w-8">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero3;
