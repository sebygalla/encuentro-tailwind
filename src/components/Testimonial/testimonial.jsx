import React from "react";
import { IoIosQuote } from "react-icons/io";


const Testimonial = (props) => {
  return (
    
    <div className="flex flex-col bg-red-600 gap-6 rounded-xl p-8 shadow relative">
      <p className="text-white">{props.testimonio}</p>
  
      <div className="flex items-center gap-4">
        <img
          src={props.imagen}
          className="h-16 w-16 rounded-full object-cover ring-4 ring-white"
        />

        <div>
          <h3 className="font-bold text-white">{props.nombre}</h3>
          <p className="font-medium text-gray-900">{props.description}</p>
        </div>

      </div>

      <div className="absolute top-0 w-96">
          <IoIosQuote />
      </div>
    </div>
  );
};

export default Testimonial;
