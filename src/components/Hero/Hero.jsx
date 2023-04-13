import React from "react";
import portada from "../../assets/image/portada.jpg";
import Titulo from "../Titulo/Titulo";



const Hero = () => {
  return (

    <section>
      <img src={portada} className="w-full h-full bg-cover object-cover"/>
      <div className="absolute top-20 left-0 right-0 bottom-0 m-auto">
        {/* <Titulo/> */}
      </div>    
    </section>

  );
};

export default Hero;
