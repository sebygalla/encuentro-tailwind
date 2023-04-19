import React from "react";
import Javier from "../../assets/image/avatarJavier.png"
import Nadia from "../../assets/image/nadia.jpg"
import Angelito from "../../assets/image/angelito.png"
const Testimonial = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 p-8">
{/* Testimonio */}
  <div className="flex flex-col gap-6 bg-gray-100 p-8 rounded-xl drop-shadow-xl">
    <p className="text-gray-500">
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
      quibusdam ducimus libero ad tempora doloribus expedita laborum
      saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
      dolorum, obcaecati corrupti aspernatur a..."
    </p>
    <div className="flex items-center gap-4">
      <img
        src={Javier}
        className="w-16 h-16 object-cover rounded-full ring-4 ring-gray-300"
      />
      <div>
        <h3 className="text-indigo-500 font-bold">
          Elba Moreno Gonzalez
        </h3>
        <p className="text-gray-500 font-medium">SEO, Grupo Cimarrón</p>
      </div>
    </div>
  </div>

  {/* Testimonio */}
  <div className="flex flex-col gap-6 bg-gray-100 p-8 rounded-xl drop-shadow-xl">
    <p className="text-gray-500">
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
      quibusdam ducimus libero ad tempora doloribus expedita laborum
      saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
      dolorum, obcaecati corrupti aspernatur a..."
    </p>
    <div className="flex items-center gap-4">
      <img
        src={Nadia}
        className="w-16 h-16 object-cover rounded-full ring-4 ring-gray-300"
      />
      <div>
        <h3 className="text-indigo-500 font-bold">
          Ximena Araiza Mendoza
        </h3>
        <p className="text-gray-500 font-medium">
          Gerente TI, Grupo Bafar
        </p>
      </div>
    </div>
  </div>

    {/* Testimonio */}
  <div className="flex flex-col gap-6 bg-gray-100 p-8 rounded-xl drop-shadow-xl">
    <p className="text-gray-500">
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
      quibusdam ducimus libero ad tempora doloribus expedita laborum
      saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
      dolorum, obcaecati corrupti aspernatur a..."
    </p>
    <div className="flex items-center gap-4">
      <img
        src={Angelito}
        className="w-16 h-16 object-cover rounded-full ring-4 ring-gray-300"
      />
      <div>
        <h3 className="text-indigo-500 font-bold">José Luis Trejo</h3>
        <p className="text-gray-500 font-medium">
          Community manager, Facebook
        </p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Testimonial;
