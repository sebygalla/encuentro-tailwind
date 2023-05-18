import Header from "./components/Barra de navegacion/Header";
import Testimonial from "../src/components/Testimonial/testimonial";
import Footer from "./components/Footer/Footer";
import TituloWeb from "./components/TitulosWeb/tituloWeb";
import Nadia from "../src/assets/image/nadia.jpg";
import Javier from "../src/assets/image/avatarJavier.png";
import Jorge from "../src/assets/image/avatarJorge.png";
import Actividades from "./components/Card/Actividades";
import Ninos from "../src/assets/image/cards actividades/card7.jpg";
import Preadolescentes from "../src/assets/image/cards actividades/card8.jpg";
import Jovenes from "../src/assets/image/cards actividades/card3.jpg";
import MatriJovenes from "../src/assets/image/cards actividades/card4.jpg";
import MatriAdultos from "../src/assets/image/cards actividades/card5.jpg";
import Hero3 from "./components/Hero/Hero3";
import Rehma from "./components/rehma/Rehma";
import About from "./components/Nosotros/About";

function App() {
  return (
    <div className="bg-gray-200">
      <Header />
      <Hero3 />

      <div>
        <TituloWeb title="Rehma 2023 📖" />
        <Rehma
          imagen={Jorge}
          nombre="Jorge Sennewald"
          description="Pastor General Iglesias El Encuentro."
        />
      </div>

      <div className="mb-[20%]">
        <TituloWeb title="Nosotros ⛪" />
      </div>

      <div className="flex items-center justify-center">
        <div className="relative flex min-h-[100vh] items-center justify-start bg-cover bg-center bg-no-repeat md:bg-about xl:h-[80vh]">
          <div class="md:ltr:sm:bg-gradient-to-r md:rtl:sm:bg-gradient-to-l md:sm:from-white/95  md:sm:to-white/25 md:absolute md:inset-0 md:bg-black/60"></div>
          <About />
        </div>
      </div>
      <div className="mt-[30%]">
        <TituloWeb title="Actividades 👨‍👩‍👦‍👦 " />
      </div>
      <div className="container relative mx-auto mt-20 flex flex-col items-center justify-between overflow-hidden">
        <div className="m-0 mb-36 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <Actividades
            title="Niños"
            text="The cake at the Sacher hotel is amongst the finest in all the lands es un servicio."
            imagen={Ninos}
          />

          <Actividades
            title="Preadolescentes"
            text="The cake at the Sacher hotel is amongst the finest in all the lands es un servicio."
            imagen={Preadolescentes}
          />

          <Actividades
            title="Jovenes"
            text="The cake at the Sacher hotel is amongst the finest in all the lands es un servicio."
            imagen={Jovenes}
          />

          <Actividades
            title="Matrimonios jovenes"
            text="The cake at the Sacher hotel is amongst the finest in all the lands es un servicio."
            imagen={MatriJovenes}
          />

          <Actividades
            title="Matrimonios adultos"
            text="The cake at the Sacher hotel is amongst the finest in all the lands es un servicio."
            imagen={MatriAdultos}
          />
        </div>
      </div>

      <div className=" md:bg-container relative overflow-hidden bg-testimonio bg-cover bg-center p-10 contrast-125">
        <TituloWeb title="Testimonios 💪 " />
        <div className="mb-10 mt-10 grid gap-5 p-2 md:grid-cols-2 xl:grid-cols-2 xl:p-20 snap-mandatory snap-x">

          <div className="snap-center">
            <Testimonial
              testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
              imagen={Nadia}
              nombre="Nadia Saballa"
              description="Miembro Iglesia El Encuentro-Tristan Suarez"
            />
          </div>

          <div className="snap-center">
            <Testimonial
              testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
              imagen={Javier}
              nombre="Javier Corsi"
              description="Pastor Iglesia El Encuentro-Tristan Suarez"
            />
          </div>

          <div className="snap-center">
            <Testimonial
              testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
              imagen={Javier}
              nombre="Javier Corsi"
              description="Pastor Iglesia El Encuentro-Tristan Suarez"
              className="bg-green-700"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
