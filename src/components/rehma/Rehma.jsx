import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Rehma(props) {
  return (
    <div className="item-center flex justify-center mt-20">
      <div className="md:m-20 m-3 flex h-[450px] w-[900px] md:h-[600px] md:w-[900px] flex-col justify-center rounded-[25px] bg-slate-900 p-8 text-left text-white shadow relative mb-10">
        <p className="relative text-justify text-[25px] md:text-3xl xl:text-4xl md:leading-[50px] font-semibold">
          Si permanece la obra de alguno que ha edificado sobre el fundamento,
          recibirá recompensa.
        </p>

        <h3 className="md:text-1xl text-sm absolute top-[25%] md:bottom-7 md:right-7">
          1 Corintios 3:14 (LBLA)
        </h3>

        
        <div className="flex items-center gap-4 absolute bottom-7">
          <img
            src={props.imagen}
            className="h-16 w-16 rounded-full object-cover ring-4 ring-white"
          />

          <div>
            <h3 className="font-bold text-white">{props.nombre}</h3>
            <p className="font-medium text-gray-200">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rehma;
