import logoTipo from "../../assets/image/logoCruz.png";
import Whatsapp from "../../assets/whatsapp.svg";
import HeaderMenuMobile from "../Barra de navegacion/menuMobile";

const Header = () => {
  return (
    <>
      <nav className="flex w-screen fixed m-auto bg-gray-900/80 items-center justify-between z-30 uppercase">
        {/* Logotipo */}
        <div>
          <img src={logoTipo} className="w-20 ml-5" />
        </div>

        <HeaderMenuMobile />

        {/* Boton hamburguesa */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-14 xl:hidden text-white bg-black">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </nav>
     
    </>
  );
};

export default Header;
