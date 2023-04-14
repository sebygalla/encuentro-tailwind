import React from "react";
import Boton from "../boton/button";

const Titulo = () => {
  return (
    <section className="grid grid-cols-1 text-left container mt-20 xl:mt-40 mx-auto z-20">
      <div className="">
        <div className="mx-auto">
          <h1 className="font-bold text-black text-6xl xl:text-8xl ">
            <span className="text-red-900 text-[15px]">IGLESIA CRISTIANA </span><br/>
            EL ENCUENTRO 
          </h1>

          <p className="hidden text-gray-900 md:mt-4 md:block w-1/2 text-left">
          El lugar de tu encuentro con Dios! son muy bienvenidos a nuestra casa, tu casa!
          Cada persona que llega a la comunidad es desafiada a entregarse a Jesús y dejar que Él sea su Señor.
          </p>

          <div className="mt-4 md:mt-8">
            <Boton>Ver más!</Boton>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default Titulo;
