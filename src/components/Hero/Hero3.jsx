import logoTipo from "../../assets/image/logoCruz.png";
import Redes from "../Redes/Social";

import { HiLocationMarker } from "react-icons/hi";

const Hero3 = () => {
  return (
    <section class="clipPath relative grid h-[80vh] place-items-center bg-portada bg-fixed bg-[36%]">
      <div class="absolute inset-0 bg-black/80  "></div>

      <div className="mx-5 flex items-center justify-center">
        <div className="z-10 text-center text-white">
          <h5 className="mt-3 text-base font-normal tracking-[5px] text-left text-orange-500">
            Bienvenidos
          </h5>
          <h1 className="text-5xl font-semibold text-left">IGLESIA EL ENCUENTRO</h1>
          <h3 className="mt-3 text-sm font-normal tracking-[5px] flex">
          <HiLocationMarker className="mt-1 mr-2 text-orange-500" /> Tristán Suárez - 2023
          </h3>
          <h4 className="mt-10 text-sm text-left">
            El lugar de tu encuentro con Dios!
          </h4>
        </div>
      </div>

      <Redes />
    </section>
  );
};

export default Hero3;
