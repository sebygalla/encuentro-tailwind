import {
  FaEllipsisV,
  FaChevronDown,
  FaRegHeart,
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaRetweet,
  FaPlayCircle,
  FaGitter,
} from "react-icons/fa";

const Spotify = () => {
  return (
    // contenedor general
    <div className="mb-10 h-[700px] w-[390px] text-center  flex-col rounded-xl bg-gradient-to-br from-yellow-600  to-red-600 xl:w-[50%] xl:h-[100%] xl:-mb-[50%] md:p-12">
      {/* contenedor 1 */}
      <div className="mb-7 mt-8 flex w-full items-center justify-around">
        <div className="flex items-center text-white">
          <FaChevronDown />
        </div>
        <div className="flex-col text-center">
          <h3 className="text-xs font-extralight text-white">
            REPRODUCIENDO DESDE PLAYLIST
          </h3>
          <h4 className="text-xs font-bold text-white">
            Iglesia El Encuentro | TOP 2023
          </h4>
        </div>
        <FaEllipsisV className="text-center text-white" />
      </div>

      {/* contenedor 2 */}

      <img className="mx-auto h-[40%] w-[70%] xl:w-[40%] xl:h-[60%] bg-spotify bg-cover bg-center contrast-150" />

      {/* contenedor 3 */}

      <div className="mx-auto mt-12 flex w-[85%] items-center justify-between">
        <div className="w-60 flex-col text-center">
          <marquee className="text-[22px] font-extrabold text-white">
            Ministerio de Alabanza y Adoración- Live
          </marquee>
          <h4 className="text-left  text-xs font-extralight text-white">
            IGLESIA EL ENCUENTRO- TRISTAN SUAREZ.
          </h4>
        </div>
        <FaRegHeart className="text-center text-[20px] text-white" />
      </div>

      {/* contenedor 4 */}
      <div className="mb-3 mt-4 flex h-4 w-full items-center justify-center ">
        <span className="h-[4px] w-[85%] bg-gray-400" />
      </div>
      <div className="relative mx-auto -mt-3 flex w-[85%] items-center justify-between text-[10px] font-light text-white">
        <p>00:00</p>
        <p>03:50</p>
        <span className="absolute -top-[16px] h-4 w-4 rounded-full bg-white "></span>
      </div>

      {/* contenedor 5 */}
      <div className="mx-auto mt-0 flex w-[85%] items-center justify-around">
        <FaRandom className="text-center text-[20px] text-gray-300" />
        <FaStepBackward className="text-center text-[20px] text-white" />
        <FaPlayCircle className="text-center text-4xl text-white" />
        <FaStepForward className="text-center text-[20px] text-white" />
        <FaRetweet className="text-center text-[20px] text-gray-300" />
      </div>

      {/* contenedor 6 */}

      <div className="mt-9 flex items-center justify-center gap-3 text-[10px] text-white">
        <FaGitter className="text-[20px]" />
        <p>calidad de audio: optima</p>
      </div>
    </div>
  );
};

export default Spotify;
