function Avatares3(props) {
  return (
    <>
      <div className="flex items-center gap-4">
        <img
          src={props.imagenUno}
          className="z-[10] w-10 h-10 md:h-16 md:w-16 rounded-full object-cover ring-4 ring-white"
        />
        <img
          src={props.imagenDos}
          className="z-[9] -m-5 w-10 h-10 md:h-16 md:w-16 rounded-full object-cover ring-4 ring-white contrast-150"
        />
        <img
          src={props.imagenTres}
          className="z-[8] w-10 h-10 md:h-16 md:w-16 rounded-full object-cover ring-4 ring-white contrast-150"
        />
        <img
          src={props.imagenCuatro}
          className="z-[7] -m-5 w-10 h-10 md:h-16 md:w-16 rounded-full object-cover ring-4 ring-white contrast-150"
        />
        <img
          src={props.imagenCinco}
          className="z-[6] w-10 h-10 md:h-16 md:w-16 rounded-full object-cover ring-4 ring-white contrast-150"
        />
        <img
          src={props.imagenSeis}
          className="z-[5] -m-5 w-10 h-10 md:h-16 md:w-16 rounded-full object-cover ring-4 ring-white contrast-150"
        />
        <img
          src={props.imagenSiete}
          className="z-[4] w-10 h-10  md:h-16 md:w-16 rounded-full object-cover ring-4 ring-white contrast-150"
        />
        <img
          src={props.imagenOcho}
          className="z-[3] -m-5 w-10 h-10 md:h-16 md:w-16 rounded-full object-cover ring-4 ring-white contrast-150"
        />

        <img
          src={props.imagenNueve}
          className="z-[2] w-10 h-10 md:h-16 md:w-16 rounded-full object-cover ring-4 ring-white contrast-150"
        />
      </div>
      <div className="my-5 flex flex-col items-center gap-1">
        <h3 className={`text-md text-left font-semibold text-${props.color}`}>
          {props.nombre}
        </h3>
        <p className={`text-xs font-light text-${props.color}`}>
          {props.description}
        </p>
      </div>
    </>
  );
}

export default Avatares3;
