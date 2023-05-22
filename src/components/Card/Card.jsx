function Card(props) {
  return (
    <div className="md:w-[600px] w-[350px] flex flex-col justify-between m-2 md:p-12 p-8 rounded-lg bg-orange-600 shadow cursor-pointer hover:shadowHover hover:transition-shadow">

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
