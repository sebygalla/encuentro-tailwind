import React from "react";
import portada from "../../assets/image/portada7.png";
import Titulo from "../Titulo/Titulo";



const Hero = () => {
  return (

    <section className="border-0 xl:border-2 bg-gray-100">
      <img src={portada} className="xl:w-full xl:h-full  xl:bg-cover xl:object-cover"/>
      <div className="absolute top-20 left-0 right-0 -z-0 bottom-0 m-auto hidden xl:flex">
        <Titulo/>
      </div> 

      <div className="xl:hidden">
         <Titulo/> 
      </div>  
    </section>

  );
};

export default Hero;
