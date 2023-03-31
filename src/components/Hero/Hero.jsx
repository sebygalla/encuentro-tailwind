import React from "react";
import portada from "../../assets/image/portada2.jpg";
import Titulo from "../Titulo/Titulo";



const Hero = () => {
  return (

    <section>
      <img src={portada} className="w-screen h-screen bg-cover object-cover z-auto"/>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
        <Titulo/>
      </div>    
    </section>

  );
};

export default Hero;
