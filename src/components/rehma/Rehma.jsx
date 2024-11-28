import Avatares from "../Avatares/Avatares";
import Jorge from "../../assets/image/avatarJorge.webp";

function Rehma(props) {
  return (
    <div className="item-center xl:mt-0 xl:mb-[10%] mt-20  flex justify-center relative">
      <div className="relative m-3 mb-10 flex h-[450px] w-[900px] flex-col justify-center rounded-[25px] bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-left text-white shadow md:m-20 md:h-[400px] md:w-[900px]">
        <p className="relative text-justify text-[25px] font-light md:text-3xl md:leading-[35px] leading-8 xl:text-[30px] xl:p-20">
          Porque el Señor aborrece al perverso pero al <strong>inntegro</strong> le brinda su amistad. 
        </p>

        <h3 className="md:text-1xl absolute top-[25%] text-sm md:bottom-7 md:right-7 font-semibold">
          PROVERBIOS 3:32 (NVI)
        </h3>

        <div className="absolute bottom-7">
          <Avatares
            nombre="Jorge Sennewald"
            description="Pastor Iglesia El Encuentro-Guillon"
            imagen={Jorge}
          />
        </div>
      </div>

    </div>
  );
}

export default Rehma;
