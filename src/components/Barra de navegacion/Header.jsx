import { useState } from "react";
import logoTipo from "../../assets/image/tomi-04.png";

// iconos menu and close
import { BsJustifyRight, BsX } from "react-icons/bs";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="item-center z-50' flex w-full justify-between bg-slate-900/80 absolute p-4 xl:justify-end">
      {/* logotipo */}
      <div className="w-1/5 text-center">
        <img src={logoTipo} className="w-[70px]" />
      </div>

      {/* navegacion */}
      <nav
        className={`fixed h-full w-full font-['Poppins'] text-lg  uppercase text-white xl:static xl:text-[12px] ${
          showMenu ? "left-0" : "-left-full"
        } top-0 z-50 flex flex-1 flex-col bg-blue-900 xl:bg-transparent  items-center justify-center xl:h-0 gap-6 p-8 transition-all duration-500  xl:flex-row xl:justify-end xl:gap-3`}>
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
          contacto
        </a>

      </nav>

      {/* open and close hamburguer */}
      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className="z-50 text-4xl text-white xl:hidden">
        
        {showMenu ? <BsX /> : <BsJustifyRight />}
      </button>
    </header>
  );
};

export default Header;
