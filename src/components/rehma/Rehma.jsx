import Avatares from "../Avatares/Avatares";
import Jorge from "../../assets/image/avatarJorge.webp";

function Rehma(props) {
  return (
    <div className="item-center xl:mt-0 xl:mb-[10%] mt-20  flex justify-center relative">
      <div className="relative m-3 mb-10 flex h-[450px] w-[900px] flex-col justify-center rounded-[25px] bg-slate-900 p-8 text-left text-white shadow md:m-20 md:h-[400px] md:w-[900px]">
        <p className="relative text-justify text-[25px] font-semibold md:text-3xl md:leading-[50px] xl:text-3xl">
          Si permanece la obra de alguno que ha edificado sobre el fundamento,
          recibirá recompensa.
        </p>

        <h3 className="md:text-1xl absolute top-[25%] text-sm md:bottom-7 md:right-7">
          1 Corintios 3:14 (LBLA)
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
