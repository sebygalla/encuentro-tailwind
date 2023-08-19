import {
  FaEllipsisV,
  FaChevronDown,
  FaRegHeart,
  FaHeart,
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
    <div className="mb-[0%] h-[70%] w-[95%] text-center  flex-col">
      {/* contenedor 1 */}
      <div className="mb-12 flex w-full items-center justify-around">
        <div className="flex items-center text-white text-[25px]">
          <FaChevronDown />
        </div>
        <div className="flex-col text-center">
          <h3 className="text-md font-extralight text-white">
            REPRODUCIENDO DESDE PLAYLIST
          </h3>
          <h4 className="text-md font-title font-bold text-white">
            El Encuentro Tristán Suárez | TOP 2023
          </h4>
        </div>
        <FaEllipsisV className="text-center text-white text-[25px]" />
      </div>

      {/* contenedor 2 */}

      <img className="mx-auto h-[50%] w-[90%] bg-spotify bg-cover bg-center contrast-150" />

      {/* contenedor 3 */}

      <div className="mx-auto mt-12 flex w-[85%] items-center justify-between">
        <div className="w-[80%] flex-col text-center">
          <marquee className="text-[30px] font-title font-bold text-white">
            Ministerio de Alabanza y Adoración- Live
          </marquee>
          <h4 className="text-left  text-sm font-extralight text-white">
            EL ENCUENTRO- TRISTAN SUAREZ.
          </h4>
        </div>
        <FaHeart className="text-[27px] text-white" />
      </div>

      {/* contenedor 4 */}
      <div className="mb-3 mt-4 flex h-4 w-full items-center justify-center ">
        <span className="h-[6px] rounded-sm w-[85%] bg-gray-200" />
      </div>
      <div className="relative mx-auto flex w-[85%] items-center justify-between text-[13px] font-light text-white">
        <p>00:00</p>
        <p>03:50</p>
        <span className="absolute -top-[31px] h-6 w-6 rounded-full bg-white "></span>
      </div>

      {/* contenedor 5 */}
      <div className="mx-auto flex w-[85%] items-center justify-around">
        <FaRandom className="text-center text-[30px] text-gray-200" />
        <FaStepBackward className="text-center text-[25px] text-white" />
        <FaPlayCircle className="text-center text-6xl text-white" />
        <FaStepForward className="text-center text-[25px] text-white" />
        <FaRetweet className="text-center text-[30px] text-gray-200" />
      </div>

      {/* contenedor 6 */}

      <div className="mt-7 flex items-center justify-center gap-3 text-[10px] text-white">
        <FaGitter className="text-[20px]" />
        <p className="text-[13px]">calidad de audio: optima</p>
      </div>
    </div>
  );
};

export default Spotify;
