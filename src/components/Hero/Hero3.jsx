import Redes from "../Redes/Social";
import TituloWeb from "../TitulosWeb/tituloWeb";
import { HiLocationMarker, HiOutlineChevronDown } from "react-icons/hi";

const Hero3 = () => {
  return (
    <section class="clipPath relative grid h-[90vh] md:h-[90vh] place-items-center bg-portadaDos bg-cover bg-fixed bg-[40%]">
      <div class="absolute inset-0 bg-gradient-to-br from-yellow-600/80 to-red-600/80"></div>

      <div className="mx-5 flex">
        <div className="z-10 text-center text-white animate-fade-right animate-fill-both">
       
          <TituloWeb  title="EL ENCUENTRO 🙌" color="white" style="semibold" />
          <h3 className="mt-3 text-sm font-normal tracking-[5px] flex text-white">
          <HiLocationMarker className="
          mt-1 mr-7 text-white" /> Tristán Suárez - 2023
          </h3>

      
     
        </div>


      

      </div>

      <HiOutlineChevronDown className="absolute top-[65%] text-white animate-bounce animate-infinite animate-fill-both text-2xl" />

 

      <p className="absolute bottom-5 left-15 text-white text-[10px] md:bottom-7 md:rotate-[-3deg] rotate-[-4deg] xl:rotate-[-1deg] xl:left-10 xl:bottom-3">(Fuente: Foto Medios Iglesia El Encuentro-Tristán Suárez) </p>

  
      

      {/* <Redes /> */}
    </section>
  );
};

export default Hero3;
