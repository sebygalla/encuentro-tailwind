import logoTipo from '../../assets/image/logoCruz.png';
import Whatsapp from '../../assets/whatsapp.svg';


const Header = () => {
    return (

            <nav className="flex w-full fixed top-0 left-0 right-0 container m-auto bg-gray-900/80 items-center z-50 uppercase">
                        {/* Logotipo */}
                        <div>
                            <img src={logoTipo} className="w-20"/>
                        </div>
                        {/* links */}
                        <ul className="text-white mx-auto items-center md:flex md:cursor-pointer font-bold hidden text-sm/[7px]">
                            <li className="m-4">
                                inicio
                            </li>
                            <span className="item-center">|</span>
                            <li className="m-4 ">
                                nosotros 
                            </li>
                            <span className="item-center">|</span>
                            <li className="m-4 ">
                                actividades 
                            </li>
                            <span className="item-center">|</span>
                            <li className="m-4  ">
                                ministerios
                            </li>
                            <span className="item-center">|</span>
                            <li className="m-4  ">
                                contacto
                            </li>
                        </ul>
                        {/* Links mobile */}
                        <ul className="text-white fixed top-20 w-full h-full text-center  left-0  font-bold md:hidden text-xl justify-center">
                            <li className="m-14">
                                inicio
                            </li>
                     
                            <li className="m-14">
                                nosotros 
                            </li>
                            
                            <li className="m-14">
                                ministerios
                            </li>
                           
                            <li className="m-14">
                                contacto
                            </li>
                        </ul>

                    
                        {/* Boton hamburguesa */}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-6 md:hidden text-white bg-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
           
                        </div>

                        <div>
                            <img src={Whatsapp} className="w-6 mr-7 items-center invert cursor-pointer"/>
                        </div>

                </nav>
    )
  };

  export default Header;