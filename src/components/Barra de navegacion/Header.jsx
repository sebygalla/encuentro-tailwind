import { useState } from "react";
import logoTipo from "../../assets/image/tomi-04.png";
import { FaAlignRight, FaKaggle } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState (false);


  return (

    <header className="flex item-center w-full h-[120px] p-4 bg-slate-900/50 justify-between
    xl:justify-end z-50'">
      {/* logotipo */}
      <div className="w-1/5  h-[80px] text-center bg-orange-400">
        <img src={logoTipo} className="w-[80px]" />
      </div>

      {/* navegacion */}
      <nav className={`fixed text-white text-sm  uppercase xl:static w-full h-full ${ showMenu ? "left-0" : "-left-full"} top-0 flex-1 flex flex-col xl:flex-row p-8  items-center bg-slate-900 z-50 justify-start  gap-8 transition-all duration-500`}>
        
        {/* close */}
        <button className="xl:hidden">
          <FaKaggle />
        </button>

        <a href="#" className="">
          inicio
        </a>

        <a href="#" className="">
          nosotros
        </a>

        <a href="#" className="">
          ministerios
        </a>

        <a href="#" className="">
          contacto
        </a>
      </nav>

      {/* hamburguesa */}
      <button onDoubleClick={()=>{
        setShowMenu(!showMenu)
      }} className="text-xl xl:hidden">
        <FaAlignRight />
      </button>

    </header>
  );
};

export default Header;
