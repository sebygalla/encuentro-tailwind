const BotonDos = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  const modales = [
    { title: "niños", description: "1" },
    { title: "preadolescentes", description: "2" },
    { title: "jovenes", description: "3" },
    { title: "matris", description: "4" },
    { title: "matris 2", description: "5" },
  ]

  return (

    

    <>
      <button
        className="mb-1 mr-1 rounded bg-gradient-to-br from-yellow-600 to-red-600 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
        type="button"
        onClick={(e) => setShowModal(true)}>
        {props.text}
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none bg-black/75 backdrop-blur-sm ">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-[90%] mx-auto flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <h3 className="text-6xl font-semibold">{props.title}</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-sm md:text-lg leading-relaxed text-slate-900">
                   {props.description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
             
                  <button
                    className="mb-1 mr-1 rounded bg-gradient-to-br from-yellow-600 to-red-600 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    CERRAR
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default BotonDos;
