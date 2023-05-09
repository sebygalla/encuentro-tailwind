import Header from "./components/Barra de navegacion/Header";
import Hero from "./components/Hero/Hero";
import Heros from "./components/Hero/Heros";
import Testimonial from "../src/components/Testimonial/testimonial";
import Footer from "./components/Footer/Footer";
import CardActividades from "./components/card/CardImg";
import TituloWeb from "./components/TitulosWeb/tituloWeb";
import Nadia from "../src/assets/image/nadia.jpg";
import Javier from "../src/assets/image/avatarJavier.png";

function App() {
  return (
    <div className="bg-gray-200">
      <Header />
      <Hero />
      <TituloWeb title="Actividades 👨‍👩‍👦‍👦 " />
      <CardActividades />


      <div className=" bg-testimonio bg-cover md:bg-container bg-center relative overflow-hidden contrast-125 p-10">
        
        <TituloWeb title="Testimonios 💪 " />
        <div className="mb-10 mt-10 grid gap-5 xl:p-20 md:grid-cols-2 p-2 xl:grid-cols-3">
          <Testimonial
            testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
            imagen={Nadia}
            nombre="Nadia Saballa"
            description="Miembro Iglesia El Encuentro-Tristan Suarez"
          />

          <Testimonial
            testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
            imagen={Javier}
            nombre="Javier Corsi"
            description="Pastor Iglesia El Encuentro-Tristan Suarez"
          />

          <Testimonial
            testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
            imagen={Javier}
            nombre="Javier Corsi"
            description="Pastor Iglesia El Encuentro-Tristan Suarez"
            className="bg-green-700"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
