function Card(props) {
  return (
    <div className="w-[600px] flex flex-col justify-between m-2 p-5 rounded-lg bg-orange-600 shadow cursor-pointer hover:scale-[1.1]">

      <p className="text-white mb-10">{props.testimonio}</p>

      <div className="flex items-center gap-4">
        <img
          src={props.imagen}
          className="h-16 w-16 rounded-full object-cover ring-4 ring-white"
        />

        <div>
          <h3 className="font-bold text-white">{props.nombre}</h3>
          <p className="font-medium text-[12px] text-gray-900">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
