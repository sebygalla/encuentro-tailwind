import { useState } from "react";
import logoTipo from "../../assets/image/tomi-04.webp";

// iconos menu and close
import { BsX } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";


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
    { name: "GALERIA", link: "#galeria" },
    { name: "TESTIMONIOS", link: "#testimonios" },
    { name: "CONTACTO", link: "#contacto" },
  ];

  return (
    <header
      className={`xl:w-[1200px] w-full  item-center fixed z-50 flex h-[70px] mx-auto justify-between bg-black shadow xl:h-[70px] xl:justify-end ${
        color
          ? "z-20 h-[50px] bg-black/60 backdrop-blur-sm transition-colors  duration-300 ease-in-out"
          : ""
      }`}>
      {/* open and close hamburguer */}
      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className="z-40 ml-[5%] text-2xl  text-white xl:hidden">
        {showMenu ? (
          <BsX className=" text-3xl" />
        ) : (
          <HiMenu className="text-2xl" />
        )}
      </button>

      {/* logotipo */}

      <div className="flex items-center justify-center">
        <img
          className={`mr-4 h-[50px] cursor-pointer md:mr-[90%] md:h-[50px] xl:ml-[150px] ${
            cruz ? "hidden" : ""
          }`}
          src={logoTipo}
        />
      </div>

      {/* navegacion */}
      <nav
        className={`fixed inset-0 z-10 mr-1 flex h-[100vh]  w-[100vw]  items-center justify-center gap-6  bg-black p-8  text-center font-links text-[18px]  font-semibold uppercase text-white transition-all duration-500 xl:static xl:h-0 xl:flex-row  xl:justify-end xl:gap-3 xl:bg-transparent xl:text-[11px] ${
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
