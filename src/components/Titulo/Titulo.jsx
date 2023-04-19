import React from "react";
import Boton from "../boton/button";

const Titulo = () => {
  return (
    <section className="grid grid-cols-1 text-left container xl:ml-[70px] md:ml-6 font-['Poppins'] md:mt-[-100px] xl:mt-[150px] mx-auto z-20 absolute top-[30%] xl:top-[10%] md:top-[65%]">
      <div>
        <div className="flex flex-col">
          <span className="text-white p-2 md:text-lg text-[10px] mx-auto md:text-left md:ml-0">Iglesia Cristiana- Tristan Suarez</span>
          <h1 className="font-bold md:text-7xl md:ml-1  md:text-left text-center text-white text-3xl" >
            EL ENCUENTRO
          </h1>
        
          <p className="text-gray-300 md:text-base md:w-[600px] text-[10px] xl:text-lg text-center pl-10 pr-10 xl:w-[700px] md:-m-5  mt-1 w-100 md:text-left font-light">
          El lugar de tu encuentro con Dios! son muy bienvenidos a nuestra casa, tu casa!
          Cada persona que llega a la comunidad es desafiada a entregarse a Jesús y dejar que Él sea su Señor.
          </p>

          <div className=" text-center md:ml-1.5 mt-3 md:text-left md:mt-8">
            <Boton>Ver más!</Boton>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default Titulo;
