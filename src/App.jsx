import Header from "./components/Barra de navegacion/Header";

import Footer from "./components/Footer/Footer";
import TituloWeb from "./components/TitulosWeb/tituloWeb";
import Map from "./components/Ubicacion/Map";

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
import Cuarto from "./components/Cuarto/Cuarto";

import avatarRebe from "../src/assets/image/rebe.jpg";
import avatarYani from "../src/assets/image/yani.jpg";
import avatarSeby from "../src/assets/image/seby.jpg";
import avatarMariano from "../src/assets/image/mariano.jpg";
import avatarCami from "../src/assets/image/cami.jpg";
import avatarVivi from "../src/assets/image/vivi.jpg";
import avatarIvan from "../src/assets/image/ivan.jpg";
import avatarMarcos from "../src/assets/image/marcos.jpg";
import avatarMarquitos from "../src/assets/image/marquitos.jpg";
import avatarRosales from "../src/assets/image/rosales.jpg";
import avatarCristian from "../src/assets/image/cristian.jpg";
import avatarNadia from "../src/assets/image/nadiaCorrado.jpg";
import avatarEze from "../src/assets/image/eze.jpg";

import Avatares3 from "./components/Avatares/Avatares3";
import Vision from "./components/Vision/Vision";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="bg-gradient-to-r from-white to-stone-100">
      <Header />
      <Hero3 />

      {/* REHMA */}
      <div className="my-20">
        <TituloWeb title="Rehma 2023 📖" />
        <Rehma
          imagen={Jorge}
          nombre="Jorge Sennewald"
          description="Pastor General Iglesias El Encuentro."
        />
      </div>

      {/* NOSOTROS */}
      <div className="clipPath2 relative flex items-center justify-center">
        <div className=" flex flex-col items-center justify-start bg-about bg-cover bg-fixed bg-center bg-no-repeat py-32">
          <div class="absolute inset-0 z-0 bg-orange-500/90 "></div>

          <TituloWeb title="Nosotros  ⛪ " color="white" />

          <About />
        </div>
      </div>

      {/* BANNER */}
      <div className="bg-nubes bg-cover xl:py-[10%] bg-left xl:h-[30vh] h-[20vh] flex justify-center border-t-2 border-b-2">
        <Banner/>
      </div>

      {/* VISION */}
      <div className="clipPath relative flex items-center justify-center">
        <div className=" flex flex-col items-center justify-start bg-testimonio bg-cover bg-fixed bg-center bg-no-repeat py-32">
          <div class="absolute inset-0 z-0 bg-slate-900/90 "></div>

          <TituloWeb title="Visión 👓 " color="white" />

          <Vision />
        </div>
      </div>

      {/* ACTIVIDADES */}
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

      {/* CUARTO */}
      <div className="mx-auto mb-10 flex w-[95%] flex-col">
        <TituloWeb color="black" title="Cuarto de oración 🙌" />
        <Cuarto />

        <div className="mb-[10%] flex w-full flex-col items-center justify-center">
          <Avatares3
            nombre="EQUIPO DE ALABANZA Y ADORACION"
            color="black"
            description="Iglesia El Encuentro- Tristán Suárez"
            imagenUno={avatarCami}
            imagenDos={avatarRebe}
            imagenTres={avatarSeby}
            imagenCuatro={avatarYani}
            imagenCinco={avatarMariano}
            imagenSeis={avatarVivi}
            imagenSiete={avatarIvan}
            imagenOcho={avatarMarcos}
            imagenNueve={avatarMarquitos}
            imagenDiez={avatarRosales}
            imagenOnce={avatarCristian}
            imagenDoce={avatarNadia}
            imagenTrece={avatarEze}
          />
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="flex h-[100vh] w-full flex-col items-center bg-slate-900 bg-cover md:h-[70vh] xl:h-[100vh] ">
        <div className="my-20">
          <TituloWeb title="Testimonios 📣 " color="white" />
        </div>

        <Carousel />
      </div>

      <div className=" justify-cente flex flex-col items-center bg-formulario bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="mt-[10%] xl:mt-[6%]">
          <TituloWeb title="Contacto 📧" color="white" />
        </div>

        <Map />
      </div>

      <Footer />
    </div>
  );
}

export default App;
