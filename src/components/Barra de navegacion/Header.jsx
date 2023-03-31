import logoTipo from '../../assets/image/logoCruz.png';
const Header = () => {
    return (
            
            <header className='w-full bg-sky-500/25 fixed'>
                        {/* Barra Navegacion */}
                <nav className="flex container mx-auto items-center uppercase h-20 justify-between  ">
                        {/* Logotipo */}
                        <div>
                            <img src={logoTipo} className="w-20"/>
                        </div>
                        {/* links */}
                        <ul className="text-white items-center md:flex md:cursor-pointer font-bold hidden text-sm/[7px]">
                            <li className="m-4">
                                inicio
                            </li>
                            <span className="item-center">|</span>
                            <li className="m-4 ">
                                nosotros 
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
                        <ul className="text-white bg-slate-500 fixed top-20 w-full h-full text-center  left-0  font-bold md:hidden text-xl justify-center">
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-6 text-white md:hidden">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        </div>
                </nav>
        </header>
    )
  };

  export default Header;