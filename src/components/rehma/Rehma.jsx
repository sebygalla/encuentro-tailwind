import { FaQuoteLeft, FaQuoteRight  } from "react-icons/fa";

function Rehma() {
  return (
    <div className="w-100 h-[100vh] ml-1 mr-1 bg-gray-300 text-center font-['Poppins'] text-white flex item-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10 w-[700px]  m-5">
     
        <p className="text-2xl md:text-4xl  leading-7 md:leading-[60px] text-justify relative">
        <FaQuoteLeft className="absolute -left-14"/>
          Si permanece la obra de alguno que ha edificado sobre el fundamento,
          recibirá recompensa 
          <FaQuoteRight className="absolute -right-1" />   
        </p>
      
        <h3 className="text-lg md:text-3xl font-bold">1 Corintios 3:14 (LBLA)</h3>
        <h4 className="text-[10px] md:text-[25px]">Palabra Rhema 2023</h4>
      </div>
    </div>
  );
}

export default Rehma;
