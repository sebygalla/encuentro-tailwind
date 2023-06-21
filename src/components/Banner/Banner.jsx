import AvataresMobile from "../Avatares/AvataresMobile";
import avatarJavier from "../../assets/image/avatarJavier.png";




import { useState } from "react";

const Banner = () => {

    const [Modal, UseModal] = useState(false);
    const abrirModal = () => {
        
    };


  return (
    <div className="z-20 flex flex-col items-center justify-center gap-6 md:gap-5 ">
          <h1 className="text-3xl text-center mb-4 mt-6 text-white md:text-5xl">
              "No entres en pánico, Dios gobierna en tu tormenta"
          </h1>
          <AvataresMobile
              imagen={avatarJavier}
              color="white"
              nombre="Javier Corsi"
              description="Pastor Iglesia El Encuentro- T.Suárez" />


</div>


   
  );
};

export default Banner;
