
import Portada from "../../assets/image/portada21.png";
import PortadaMobile from "../../assets/image/portadaMobileTres.png"
import HeroTitle from "../Titulo/Titulo";
import Redes from "../Redes/Redes";
import PortadaMobileDos from "../../assets/image/main5.png"


const Hero = () => {
  return (
    <section className="bg-gradient-to-tr from-yellow-600 to-red-900 relative overflow-hidden">
      <img className="md:flex hidden mix-blend-overlay inset-0 w-full object-cover" src={Portada}></img>

      <img className="flex mix-blend-overlay inset-0 w-full object-cover md:hidden" src={PortadaMobile}></img>
  
      <HeroTitle/>
      <Redes/>


      
    </section>
  );
};

export default Hero;
