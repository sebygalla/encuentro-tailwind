function Avatares3(props) {
  return (
    <><div className="flex items-center gap-4">
          <img
              src={props.imagenUno}
              className="z-[10] h-16 w-16 rounded-full object-cover ring-4 ring-white" />
          <img
              src={props.imagenDos}
              className="z-[9] -m-10 h-16 w-16 rounded-full object-cover ring-4 ring-white contrast-150" />
          <img
              src={props.imagenTres}
              className="z-[8] m-0 h-16 w-16 rounded-full object-cover ring-4 ring-white contrast-150" />
          <img
              src={props.imagenCuatro}
              className="z-[7] -m-10 h-16 w-16 rounded-full object-cover ring-4 ring-white contrast-150" />
          <img
              src={props.imagenCinco}
              className="z-[6] m-0 h-16 w-16 rounded-full object-cover ring-4 ring-white contrast-150" />
          <img
              src={props.imagenSeis}
              className="z-[5] -m-9 h-16 w-16 rounded-full object-cover ring-4 ring-white contrast-150" />
          <img
              src={props.imagenSiete}
              className="z-[4] m-0 h-16 w-16 rounded-full object-cover ring-4 ring-white contrast-150" />
          <img
              src={props.imagenOcho}
              className="z-[3] -m-10 h-16 w-16 rounded-full object-cover ring-4 ring-white contrast-150" />

      </div><div className="flex flex-col gap-1 my-5 items-center">
              <h3 className={`text-md text-left font-semibold text-${props.color}`}>
                  {props.nombre}
              </h3>
              <p className={`text-xs font-semibold text-${props.color}`}>
                  {props.description}
              </p>
          </div></>


  );
}

export default Avatares3;
