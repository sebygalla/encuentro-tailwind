import React from "react";
import Boton from "../boton/button";

const Titulo = () => {
  return (
    <section className="grid grid-cols-1 text-left container xl:ml-[70px] font-['Poppins'] mt-20 xl:mt-[250px] mx-auto z-20">
      <div>
        <div className="mx-auto">
          <h1 className="font-bold  text-black xl:text-left text-center xl:text-white text-3xl xl:text-6xl ">
            EL ENCUENTRO <span className="xl:hidden text-gray-500 font-light font-['Poppins']">Tristán Suárez</span>
          </h1>

          <p className=" xl:text-white/70 text-xs xl:text-base text-black text-center xl:ml-0 ml-5 xl:mr-0  mr-3 xl:w-[550px] mt-2 w-100 xl:text-left font-light">
          El lugar de tu encuentro con Dios! son muy bienvenidos a nuestra casa, tu casa!
          Cada persona que llega a la comunidad es desafiada a entregarse a Jesús y dejar que Él sea su Señor.
          </p>

          <div className="text-center xl:text-left mt-4 mb-12 md:mt-8">
            <Boton>Ver más!</Boton>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default Titulo;
