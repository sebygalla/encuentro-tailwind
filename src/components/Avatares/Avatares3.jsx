function Avatares3(props) {
  return (
    <>
      <div className="flex items-center gap-4">
        <img
          src={props.imagenUno}
          className="z-[10] h-8 w-8 rounded-full object-cover ring-4 ring-white md:h-16 md:w-16"
        />
        <img
          src={props.imagenDos}
          className="z-[9] -m-5 h-8 w-10 rounded-full object-cover ring-4 ring-white contrast-150 md:h-16 md:w-16"
        />
        <img
          src={props.imagenTres}
          className="z-[8] h-8 w-8 rounded-full object-cover ring-4 ring-white contrast-150 md:h-16 md:w-16"
        />
        <img
          src={props.imagenCuatro}
          className="z-[7] -m-5 h-8 w-8 rounded-full object-cover ring-4 ring-white contrast-150 md:h-16 md:w-16"
        />
        <img
          src={props.imagenCinco}
          className="z-[6] h-8 w-8 rounded-full object-cover ring-4 ring-white contrast-150 md:h-16 md:w-16"
        />
        <img
          src={props.imagenSeis}
          className="z-[5] -m-5 h-8 w-8 rounded-full object-cover ring-4 ring-white contrast-150 md:h-16 md:w-16"
        />
        <img
          src={props.imagenSiete}
          className="z-[4] h-8 w-8  rounded-full object-cover ring-4 ring-white contrast-150 md:h-16 md:w-16"
        />
        <img
          src={props.imagenOcho}
          className="z-[3] -m-5 h-8 w-8 rounded-full object-cover ring-4 ring-white contrast-150 md:h-16 md:w-16"
        />

        <img
          src={props.imagenNueve}
          className="z-[2] h-8 w-8 rounded-full object-cover ring-4 ring-white contrast-150 md:h-16 md:w-16"
        />

        <img
          src={props.imagenDiez}
          className="z-[2] -m-5 h-8 w-8 rounded-full object-cover ring-4 ring-white contrast-150 md:h-16 md:w-16"
        />

        <img
          src={props.imagenOnce}
          className="z-[1] h-8 w-8 rounded-full object-cover ring-4 ring-white contrast-150 md:h-16 md:w-16"
        />

        <img
          src={props.imagenDoce}
          className="z-[0] -m-5 h-8 w-8 rounded-full object-cover ring-4 ring-white contrast-150 md:h-16 md:w-16"
        />

        <img
          src={props.imagenTrece}
          className="z-[0] h-8 w-8 rounded-full object-cover ring-4 ring-white contrast-150 md:h-16 md:w-16"
        />
      </div>
      <div className="my-3 w-full flex flex-col items- gap-1">
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
