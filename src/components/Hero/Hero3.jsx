import Redes from "../Redes/Social";

import { HiLocationMarker } from "react-icons/hi";

const Hero3 = () => {
  return (
    <section class="clipPath relative grid h-[70vh] md:h-[90vh] place-items-center bg-portada bg-cover bg-fixed bg-[40%]">
      <div class="absolute inset-0 bg-black/50  "></div>

      <div className="mx-5 flex">
        <div className="z-10 text-center text-white">
          <h5 className="mt-3 text-base font-medium tracking-[5px] text-left text-orange-500">
            Bienvenidos
          </h5>
          <h1 className="text-5xl font-bold text-left">IGLESIA EL ENCUENTRO</h1>
          <h3 className="mt-3 text-sm font-normal tracking-[5px] flex">
          <HiLocationMarker className="mt-1 mr-2 text-orange-500" /> Tristán Suárez - 2023
          </h3>
     
        </div>
      </div>

      <Redes />
    </section>
  );
};

export default Hero3;
