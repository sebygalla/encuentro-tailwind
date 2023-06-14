function avataresMobile(props) {
    return (
      <div className="flex items-center gap-4">
        <img
          src={props.imagen}
          className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
        />
  
        <div className="ml-2 md:ml-6 flex flex-col gap-1">
          <h3 className={`text-md font-semibold text-left text-${props.color}`}>{props.nombre}</h3>
          <p className={`font-semibold text-xs text-${props.color}`}>{props.description}</p>
         
        </div>
      </div>
    );
  }
  
  export default avataresMobile;
  