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
// import Cuarto from "./components/Cuarto/Cuarto";

import Vision from "./components/Vision/Vision";
import Banner from "./components/Banner/Banner";

import Spotify from "./components/spotify/Spotify";

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
      <div
        id="nosotros"
        className="clipPath2 relative flex items-center justify-center">
        <div className=" flex flex-col items-center justify-start bg-about bg-cover bg-fixed bg-center bg-no-repeat py-32">
          <div class="absolute inset-0 z-0 bg-gradient-to-br from-yellow-600 to-red-600 "></div>

          <TituloWeb title="Nosotros  ⛪ " color="white" />

          <About />
        </div>
      </div>

      {/* VISION */}
      <div
        id="vision"
        className="clipPath relative flex items-center justify-center">
        <div className=" flex flex-col items-center justify-start py-32">
          <div class="to absolute inset-0 z-0 bg-slate-700 bg-gradient-to-br from-slate-900 "></div>

          <TituloWeb title="Visión 👓 " color="white" />

          <Vision />
        </div>
      </div>

      {/* ACTIVIDADES */}
      <div id="actividades" className="mt-[30%] xl:mt-[12%]"></div>
      <TituloWeb title="Actividades  ⛪ " color="black" />

      <div className="container relative mx-auto mt-20 flex flex-col items-center justify-between overflow-hidden">
        <div className="m-0 mb-36 grid gap-10 text-justify md:grid-cols-2 xl:grid-cols-3">
          <Actividades
            title="Niños"
            titleModal="Niños 👦👧"
            textButton="Ver más"
            imagen={Ninos}
            description="El Ministerio de Niños de nuestra Iglesia es un lugar donde los niños pueden crecer en su relación con Dios y conectarse con otros niños en la fe. Ofrecemos programas de aprendizaje y actividades interactivas para ayudar a los niños a aprender sobre la biblia y cómo aplicar sus enseñanzas en sus vidas diarias. Nuestro equipo de líderes basados en la enseñanza de la Palabra de Dios están comprometidos a brindar un ambiente seguro y divertido para todos los niños que asisten. ¡Esperamos verte pronto en nuestro Ministerio de Niños! Horario de reunion: Todos los domingos a las 10:30hs."
          />

          <Actividades
            title="Preadolescentes"
            titleModal="Preadolescentes 👦👧"
            textButton="Ver más"
            imagen={Preadolescentes}
            description="Bienvenido a nuestro ministerio para preadolescentes. En nuestra iglesia cristiana, creemos que la etapa de la preadolescencia es un momento crucial en la vida de un joven y queremos estar allí para apoyarlos en su camino hacia la edad adulta.

Ofrecemos programas emocionantes y relevantes diseñados específicamente para los preadolescentes, incluyendo actividades después de la escuela, eventos especiales, y oportunidades para conectarse con otros jóvenes. Nuestro objetivo es enseñarles la Palabra de Dios y ayudarlos a desarrollar una relación cercana con Jesús mientras los ayudamos a navegar los desafíos de la vida.

Si está buscando un lugar donde su hijo pueda crecer espiritualmente y sentirse amado y aceptado, ¡nos encantaría tenerlo en nuestra iglesia! ¡Visítenos pronto! Horario de reunion: Todos los sábados a las 16hs."
          />

          <Actividades
            title="Jovenes"
            titleModal="Jovenes 🧑👩"
            textButton="Ver más"
            imagen={Jovenes}
            description="Un espacio donde cientos de chicos y chicas descubren su propósito divino para nunca más soltarlo. Cada sábado nos juntamos para acercarnos al corazón de nuestro Creador; para disfrutar de amistades que sacan lo mejor de nosotros, para soñar, reír y llorar juntos. Anhelamos que cada joven descubra el potencial que Dios depósito en él, que sueñe en grande y que deje huella en nuestra sociedad. Somos jóvenes con propósito, que desarrollan su potencial, predican a Jesús y sirven a los demás. Horario de reunion: Todos los sábados a las 20hs."
          />

          <Actividades
            title="Matrimonios jovenes"
            titleModal="Matrimonios jovenes 💑 "
            textButton="Ver más"
            imagen={MatriJovenes}
            description="El Ministerio busca fortalecer y apoyar a las parejas en su matrimonio. Los programas pueden incluir clases, eventos y retiros diseñados para ayudar a las parejas a crecer juntas en su fe y aprender habilidades para manejar desafíos en su relación. El Ministerio de Matrimonios está diseñados para ayudar a las parejas a construir una relación basada en los principios cristianos y a encontrar apoyo en la comunidad de la iglesia. La intención es promover la unión y estabilidad de las parejas, fomentando el amor, la fidelidad y el compañerismo a través de su fe compartida en Jesucristo."
          />

          <Actividades
            title="Matrimonios adultos"
            titleModal="Matrimonios adultos 👪"
            textButton="Ver más"
            imagen={MatriAdultos}
            description="El Ministerio busca fortalecer y apoyar a las parejas en su matrimonio. Los programas pueden incluir clases, eventos y retiros diseñados para ayudar a las parejas a crecer juntas en su fe y aprender habilidades para manejar desafíos en su relación. El Ministerio de Matrimonios está diseñados para ayudar a las parejas a construir una relación basada en los principios cristianos y a encontrar apoyo en la comunidad de la iglesia. La intención es promover la unión y estabilidad de las parejas, fomentando el amor, la fidelidad y el compañerismo a través de su fe compartida en Jesucristo."
          />
        </div>
      </div>

      {/* CUARTO */}

      {/* <div className="mx-auto mb-10 flex w-[95%] flex-col">
  
        <TituloWeb color="black" title="Cuarto de oración 🙌" />
        <Cuarto />
      </div> */}

      {/* SPOTIFY */}
      <div
        id="Spotify"
        className="flex h-[100vh] w-[100vw] md:h-[70vh] flex-col items-center bg-cover">
        <div className="mb-8 w-[90%]">
          <TituloWeb title="Alabanza y Adoración 🙌 " color="black" />
        </div>

        {/* <p className="w-[90%] mt-1 mb-10 text-justify">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat 
        </p> */}

        <Spotify />
        
      </div>

      {/* CAROUSEL */}
      
      <div
        id="testimonios"
        className="flex h-[100vh] w-full flex-col items-center bg-slate-900 bg-cover md:h-[70vh] xl:h-[100vh] ">
        <div className="my-20">
          <TituloWeb title="Testimonios 📣 " color="white" />
        </div>

        <Carousel />
      </div>

      {/* BANNER */}
      <div className="flex h-[50vh] justify-center bg-gradient-to-br from-yellow-600 to-red-600 xl:h-[40vh] xl:py-[15%]">
        <Banner />
      </div>

      <div
        id="contacto"
        className=" justify-cente flex flex-col items-center bg-formulario bg-cover bg-fixed bg-center bg-no-repeat py-[10%]">
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
