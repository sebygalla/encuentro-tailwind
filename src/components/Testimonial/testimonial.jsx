import React from "react";
import Javier from "../../assets/image/avatarJavier.png";
import Nadia from "../../assets/image/nadia.jpg";

import TituloWeb from "../TitulosWeb/tituloWeb";
const Testimonial = () => {
  return (
    <><TituloWeb title ='Testimonios 💪' />
    <div className="grid w-full grid-cols-1 items-center gap-8 p-10 md:grid-cols-2 lg:grid-cols-3">

      {/* Testimonio */}
      <div className="flex flex-col gap-6 rounded-xl bg-blue-600 p-8 drop-shadow-xl">
        <p className="text-white">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          quibusdam ducimus libero ad tempora doloribus expedita laborum saepe
          voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum,
          obcaecati corrupti aspernatur a..."
        </p>
        <div className="flex items-center gap-4">
          <img
            src={Javier}
            className="h-16 w-16 rounded-full object-cover ring-4 ring-white" />
          <div>
            <h3 className="font-bold text-indigo-200">Pastor Javier Corsi</h3>
            <p className="font-medium text-gray-400">
              Pastor, Iglesia El Encuentro
            </p>
          </div>
        </div>
      </div>

      {/* Testimonio */}
      <div className="flex flex-col gap-6 rounded-xl bg-gray-300 p-8 drop-shadow-xl">
        <p className="text-gray-500">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          quibusdam ducimus libero ad tempora doloribus expedita laborum saepe
          voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum,
          obcaecati corrupti aspernatur a..."
        </p>
        <div className="flex items-center gap-4">
          <img
            src={Nadia}
            className="h-16 w-16 rounded-full object-cover ring-4 ring-white" />
          <div>
            <h3 className="font-bold text-indigo-600">Nadia Saballa</h3>
            <p className="font-medium text-gray-500">
              Miembro Iglesia El Encuentro
            </p>
          </div>
        </div>
      </div>

      {/* Testimonio */}
      <div className="flex flex-col gap-6 rounded-xl bg-red-800 p-8 drop-shadow-xl">
        <p className="text-white">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          quibusdam ducimus libero ad tempora doloribus expedita laborum saepe
          voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum,
          obcaecati corrupti aspernatur a..."
        </p>
        <div className="flex items-center gap-4">
          <img
            src={Nadia}
            className="h-16 w-16 rounded-full object-cover ring-4 ring-gray-300" />
          <div>
            <h3 className="font-bold text-gray-100">Angel Sayago</h3>
            <p className="font-medium text-gray-300">
              Miembro y lider Iglesia El Encuentro
            </p>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Testimonial;
