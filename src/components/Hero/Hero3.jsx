import HeroTitle from "../Titulo/Titulo";
import TituloWeb from "../TitulosWeb/tituloWeb";

const Hero3 = () => {
  return (
    <section className="grid h-[100vh] w-full md:grid-cols-2 overflow-hidden grid-cols-1">
      <div className="flex items-center justify-center pt-32 bg-fondo bg-container overflow-hidden">
        <div className="top-50 absolute left-[350px] -z-0 h-[400px] w-[200px] bg-gray-900/30 overflow-hidden"></div>
        <HeroTitle />
      </div>

      <div className="relative bg-portada bg-cover bg-center overflow-hidden">
        <div className="absolute -left-[50px] top-0 h-[700px] w-[300px] bg-red-900/50 overflow-hidden"></div>
      </div>
    </section>
  );
};

export default Hero3;
