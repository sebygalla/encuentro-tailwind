import React from "react";
import Boton from "../boton/button";

const Titulo = () => {
  return (
    <section className="grid grid-cols-1 text-left container xl:ml-[70px] font-['Poppins'] mt-20 xl:mt-[250px] mx-auto z-20">
      <div>
        <div className="mx-auto">
          <span className="text-white bg-blue-800 p-2 text-sm ">Iglesia Cristiana</span>
          <h1 className="font-bold  text-black xl:text-left text-center xl:text-white text-3xl xl:text-5xl mt-5 ">
            EL ENCUENTRO TRISTAN SUAREZ <span className="xl:hidden text-gray-500 font-light font-['Poppins']">Tristán Suárez</span>
          </h1>

          <p className=" xl:text-white/70 text-xs xl:text-sm text-black text-center xl:ml-0 ml-5 xl:mr-0  mr-3 xl:w-[550px] mt-2 w-100 xl:text-left font-light">
          El lugar de tu encuentro con Dios! son muy bienvenidos a nuestra casa, tu casa!
          Cada persona que llega a la comunidad es desafiada a entregarse a Jesús y dejar que Él sea su Señor.
          </p>

          <div className="text-center xl:text-left xl:mt-4">
            <Boton>Ver más!</Boton>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default Titulo;
