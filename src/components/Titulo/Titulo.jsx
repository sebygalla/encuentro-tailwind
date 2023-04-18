import React from "react";
import Boton from "../boton/button";

const Titulo = () => {
  return (
    <section className="grid grid-cols-1 text-left container xl:ml-[70px] font-['Poppins'] mt-20 xl:mt-[250px] mx-auto z-20 absolute top-[20%] xl:top-[10%]">
      <div>
        <div className="flex flex-col">
          <span className="text-white w-[150px] text-center bg-black/40 p-2 text-sm mx-auto xl:ml-0">Iglesia Cristiana</span>
          <h1 className="font-bold  xl:text-left text-center text-white text-5xl mt-4 ">
            EL ENCUENTRO<span className=" m-2 xl:m-6 text-3xl font-light font-['Poppins']">/ Tristán Suárez</span>
          </h1>

          <p className="text-gray-300 text-sm xl:text-sm text-center xl:ml-0 ml-5 xl:mr-0  mr-3 xl:w-[550px] mt-4 w-100 xl:text-left font-light">
          El lugar de tu encuentro con Dios! son muy bienvenidos a nuestra casa, tu casa!
          Cada persona que llega a la comunidad es desafiada a entregarse a Jesús y dejar que Él sea su Señor.
          </p>

          <div className=" text-center mt-4 xl:text-left xl:mt-4">
            <Boton>Ver más!</Boton>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default Titulo;
