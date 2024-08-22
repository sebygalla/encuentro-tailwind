import { FaQuoteRight } from "react-icons/fa";

function Card(props) {
  return (
    <div className="md:w-[600px] w-[350px] flex flex-col justify-between m-2 md:p-12 p-8 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% shadow cursor-pointer hover:shadowHover hover:transition-shadow relative">

      <p className="text-white mb-10">{props.testimonio}</p>

      <div className="flex items-center gap-4">
        <img
          src={props.imagen}
          className="h-16 w-16 rounded-full object-cover ring-4 ring-white"
        />

        <div>
          <h3 className="font-bold text-white">{props.nombre}</h3>
          <p className={`font-medium text-[12px] text-${props.color}`}>{props.description}`</p>
        </div>
      </div>
      <div className="absolute top-[65%] left-[80%] md:top-[50%] md:left-[80%] text-4xl md:text-5xl text-yellow-400/30">
          <FaQuoteRight />
      </div>


    </div>
  );
}
export default Card;
