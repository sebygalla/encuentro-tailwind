import { useState } from "react";
import logoTipo from "../../assets/image/tomi-05.png";


// iconos menu and close
import { BsX } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="item-center fixed z-50 flex w-full md:h-[70px] h-[90px]  justify-between bg-white xl:justify-end shadow">
      {/* logotipo */}
      <div className=" z-50 flex items-center justify-center">
        <img className="h-[70px] z-50" src={logoTipo}/>
      </div>

      {/* navegacion */}
      <nav
        className={`fixed h-full w-full font-['Poppins']  font-semibold  uppercase  xl:static items-center xl:text-[12px] text-[18px] ${
          showMenu ? "left-0" : "-left-full"
        } top-0 z-30 flex  flex-col text-center justify-center  gap-6 bg-white p-8 transition-all duration-500 xl:h-0 xl:flex-row  xl:justify-end xl:gap-3 xl:bg-transparent text-black`}>
        <a href="#" className=" ">
          inicio
        </a>

        <span className="hidden xl:block">|</span>

        <a href="#" className="">
          nosotros
        </a>

        <span className="hidden xl:block">|</span>

        <a href="#" className="">
          ministerios
        </a>

        <span className="hidden xl:block">|</span>

        <a href="#" className="">
          actividades
        </a>

        <span className="hidden xl:block">|</span>

        <a href="#" className="">
          eventos
        </a>

        <span className="hidden xl:block">|</span>

        <a href="#" className="">
          testimonios
        </a>

        <span className="hidden xl:block">|</span>

        <a href="#" className="">
          contacto
        </a>
      </nav>

    

      {/* open and close hamburguer */}
      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className="z-40 mr-6 text-3xl  text-black xl:hidden">
        {showMenu ? <BsX className="text-4xl" /> : <HiMenuAlt3 />}
      </button>
    </header>
  );
};

export default Header;
