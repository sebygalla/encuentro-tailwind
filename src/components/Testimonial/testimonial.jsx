import React from "react";


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
        src="https://img.freepik.com/foto-gratis/freelancer-mujer-glamorosa-disfrutando-manana-trabajando-portatil-foto-dama-latina-alegre-camisa-cuadros-posando-gafas_197531-10658.jpg"
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
        src="https://img.freepik.com/foto-gratis/foto-feliz-adorable-mujer-africana-rizada-sentada-frente-computadora-portatil-abierta-cafeteria-acera-satisfecha-hacer-buena-presentacion_273609-3488.jpg"
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
        src="https://img.freepik.com/foto-gratis/retrato-hombre-negocios-mascarilla-usando-su-computadora-portatil-mientras-sentado-escaleras-al-aire-libre-concepto-negocio-nuevo-concepto-estilo-vida-normal_58466-14709.jpg"
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
