import React from "react";
import portada from "../../assets/image/portada2.jpg";


const Hero = () => {
  return (
    <section>
      <img src={portada} className="w-screen h-screen bg-cover object-cover" />
    </section>
  );
};

export default Hero;
