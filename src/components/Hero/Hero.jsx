
import Portada from "../../assets/image/portada9.png";
import PortadaMobile from "../../assets/image/main3.png"
import HeroTitle from "../Titulo/Titulo";
import Redes from "../Redes/Redes";


const Hero = () => {
  return (
    <section>
      <img className="w-full md:flex hidden" src="../../src/assets/image/main2.png"></img>

      <img className="md:hidden" src="../../src/assets/image/main3.png"></img>
  
      <HeroTitle/>
      <Redes/>


      
    </section>
  );
};

export default Hero;
