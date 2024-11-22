import logoTipo from "../../assets/image/tomi-04.webp";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-700 border-t-2
    ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex">
      

          <div className="grid grid-cols-1 text-center xl:text-left xl:grid-cols-4 xl:gap-[150px] gap-10 w-96 xl:w-auto mx-auto">

        
            <a href="#"  className="mx-auto mb-10">
              <img
                src={logoTipo}
                className="h-[70px] md:h-[100px] md:w-[100px]"
                alt="Cruz Logo"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"></span>
            </a>
      

            <div>
              <h2 className="mb-3 font-title text-3xl font-semibold md:text-md md:font-semibold uppercase text-gray-200 dark:text-white">
                Comunidad
              </h2>
              <ul className="font-light text-sm md:text-md text-gray-200 dark:text-gray-400">
                <li className="mb-4 font-links font-normal leading-5">
                  
                  <p>Natta 362, Tristán Suárez, Prov. Bs. As./ Argentina</p>
                  <a className="font-semibold" href="mailto:iglesiaelencuentrotsuarez@gmail.com" target="blank">
                  iglesiaelencuentrotsuarez@gmail.com
                  </a>
            
                  
                </li>
                <li className="leading-5 font-links font-normal">

                    <strong className="font-semibold">Reuniones centrales:</strong> Miercoles 19:00hs y Domingos 10:30hs Consultorio Pastoral: Martes 17hs a 20hs. Miercoles 17hs a 19hs
                  
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-title text-3xl font-semibold uppercase text-gray-200 dark:text-white">
              SOBRE NOSOTROS
              </h2>
              <ul className="font-normal text-sm text-gray-200 dark:text-gray-400">
                <li className="mb-4 font-links font-normal leading-5">
                  
                  Iglesia El Encuentro Tristán Suárez ¡Bienvenido al lugar de tu encuentro con Dios, gracias por acompañarnos!
                
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-title text-3xl font-semibold uppercase text-gray-200 dark:text-white">
                Seguinos
              </h2>
              <ul className="font-light text-sm text-gray-200 dark:text-gray-400">
                <li className="mb-4 leading-5 font-links font-normal">
                  <a
                    href="https://www.facebook.com/iglesiaelencuentrotristansuarez"
                    className="hover:underline ">
                    Facebook
                  </a>
                </li>
                <li className="mb-4 leading-5 font-links font-normal">
                  <a
                    href="https://www.youtube.com/@iglesiaelencuentrots-music8317"
                    className="hover:underline">
                    YouTube
                  </a>
                </li>
                <li className="mb-4 leading-5 font-links font-normal">
                  <a
                    href="https://www.instagram.com/igle.elencuentro.suarez/"
                    className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

        <div className="text-center sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-200 dark:text-gray-400">
            © 2025{" "}
            <a href="#" className="hover:underline">
              Iglesia El Encuentro Tristán Suárez  
            </a>
             - Todos los derechos reservados.
          </span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
