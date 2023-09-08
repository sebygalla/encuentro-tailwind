import Header from "./components/Barra de navegacion/Header";
import Footer from "./components/Footer/Footer";
import TituloWeb from "./components/TitulosWeb/tituloWeb";
import Map from "./components/Ubicacion/Map";

import Jorge from "../src/assets/image/avatarJorge.webp";
import Actividades from "./components/Card/Actividades";
import Ninos from "../src/assets/image/cards actividades/card7.webp";
import Preadolescentes from "../src/assets/image/cards actividades/card8.webp";
import Jovenes from "../src/assets/image/cards actividades/card3.webp";

import MatriJovenes from "../src/assets/image/cards actividades/card4.webp";
import MatriAdultos from "../src/assets/image/cards actividades/card5.webp";
import Hero3 from "./components/Hero/Hero3";

import Rehma from "./components/rehma/Rehma";
import About from "./components/Nosotros/About";
import Carousel from "./components/Carousel/Carousel";

import Vision from "./components/Vision/Vision";
import Banner from "./components/Banner/Banner";
import Cuarto from "./components/Cuarto/Cuarto";
import Spotify from "./components/spotify/Spotify";
import Galeria from "./components/galeria/galeria";

function App() {
  return (
    <div id="inicio" className="mx-auto max-w-[1200px]">
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
        <div className=" bg-about flex flex-col items-center justify-start bg-cover bg-fixed bg-center bg-no-repeat py-32">
          <div class="absolute inset-0 z-0 bg-gradient-to-br from-yellow-600 to-red-600"></div>

          <TituloWeb title="Nosotros  ⛪ " color="white" />

          <About />
        </div>
      </div>

      {/* VISION */}
      <div
        id="vision"
        className="clipPath relative flex items-center justify-center">
        <div className=" flex flex-col items-center justify-start py-32">
          <div class="to absolute inset-0 z-0 bg-slate-700 bg-gradient-to-br from-slate-900"></div>

          <TituloWeb title="Visión 👓 " color="white" />

          <Vision />
        </div>
      </div>

      {/* ACTIVIDADES */}
      <div id="actividades" className="mt-[30%] xl:mt-[150px]"></div>
      <TituloWeb title="Actividades  ⛪ " color="black" />

      <div className="container relative mx-auto mt-20 flex flex-col items-center justify-between overflow-hidden md:p-10">
        <div className="m-0 mb-36 grid gap-10 text-justify md:grid-cols-2 xl:grid-cols-3">
          <Actividades
            title="Niños"
            titleModal="Niños"
            textButton="Ver más"
            imagen={Ninos}
            description="Un lugar donde los niños pueden crecer en su relación con Dios y conectarse con otros niños en la fe. Nuestro equipo de líderes basados en la enseñanza de la Palabra de Dios están comprometidos a brindar un ambiente seguro y divertido para todos los niños que asisten. ¡Esperamos verte pronto en nuestro Ministerio! Horario de reunion: Todos los domingos a las 10:30hs."
          />

          <Actividades
            title="Preadolescentes"
            titleModal="Preadolescentes"
            textButton="Ver más"
            imagen={Preadolescentes}
            description="Creemos que la etapa de la preadolescencia es un momento crucial en la vida de un joven y queremos estar allí para apoyarlos en su camino hacia la edad adulta.

Nuestro objetivo es enseñarles la Palabra de Dios y ayudarlos a desarrollar una relación cercana con Jesús mientras los ayudamos a navegar los desafíos de la vida.

¡Visítenos pronto! Horario de reunion: Todos los sábados a las 16hs."
          />

          <Actividades
            title="Jovenes"
            titleModal="Jovenes"
            textButton="Ver más"
            imagen={Jovenes}
            description="Un espacio donde cientos de chicos y chicas descubren su propósito divino para nunca más soltarlo.  Anhelamos que cada joven descubra el potencial que Dios depósito en él, que sueñe en grande y que deje huella en nuestra sociedad. Somos jóvenes con propósito, que desarrollan su potencial, predican a Jesús y sirven a los demás. Horario de reunion: Todos los sábados a las 20hs."
          />

          <Actividades
            title="Matrimonios jovenes"
            titleModal="Matrimonios jovenes"
            textButton="Ver más"
            imagen={MatriJovenes}
            description="El Ministerio de Matrimonios jovenes está diseñados para ayudar a las parejas a construir una relación basada en los principios cristianos y a encontrar apoyo en la comunidad de la iglesia. La intención es promover la unión y estabilidad de las parejas, fomentando el amor, la fidelidad y el compañerismo a través de su fe compartida en Jesucristo."
          />

          <Actividades
            title="Matrimonios adultos"
            titleModal="Matrimonios adultos"
            textButton="Ver más"
            imagen={MatriAdultos}
            description="El Ministerio de Matrimonios adultos está diseñados para ayudar a las parejas a construir una relación basada en los principios cristianos y a encontrar apoyo en la comunidad de la iglesia. La intención es promover la unión y estabilidad de las parejas, fomentando el amor, la fidelidad y el compañerismo a través de su fe compartida en Jesucristo."
          />
        </div>
      </div>

      {/* galeria */}
      <div
        id="galeria"
        className="mb-20 mt-10 flex flex-col gap-10 p-5 md:p-10">
        <TituloWeb title="Galeria 📷 " color="black" />
        <Galeria />
      </div>

      {/* CUARTO */}

      <div className="mx-auto mb-10 flex w-[95%] flex-col">
        <TituloWeb color="black" title="Cuarto de oración 🙌" />
        <Cuarto />
      </div>

      {/* SPOTIFY */}
      <div
        id="Spotify"
        className="mx-auto flex h-[1000px] w-[100%] flex-col items-center bg-slate-900  bg-cover xl:grid xl:grid-cols-2 xl:place-items-baseline">
        <div className="mb-10 mt-20 w-[90%]">
          <TituloWeb title="Alabanza 🙌 " color="white" />
          <p className="z-10 hidden p-16 font-links text-[16px] font-light text-white/90 xl:grid ">
            La iglesia, los que la formamos, no podemos vivir fuera de la
            bendición para disfrutar de todos los logros que esto representa
            para el caminar diario. Como solidificando nuestras relaciones,
            limpiándolas para que sean cristalinas, guardando cuidadosamente la
            unidad del Espíritu. Esto exige una conducta voluntaria que se
            comprometan a “mantener a pedido”, cuidar con cuidado , no dejar
            fisuras a la Unidad. Sólo así se edifica un cuerpo, o mejor dicho,
            crece un cuerpo, donde la cabeza es Cristo (Efesios 4:15) y se
            establece claramente la delegación de autoridad. Dios nos enseña
            cómo mantener el cuerpo unido ayudándonos unos a otros (Efesios
            4:16).
          </p>
        </div>

        <Spotify />
      </div>

      {/* CAROUSEL */}

      <div
        id="testimonios"
        className="flex h-[100vh] w-full flex-col items-center bg-cover md:h-[70vh] xl:h-[100vh] ">
        <div className="my-20">
          <TituloWeb title="Testimonios 📣 " color="black" />
        </div>

        <Carousel />
      </div>

      {/* BANNER */}
      <div className="relative mb-1 flex h-[30vh] justify-center bg-portada bg-[51%] p-5 xl:h-[10vh] xl:bg-cover xl:py-[15%]">
        <div class="absolute inset-0 bg-gradient-to-br from-yellow-600/80 to-red-600/90"></div>

        <Banner />
      </div>

      <div
        id="contacto"
        className="justify-cente relative flex flex-col items-center bg-formulario bg-cover bg-fixed bg-center bg-no-repeat py-[10%]">
        <div class="to absolute inset-0 z-0 bg-slate-900/90"></div>
        <div className="z-10 mt-[10%] xl:mt-[6%]">
          <TituloWeb title="Contacto 📧" color="white" />
        </div>

        <Map textButton="ENVIAR"
        titleModal="ENVIADO!"
        description="Pronto nos comunicaremos con vos!" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
