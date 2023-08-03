import {
  FaEllipsisV,
  FaChevronDown,
  FaRegHeart,
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaRetweet,
  FaPlayCircle,
  FaGitter
} from "react-icons/fa";


const Spotify = () => {
  return (
    // contenedor general
    <div className="mb-10 h-full w-[95%] flex-col rounded-xl bg-gradient-to-br  from-yellow-600 to-red-600">
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

      <img className="mx-auto h-[50%] w-[85%] bg-spotify contrast-150 bg-cover bg-center" />

      {/* contenedor 3 */}

      <div className="mx-auto mt-9 flex w-[85%] items-center justify-between">
        <div className="flex-col text-center">
          <h3 className="text-base font-bold text-white">Ven descansa- Live</h3>
          <h4 className="text-left  text-xs text-white">
            Iglesia El Encuentro{" "}
          </h4>
        </div>
        <FaRegHeart className="text-center text-[20px] text-white" />
      </div>

      {/* contenedor 4 */}
      <div className="mb-3 mt-4 flex h-4 w-full items-center justify-center ">
        <span className="h-[4px] w-[85%] bg-gray-400" />
      </div>
      <div className="relative mx-auto flex w-[85%] items-center justify-between text-[10px] font-light text-white">
        <p>00:00</p>
        <p>03:50</p>
        <span className="absolute -top-[28px] h-4 w-4 rounded-full bg-white "></span>
      </div>

      {/* contenedor 5 */}
      <div className="mx-auto mt-1 flex w-[85%] items-center justify-around">
        <FaRandom className="text-center text-[20px] text-white" />
        <FaStepBackward className="text-center text-[20px] text-white" />
        <FaPlayCircle className="text-center text-4xl text-white" />
        <FaStepForward className="text-center text-[20px] text-white" />
        <FaRetweet className="text-center text-[20px] text-white" />
      </div>

      {/* contenedor 6 */}

      <div className="flex items-center justify-center text-white gap-3 text-[10px] mt-3">
      <FaGitter className="text-[20px]" />
      <p>
        calidad de audio: optima
      </p>
      </div>



    </div>
  );
};

export default Spotify;
