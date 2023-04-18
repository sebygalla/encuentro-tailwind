import React from "react";
import Portada from "../../assets/image/portada7.png";
import portadaMobile from "../../assets/image/portadaMobile.png"
import Titulo from "../Titulo/Titulo";

const Hero = () => {
  return (
    <section className="border-0 xl:border-2">
      <img
        src={Portada}
        className="hidden xl:flex xl:h-full xl:w-full  xl:bg-cover xl:object-cover"
      />
            <img
        src={portadaMobile}
        className="xl:hidden h-full w-full  bg-cover object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-20 -z-0 m-auto hidden xl:flex">
        <Titulo />
      </div>

      <div className="xl:hidden">
        <Titulo />
      </div>
    </section>
  );
};

export default Hero;
