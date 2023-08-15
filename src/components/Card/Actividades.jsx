import AOS from "aos";
import "aos/dist/aos.css";
import React, {useState ,useEffect } from "react";

// import BotonDos from "../boton/BotonDos";

function Actividades(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
    {/* card / imagen titulo y boton */}
      <div
        data-aos="fade-right"
        className="max-w-sm rounded-lg border border-gray-200 bg-white shadow">
        <a href="#">
          <img
            src={props.imagen}
            className="rounded-t-lg contrast-200"
            alt=""
          />
        </a>
        <div className="flex flex-col items-center justify-center p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-title font-bold tracking-tight text-gray-900">
              {props.title}
            </h5>
          </a>

          <button
            className="mb-1 w-full mx-auto my-5 rounded bg-gradient-to-br from-yellow-600 to-red-600 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
            type="button"
            onClick={(e) => setShowModal(true)}>
            {props.textButton}
          </button>
          {showModal ? (
            <>
            {/* modal */}
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/75 outline-none backdrop-blur-sm focus:outline-none ">
                <div className="relative mx-auto my-6 w-auto max-w-3xl">
                  {/*content*/}
                  <div className="relative mx-auto flex w-[90%] md:w-[90%] flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none p-3">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5">
                      
                      <h3 className="text-3xl text-center md:text-5xl font-semibold">{props.titleModal}</h3>
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
                      <p className="my-2 text-[16px] font-links font-light text-slate-900 md:text-sm leading-6">
                        {props.description}
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end rounded-b  p-6">
                      <button
                        className="mb-1 mr-1 w-full rounded bg-gradient-to-br from-yellow-600 to-red-600 px-6 py-3 text-[16px] font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
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

        </div>
      </div>
    </>
  );
}

export default Actividades;
