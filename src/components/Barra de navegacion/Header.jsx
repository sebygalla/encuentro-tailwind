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




  window.addEventListener('scroll', changeColorCruz)






  const menuLinks = [
    { name: "INICIO", link: "#inicio" },
    { name: "NOSOTROS", link: "#nosotros" },
    { name: "VISION", link: "#vision" },
    { name: "ACTIVIDADES", link: "#actividades" },
    { name: "TESTIMONIOS", link: "#testimonios" },
    { name: "CONTACTO", link: "#contacto" },
  ];

  return (
    <header className={`item-center fixed z-50 flex h-[90px] w-full justify-between bg-white shadow md:h-[70px] xl:justify-end ${color ? 'bg-white/40 transition-colors duration-700 backdrop-blur-sm' :'' }`}>
      {/* logotipo */}

      <div className="flex items-center justify-center">
        <img
          className={`ml-2 h-[60px] cursor-pointer md:h-[60px] xl:ml-10 ${cruz ? "hidden transition-opacity duration-500" : ""}`}
          src={logoTipo}
          
        />
         
      </div>

    

      {/* navegacion */}
      <nav
        className={`fixed top-0 z-30 mr-10  flex h-full  w-full items-center justify-center gap-6  bg-white p-8 text-center  font-['Poppins'] text-[18px] font-semibold  uppercase text-black transition-all duration-500 xl:static xl:h-0 xl:flex-row  xl:justify-end xl:gap-3 xl:bg-transparent xl:text-[11px] ${
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
