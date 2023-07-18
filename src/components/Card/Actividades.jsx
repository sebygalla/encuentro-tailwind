import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import BotonDos from "../boton/BotonDos";

function Actividades(props) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos="fade-right"
        className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
        <a href="#">
          <img
            src={props.imagen}
            className="rounded-t-lg contrast-200"
            alt=""
          />
        </a>
        <div className="flex flex-col items-center justify-center p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {props.title}
            </h5>
          </a>

          <BotonDos text="Aplicá!... 👈"
          title="Niños"
          description="Un espacio donde cientos de chicos y chicas descubren su propósito divino para nunca más soltarlo. Cada sábado nos juntamos para acercarnos al corazón de nuestro Creador; para disfrutar de amistades que sacan lo mejor de nosotros, para soñar, reír y llorar juntos. Anhelamos que cada joven descubra el potencial que Dios depósito en él, que sueñe en grande y que deje huella en nuestra sociedad. Somos jóvenes con propósito, que desarrollan su potencial, predican a Jesús y sirven a los demás. Horario de reunion: Todos los sábados a las 20hs." />
        </div>
      </div>

   
    </>
  );
}

export default Actividades;
