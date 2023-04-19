import { useState } from "react";
import logoTipo from "../../assets/image/tomi-04.png";

// iconos menu and close
import { BsJustifyRight, BsX } from "react-icons/bs";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="item-center fixed z-50 flex w-full  justify-between bg-blue-900/50 p-4  xl:justify-end">
      {/* logotipo */}
      <div className="w-1/5 text-center xl:ml-10">
        <img src={logoTipo} className="w-[70px] xl:w-[70px]" />
      </div>

      {/* navegacion */}
      <nav
        className={`fixed mr-6 h-full w-full font-['Poppins'] text-lg  uppercase text-white xl:static xl:text-[12px] ${
          showMenu ? "left-0" : "-left-full"
        } top-0 z-50 flex flex-1 flex-col items-center justify-center  gap-6 bg-blue-900 p-8 transition-all duration-500 xl:h-0 xl:flex-row  xl:justify-end xl:gap-3 xl:bg-transparent`}>
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
        className="z-50 text-3xl text-white xl:hidden">
        {showMenu ? <BsX /> : <BsJustifyRight />}
      </button>
    </header>
  );
};

export default Header;
