import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// import BotonDos from "../boton/BotonDos";

function Actividades(props) {


  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* card / imagen titulo y boton */}
      <div
        className="max-w-sm rounded-lg border border-gray-200 bg-white shadow ">
        <a href="#">
          <LazyLoadImage
            src={props.imagen}
            className="rounded-t-lg contrast-200"
            alt=""
          />
        </a>
        <div className="flex flex-col items-center justify-center p-5">
          <a href="#">
            <h5 className="mb-2 font-title text-2xl font-bold tracking-tight text-gray-900">
              {props.title}
            </h5>
          </a>

          <button
            className="mx-auto my-5 mb-1 w-full rounded bg-gradient-to-br from-yellow-600 to-red-600 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
            type="button"
            onClick={(e) => setShowModal(true)}>
            {props.textButton}
          </button>
          {showModal ? (
            <>
              {/* MODAL */}

              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/75 outline-none backdrop-blur-sm focus:outline-none p-6 ">
                <div className="relative mx-auto my-6 w-auto max-w-xl xl:max-w-2xl">
                  {/*content*/}
                  <div className="relative mx-auto flex rounded-lg  border-0 bg-white p-3 shadow-lg outline-none focus:outline-none">
                    {/*header*/}
                    <div className="bg-portada bg-cover bg-center w-[20%]">
                      <button
                        className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}>
                        <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="flex-1 p-5">

                      <h3 className="text-center text-3xl font-semibold">
                        {props.titleModal}
                      </h3>
                      <p className="my-5 font-links text-[15px] font-light leading-6 text-slate-900 md:text-sm">
                        {props.description}
                      </p>

                      {/*footer*/}
                      <div className="flex items-center justify-center rounded-b">
                        <button
                          className="w-full rounded bg-gradient-to-br from-yellow-600 to-red-600 px-6 py-3 text-[16px] font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                          type="button"
                          onClick={() => setShowModal(false)}>
                          CERRAR
                        </button>
                      </div>
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
