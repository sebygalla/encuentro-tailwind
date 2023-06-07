function avatarCirculo(props) {
    return (
      <div className="flex items-center gap-5">
        <img
          src={props.imagenUno}
          className="h-14 w-14 rounded-full object-cover ring-4 ring-white z-20"
        />
           <img
          src={props.imagenDos}
          className="h-14 w-14 rounded-full object-cover ring-4 ring-white z-10 contrast-150 -m-6"
        />
  
        <div className="ml-6 md:ml-6 flex flex-col gap-1">
          <h3 className={`text-md font-semibold text-left text-${props.color}`}>{props.nombre}</h3>
          <p className={`font-semibold text-xs text-${props.color}`}>{props.description}</p>
         
        </div>
      </div>
    );
  }
  
  export default avatarCirculo;
  