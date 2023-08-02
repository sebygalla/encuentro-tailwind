import { FaEllipsisV, FaChevronDown, FaRegHeart, FaRegWindowMinimize } from "react-icons/fa";

const Spotify = () => {
  return (
    // contenedor general
    <div className="mb-10 h-full w-[88%] flex-col rounded-xl bg-gradient-to-br  from-yellow-600 to-red-600">
      {/* contenedor 1 */}
      <div className="mt-5 flex w-full items-center justify-between p-8">
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

      <img className="mx-auto h-[50%] w-[85%] border-none bg-portada bg-cover bg-center" />

      {/* contenedor 3 */}

      <div className="-mt-4 flex w-full items-center justify-between p-8">
        <div className="flex-col text-center">
          <h3 className="text-base font-bold text-white">Ven descansa- Live</h3>
          <h4 className="text-left  text-xs text-white">
            Iglesia El Encuentro{" "}
          </h4>
        </div>
        <FaRegHeart className="text-center text-[20px] text-white" />
      </div>

    
    

      
    </div>
  );
};

export default Spotify;
