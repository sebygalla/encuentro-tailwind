// import Redes from "../Redes/Social";
import TituloWeb from "../TitulosWeb/tituloWeb";
import { HiLocationMarker, HiOutlineChevronDown } from "react-icons/hi";
import Video from "../../assets/video/principal.mp4";


const Hero3 = () => {
  return (
    <section className="clipPath relative grid h-[90vh] md:h-[90vh] place-items-center">
       <video src={Video} autoPlay loop muted className="w-full h-full object-cover overflow-hidden "/>      
      
      <div class="absolute inset-0 bg-black/80"></div>

   

      <div className="mx-5 flex absolute ">
        <div className="z-50 text-center text-white animate-fade-right animate-fill-both">
       
          <TituloWeb  title="EL ENCUENTRO" color="white" style="semibold" />
          <h3 className="mt-3 text-sm font-normal md:tracking-[10px] flex text-white">
          <HiLocationMarker className=" ml-5
          mt-1 mr-[40px] text-white text-center" /> Tristán Suárez - 2024
          </h3>

      
     
        </div>


      

      </div>

      <HiOutlineChevronDown className="absolute top-[65%] text-white animate-bounce animate-infinite animate-fill-both text-2xl" />

 

      {/* <p className="absolute bottom-5 left-15 text-white text-[10px] md:bottom-7 md:rotate-[-3deg] rotate-[-4deg] xl:rotate-[-1deg] xl:left-10 xl:bottom-3">(Fuente: Foto Medios Iglesia El Encuentro-Tristán Suárez) </p> */}

  
      

      {/* <Redes /> */}
    </section>
  );
};

export default Hero3;
