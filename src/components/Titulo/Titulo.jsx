import React from "react";
import Boton from "../boton/button";

const Titulo = () => {
  return (
    <section className="grid grid-cols-1 text-center container mt-40 mx-auto">
      <div className="">
        <div className="mx-auto">
          <h1 className="font-bold text-white text-6xl xl:text-7xl ">
            <span className="text-yellow-200 text-[30px]">IGLESIA CRISTIANA </span><br/>
            EL ENCUENTRO 
          </h1>

          <p className="hidden text-gray-200 md:mt-4 md:block w-1/2 text-center">
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
