
import Portada from "../../assets/image/portada9.png";
import PortadaMobile from "../../assets/image/portada10.png"
import HeroTitle from "../Titulo/Titulo";
import Redes from "../Redes/Redes";


const Hero = () => {
  return (
    <section className="p-1 ">
      <img
        src={Portada}
        className="hidden md:flex md:h-full md:w-full  md:bg-cover md:object-cover"
      />
      <img src={PortadaMobile} className="md:hidden"/>
      <HeroTitle/>
      <Redes/>


      
    </section>
  );
};

export default Hero;
