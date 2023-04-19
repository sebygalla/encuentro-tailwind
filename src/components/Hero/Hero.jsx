import React from "react";
import Portada from "../../assets/image/portada9.png";
import PortadaMobile from "../../assets/image/portadaMobile.png"
import HeroTitle from "../Titulo/Titulo";


const Hero = () => {
  return (
    <section className="border-0 mt-[81px] xl:border-2">
      <img
        src={Portada}
        className="hidden md:flex md:h-full md:w-full  md:bg-cover md:object-cover"
      />
      <img src={PortadaMobile} className="md:hidden"/>
      <HeroTitle/>
      
    </section>
  );
};

export default Hero;
