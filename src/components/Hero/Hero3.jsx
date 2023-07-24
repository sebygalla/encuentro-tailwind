import Redes from "../Redes/Social";
import TituloWeb from "../TitulosWeb/tituloWeb";

import { HiLocationMarker } from "react-icons/hi";

const Hero3 = () => {
  return (
    <section class="clipPath relative grid h-[90vh] md:h-[90vh] place-items-center bg-portada-dos bg-cover bg-fixed bg-[40%]">
      <div class="absolute inset-0 bg-gradient-to-br from-yellow-600/80 to-red-600/80"></div>

      <div className="mx-5 flex">
        <div className="z-10 text-center text-white">
       
          <TituloWeb title="EL ENCUENTRO 🙌" color="white" style="semibold" />
          <h3 className="mt-3 text-sm font-normal tracking-[5px] flex text-white">
          <HiLocationMarker className="
          mt-1 mr-7 text-white" /> Tristán Suárez - 2023
          </h3>
     
        </div>
      </div>

  
      

      <Redes />
    </section>
  );
};

export default Hero3;
