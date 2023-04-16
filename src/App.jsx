import Header from "./components/Barra de navegacion/Header";
import Hero from "./components/Hero/Hero";
import SomosNosotros from "./components/Nosotros/Nosotros";
import CardActividadesDos from "./components/CardDos/CardActividadesDos";
import TituloWeb from "../src/components/TitulosWeb/TituloWeb";


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <TituloWeb/>
      <SomosNosotros/>
      <CardActividadesDos/> 
    </div>
  );
}

export default App;
