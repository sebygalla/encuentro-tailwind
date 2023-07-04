const Boton = (props) => {
  return (
   
      <a
        href="#"
        className="z-30 rounded-[12px] bg-white px-12 py-3 text-md font-medium text-black shadow hover:bg-slate-900 focus:outline-none hover:text-white  mt-4">
        {props.text}
      </a>


  );
};

export default Boton;
