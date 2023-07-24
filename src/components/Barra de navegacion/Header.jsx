import { useState } from "react";
import logoTipo from "../../assets/image/tomi-05.png";

// iconos menu and close
import { BsX } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [color, setColor] = useState(false);
  const [cruz, setCruz] = useState(false);

  const changeColorCruz = () => {
    if (window.scrollY >= 90) {
      setColor(true);
      setCruz(true);
    } else {
      setColor(false);
      setCruz(false);
    }
  };

  window.addEventListener("scroll", changeColorCruz);

  const menuLinks = [
    { name: "INICIO", link: "#inicio" },
    { name: "NOSOTROS", link: "#nosotros" },
    { name: "VISION", link: "#vision" },
    { name: "ACTIVIDADES", link: "#actividades" },
    { name: "TESTIMONIOS", link: "#testimonios" },
    { name: "CONTACTO", link: "#contacto" },
  ];

  return (
    <header
      className={`item-center bg-white fixed z-50 flex h-[90px] xl:h-[70px] w-full justify-between shadow xl:justify-end ${
        color
          ? "backdrop-blur-sm transition-colors duration-700 bg-gray-500/50"
          : ""
      }`}>

      {/* open and close hamburguer */}
      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className="z-40 ml-[5%] text-3xl  text-slate-900 xl:hidden">
        {showMenu ? <BsX className=" text-4xl" /> : <HiMenuAlt3 />}
      </button>

      {/* logotipo */}

      <div className="flex items-center justify-center">
        <img
          className={`md:mr-[90%] mr-4 h-[60px] cursor-pointer md:h-[70px] xl:ml-[150px] ${
            cruz ? "hidden" : ""
          }`}
          src={logoTipo}
        />
      </div>

      {/* navegacion */}
      <nav
        className={`fixed inset-0 z-10 mr-10 flex h-[100vh]  w-[100vw]  items-center justify-center gap-6  p-8 text-center  font-['Poppins'] text-[18px] font-semibold  uppercase text-black bg-white transition-all duration-500 xl:static xl:h-0 xl:flex-row  xl:justify-end xl:gap-3 xl:bg-transparent xl:text-[11px] ${
          showMenu ? "left-0" : "-left-full"
        }
        `}>
        <ul className="flex-col xl:hidden">
          {menuLinks?.map((menu, i) => (
            <li onClick={() => setShowMenu(false)} key={i} className="m-10">
              <a href={menu?.link}>{menu?.name}</a>
            </li>
          ))}
        </ul>

        <ul className="hidden gap-10 xl:flex">
          {menuLinks?.map((menu, i) => (
            <li onClick={() => setOpen(false)} key={i} className="m-2">
              <a href={menu?.link}>{menu?.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
