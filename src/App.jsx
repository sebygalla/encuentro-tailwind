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

      <div id="inicio" className="bg-gradient-to-r from-white to-stone-100">
        <Header />
        <Hero3 />

        {/* REHMA */}
        <div id="rehma" className="my-20">
          <TituloWeb title="Rehma 2023 📖" />
          <Rehma
            imagen={Jorge}
            nombre="Jorge Sennewald"
            description="Pastor General Iglesias El Encuentro."
          />
        </div>

        {/* NOSOTROS */}
        <div id="nosotros" className="clipPath2 relative flex items-center justify-center">
          <div className=" flex flex-col items-center justify-start bg-about bg-cover bg-fixed bg-center bg-no-repeat py-32">
            <div class="absolute inset-0 z-0 bg-gradient-to-br from-yellow-600 to-red-600 "></div>

            <TituloWeb title="Nosotros  ⛪ " color="white" />

            <About />
          </div>
        </div>

        {/* VISION */}
        <div id="vision" className="clipPath relative flex items-center justify-center">
          <div className=" flex flex-col items-center justify-start py-32">
            <div class="to absolute inset-0 z-0 bg-slate-700 bg-gradient-to-br from-slate-900 "></div>

            <TituloWeb title="Visión 👓 " color="white" />

            <Vision />
          </div>
        </div>

        {/* ACTIVIDADES */}
        <div id="actividades" className="mt-[30%] xl:mt-[12%]">
        </div>
        <TituloWeb title="Actividades  ⛪ " color="black" />
        
        <div className="container relative mx-auto mt-20 flex flex-col items-center justify-between overflow-hidden">
          <div className="m-0 mb-36 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            <Actividades
              title="Niños"
              titleModal="Niños 👦👧"
              textButton ="Ver más"
              imagen={Ninos}
              description="Mateo 19:14 (NVI)
Jesús dijo: «Dejen que los niños vengan a mí; no se lo impidan, porque el reino de los cielos es de quienes son como ellos». Horario de reunion: Todos los domingos a las 10:30hs."
            />

            <Actividades
              title="Preadolescentes"
              titleModal="Preadolescentes 👦👧"
              textButton ="Ver más"
              imagen={Preadolescentes}
              description="Un espacio donde cientos de chicos y chicas descubren su propósito divino para nunca más soltarlo. Cada sábado nos juntamos para acercarnos al corazón de nuestro Creador; para disfrutar de amistades que sacan lo mejor de nosotros, para soñar, reír y llorar juntos. Anhelamos que cada joven descubra el potencial que Dios depósito en él, que sueñe en grande y que deje huella en nuestra sociedad. Somos jóvenes con propósito, que desarrollan su potencial, predican a Jesús y sirven a los demás. Horario de reunion: Todos los sábados a las 16hs."
            />

            <Actividades
              title="Jovenes"
              titleModal="Jovenes 🧑👩"
              textButton ="Ver más"
              imagen={Jovenes}
              description="Mateo 25:1 (NVI)
»El reino de los cielos será entonces como diez jóvenes solteras que tomaron sus lámparas y salieron a recibir al novio.

 Horario de reunion: Todos los sábados a las 20hs.!"
            />

            <Actividades
              title="Matrimonios jovenes"
              titleModal="Matrimonios jovenes 💑 "
              textButton ="Ver más"
              imagen={MatriJovenes}
              description="Un espacio donde cientos de chicos y chicas descubren su propósito divino para nunca más soltarlo. Cada sábado nos juntamos para acercarnos al corazón de nuestro Creador; para disfrutar de amistades que sacan lo mejor de nosotros, para soñar, reír y llorar juntos. Anhelamos que cada joven descubra el potencial que Dios depósito en él, que sueñe en grande y que deje huella en nuestra sociedad. Somos jóvenes con propósito, que desarrollan su potencial, predican a Jesús y sirven a los demás. Horario de reunion: Todos los sábados a las 20hs."
            />

            <Actividades
              title="Matrimonios adultos"
              titleModal="Matrimonios adultos 👪"
              textButton ="Ver más"
              imagen={MatriAdultos}
              description="Un espacio donde cientos de chicos y chicas descubren su propósito divino para nunca más soltarlo. Cada sábado nos juntamos para acercarnos al corazón de nuestro Creador; para disfrutar de amistades que sacan lo mejor de nosotros, para soñar, reír y llorar juntos. Anhelamos que cada joven descubra el potencial que Dios depósito en él, que sueñe en grande y que deje huella en nuestra sociedad. Somos jóvenes con propósito, que desarrollan su potencial, predican a Jesús y sirven a los demás. Horario de reunion: Todos los sábados a las 20hs."
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
        <div id="testimonios" className="flex h-[100vh] w-full flex-col items-center bg-slate-900 bg-cover md:h-[70vh] xl:h-[100vh] ">
          <div className="my-20">
            <TituloWeb title="Testimonios 📣 " color="white" />
          </div>

          <Carousel />
        </div>

        {/* BANNER */}
        <div className="flex h-[50vh] justify-center bg-gradient-to-br from-yellow-600 to-red-600 xl:h-[40vh] xl:py-[15%]">
          <Banner />
        </div>

        <div id="contacto" className=" justify-cente flex flex-col items-center bg-formulario bg-cover bg-fixed bg-center bg-no-repeat py-[10%]">
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
