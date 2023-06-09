function Map() {
  return (
  

      <form className="mx-auto my-16 flex md:w-[60%] w-[90%] flex-col items-center gap-6  p-8  shadow-lg bg-black/30 backdrop-blur-sm">
       
        <input
          className="w-full rounded border border-gray-300 p-2"
          type="text"
          placeholder="Nombre"
        />
        <input
          className="w-full rounded border border-gray-300 p-2"
          type="email"
          placeholder="Correo Electrónico"
        />
        <textarea
          className="w-full rounded border border-gray-300 p-2"
          placeholder="Mensaje"
        />
        <button className="cursor-pointer rounded bg-gradient-to-br from-yellow-600 to-red-600 p-2 text-white w-full">
          Enviar
        </button>
      </form>
 
  );
}

export default Map;
