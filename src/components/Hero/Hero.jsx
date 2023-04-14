import React from "react";
import portada from "../../assets/image/portada5.jpg";
import Titulo from "../Titulo/Titulo";



const Hero = () => {
  return (

    <section>
      <img src={portada} className="xl:w-full xl:h-full  xl:bg-cover xl:object-cover"/>
      <div className="absolute top-20 left-0 right-0 -z-0 bottom-0 m-auto">
        <Titulo/>
      </div>    
    </section>

  );
};

export default Hero;
