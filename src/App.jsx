import Header from "./components/Barra de navegacion/Header";
import Hero from "./components/Hero/Hero";
import Testimonial from "../src/components/Testimonial/testimonial";
import Footer from "./components/Footer/Footer";
import CardActividades from "./components/card/CardImg";
import TituloWeb from './components/TitulosWeb/tituloWeb'


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <TituloWeb title ='Actividades 🤹‍♀️' />
      <CardActividades/>
      <Testimonial/>
      <Footer />
    </div>
  );
}

export default App;
