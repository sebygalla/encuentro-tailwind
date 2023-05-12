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
      <div className=" flex items-center justify-center">
        <img className="h-[60px]" src={logoTipo}/>
      </div>

      {/* navegacion */}
      <nav
        className={`fixed h-full w-full font-['Poppins']  font-semibold  uppercase text-black xl:static items-center text-[11px] ${
          showMenu ? "left-0" : "-left-full"
        } top-0 z-50 flex  flex-col text-center justify-center  gap-6 bg-blue-900 p-8 transition-all duration-500 xl:h-0 xl:flex-row  xl:justify-end xl:gap-3 xl:bg-transparent`}>
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
        className="z-50 mr-6 text-3xl  text-black xl:hidden">
        {showMenu ? <BsX className="text-4xl" /> : <HiMenuAlt3 />}
      </button>
    </header>
  );
};

export default Header;
