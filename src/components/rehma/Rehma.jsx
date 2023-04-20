import { FaQuoteLeft, FaQuoteRight  } from "react-icons/fa";

function Rehma() {
  return (
    <div className=" w-full h-screen gap-1 bg-red-800 p-10  text-center font-['Poppins'] text-white flex item-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10 w-[700px] p-10">
     
        <p className="text-3xl md:text-xl font-light leading-7 md:leading-[50px] relative">
        <FaQuoteLeft className="absolute -left-9"/>
          Si permanece la obra de alguno que ha edificado sobre el fundamento,
          recibirá recompensa 
          <FaQuoteRight className="absolute -right-9" />   
        </p>
      
        <h3 className="text-lg md:text-3xl font-bold">1 Corintios 3:14 (LBLA)</h3>
        <h4 className="text-[10px] md:text-[15px]">Palabra Rhema 2023</h4>
      </div>
    </div>
  );
}

export default Rehma;
