import AvataresMobile from "../Avatares/AvataresMobile";
import avatarJavier from "../../assets/image/avatarJavier.webp";






const Banner = () => {




  return (
    <div className="z-20 flex flex-col items-center justify-center gap-4 md:gap-5">
    
          <h1 className="text-3xl font-title text-center text-white md:text-4xl">
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
