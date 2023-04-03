import React from "react";
import portada from "../../assets/image/portada2.jpg";
import Titulo from "../Titulo/Titulo";



const Hero = () => {
  return (

    <section>
      <img src={portada} className="w-screen h-screen bg-cover object-cover"/>
      <div className="absolute top-20 left-0 right-0 bottom-0 m-auto">
        <Titulo/>
      </div>    
    </section>

  );
};

export default Hero;
