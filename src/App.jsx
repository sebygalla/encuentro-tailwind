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
import Carousel from "./components/Carousel/Carousel";


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

      <div className="mb-[20%] md:mb-20">
        <TituloWeb title="Nosotros ⛪" />
      </div>

      <div className="flex items-center justify-center">
        <div className="relative flex min-h-[100vh] items-center justify-start bg-cover bg-center bg-no-repeat md:bg-about xl:h-[80vh]">
          <div class="md:ltr:sm:bg-gradient-to-r md:rtl:sm:bg-gradient-to-l md:sm:from-white/95  md:sm:to-white/25 md:absolute md:inset-0 md:bg-black/60"></div>
          <About />
        </div>
      </div>

      <div className="mt-[30%] xl:mt-[12%]">
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

    <div className="bg-testimonio bg-cover w-full h-[80vh]">
      <Carousel />
    </div>


      <Footer />
    </div>
  );
}

export default App;
