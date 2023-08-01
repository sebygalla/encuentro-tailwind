import { FaEllipsisH, FaChevronLeft } from "react-icons/fa";

const Spotify = () => {
  return (
    // contenedor general
    <div className="h-full w-[88%] flex-col bg-gradient-to-r from-green-500 to-green-700 rounded-xl mb-10">
      {/* contenedor 1 */}
      <div className="mt-5 flex w-full items-center justify-evenly">
        <div className="flex items-center text-white">
          <FaChevronLeft />
          <p className="text-sm">Back</p>
        </div>
        <div className="flex-col text-center">
          <h3 className="text-sm font-extralight text-white">
            PLAYING FROM PLAYLIST
          </h3>
          <h4 className="text-xs font-bold text-white">Iglesia El Encuentro</h4>
        </div>
        <FaEllipsisH className="text-center text-white" />
      </div>

      {/* contenedor 2 */}

      <img className="w-[60%] h-[40%] mt-5 border-none mx-auto bg-portada bg-cover bg-center" />
 


    </div>
  );
};

export default Spotify;
