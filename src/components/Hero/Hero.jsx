import React from "react";
import Portada from "../../assets/image/portada9.png";
import PortadaMobile from "../../assets/image/portadaMobile.png"
import Titulo from "../Titulo/Titulo";

const Hero = () => {
  return (
    <section className="border-0 xl:border-2">
      <img
        src={Portada}
        className="hidden md:flex md:h-full md:w-full  md:bg-cover md:object-cover"
      />
      <img src={PortadaMobile} className="md:hidden"/>
      
 
      <div className="absolute bottom-0 left-0 right-0 top-20 -z-0 m-auto hidden xl:flex">
        <Titulo />
      </div>

      <div className="xl:hidden md:flex">
        <Titulo />
      </div>
    </section>
  );
};

export default Hero;
