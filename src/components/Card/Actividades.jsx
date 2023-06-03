import React from "react";


function Actividades(props) {
  return (

    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
      <a href="#">
        <img src={props.imagen} className="rounded-t-lg contrast-200" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">
          {props.text}
        </p>
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          CLICK ACA 👇
        </a>
      </div>
    </div>

    

    

  );
}

export default Actividades;
