import React from "react";
import Boton from "../boton/button";

const Titulo = () => {
  return (
    <section className="grid grid-cols-2 container mt-40 mx-auto bg-blue-300/30">
      <div className="bg-red-100/50">
        <div className="mx-auto">
          <h1 className="font-bold text-white text-6xl xl:text-8xl ">
            EL ENCUENTRO 
          </h1>

          <p className="hidden text-gray-200 md:mt-4 md:block">
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
