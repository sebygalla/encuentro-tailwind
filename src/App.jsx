import Header from "./components/Barra de navegacion/Header";
import Hero from "./components/Hero/Hero";
import SomosNosotros from "./components/Nosotros/Nosotros";
import CardActividadesDos from "./components/CardDos/CardActividadesDos";
import TituloWeb from "../src/components/TitulosWeb/tituloWeb";
import Testimonial from "../src/components/Testimonial/testimonial";


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <TituloWeb/>
      <SomosNosotros/>
      <CardActividadesDos/> 
      <Testimonial/>
    </div>
  );
}

export default App;
