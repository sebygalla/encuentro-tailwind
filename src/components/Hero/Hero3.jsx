import logoTipo from "../../assets/image/logoCruz.png";
import Redes from "../Redes/Social";

const Hero3 = () => {
  return (
    <section class="clipPath relative grid place-items-center h-[80vh] bg-portada bg-fixed bg-[36%]">
      <div class="absolute inset-0 bg-black/80  "></div>

      <div className="flex items-center justify-center mx-5">
        <div className="z-10 text-white text-center">
          <h1 className="text-6xl font-semibold">IGLESIA EL ENCUENTRO</h1>
          <h3 className="text-2xl font-normal mt-3 tracking-[5px]">Tristán Suárez - 2023</h3>
          <h4 className="text-xl mt-10">
            El lugar de tu encuentro con Dios! son muy bienvenidos a nuestra
            casa, tu casa!
          </h4>
        </div>
      </div>

      <Redes />
    </section>
  );
};

export default Hero3;
