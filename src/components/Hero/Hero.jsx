
import Portada from "../../assets/image/portada18.png";
import PortadaMobile from "../../assets/image/main3.png"
import HeroTitle from "../Titulo/Titulo";
import Redes from "../Redes/Redes";
import PortadaMobileDos from "../../assets/image/main5.png"


const Hero = () => {
  return (
    <section>
      <img className="md:flex hidden" src={Portada}></img>

      <img className="md:hidden" src={PortadaMobileDos}></img>
  
      <HeroTitle/>
      <Redes/>


      
    </section>
  );
};

export default Hero;
