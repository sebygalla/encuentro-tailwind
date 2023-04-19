import React from "react";
import Portada from "../../assets/image/portada9.png";
import PortadaMobile from "../../assets/image/portadaMobile.png"
import HeroTitle from "../Titulo/Titulo";


const Hero = () => {
  return (
    <section className=" ">
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
