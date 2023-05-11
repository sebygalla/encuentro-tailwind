const BotonDos = (props) => {
  return (
   
      <a
        href="#"
        className="block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto sm:max-w-sm md:w-full mt-4">
        {props.text}
      </a>


  );
};

export default BotonDos;
