import React from "react";
import Boton from "../boton/button";

const Titulo = () => {
  return (
    <section className="grid grid-cols-1 text-left container xl:ml-[70px] font-['Poppins'] mt-20 xl:mt-[150px] mx-auto z-20 absolute top-[20%] xl:top-[10%] md:top-[45%]">
      <div>
        <div className="flex flex-col">
          <span className="text-white p-2 text-sm mx-auto xl:ml-0">Iglesia Cristiana</span>
          <h1 className="font-bold md:text-5xl  xl:text-left text-center text-white text-9xl" >
            EL ENCUENTRO<span className=" m-2 xl:m-6 text-2xl font-light font-['Poppins']">/ Tristán Suárez</span>
          </h1>

          <p className="text-gray-300 md:text-base md:w-[600px] md:mx-auto text-sm xl:text-lg text-center xl:w-[700px] xl:ml-1.5 mt-3 w-100 xl:text-left font-light">
          El lugar de tu encuentro con Dios! son muy bienvenidos a nuestra casa, tu casa!
          Cada persona que llega a la comunidad es desafiada a entregarse a Jesús y dejar que Él sea su Señor.
          </p>

          <div className=" text-center xl:ml-1.5 mt-4 xl:text-left xl:mt-8">
            <Boton>Ver más!</Boton>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default Titulo;
