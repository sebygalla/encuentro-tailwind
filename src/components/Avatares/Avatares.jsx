function Avatares(props) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={props.imagen}
        className="h-16 w-16 rounded-full object-cover ring-4 ring-white"
      />

      <div className="ml-2 md:ml-6 flex flex-col gap-1">
        <h3 className="font-bold text-md text-white">{props.nombre}</h3>
        <p className="font-light text-xs text-gray-100">{props.description}</p>
      </div>
    </div>
  );
}

export default Avatares;
