import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

import BotonDos from "../boton/BotonDos"





function Actividades(props) {

  useEffect(() => {
    AOS.init();
  }, [])



  return (
    

    <div  data-aos="fade-right" className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
      <a href="#">
        <img src={props.imagen} className="rounded-t-lg contrast-200" alt="" />
      </a>
      <div className="p-5 flex items-center justify-center flex-col">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.title}
          </h5>
        </a>

        <BotonDos text="Aplicá! 👈" />

      </div>
    
    </div>
   

    

    

  );
}

export default Actividades;
