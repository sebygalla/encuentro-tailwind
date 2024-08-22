import Avatares from "../Avatares/Avatares";
import Jorge from "../../assets/image/avatarJorge.webp";

function Rehma(props) {
  return (
    <div className="item-center xl:mt-0 xl:mb-[10%] mt-20  flex justify-center relative">
      <div className="relative m-3 mb-10 flex h-[450px] w-[900px] flex-col justify-center rounded-[25px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  p-8 text-left text-white shadow md:m-20 md:h-[400px] md:w-[900px]">
        <p className="relative text-justify text-[25px] font-semibold md:text-3xl md:leading-[50px] xl:text-3xl">
          Que el Señor lleve sus corazones a amar como Dios ama y <strong>perseverar</strong> como Cristo perseveró. 
        </p>

        <h3 className="md:text-1xl absolute top-[25%] text-sm md:bottom-7 md:right-7">
          2 Tesalonicenses 3:5 (NVI)
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
