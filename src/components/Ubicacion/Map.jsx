import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import verificado from "../../assets/image/verificado.png"

function Map(props) {

    const [showModal, setShowModal] = useState(false);
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xr46d76', 'template_oa7rdcr', form.current, 'EfURhEcfcD4UIrkkQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };




  return (
  

      <form ref={form} onSubmit={sendEmail} className="mx-auto my-16 flex md:w-[60%] w-[90%] flex-col items-center gap-6  p-8  shadow-lg bg-black/30 backdrop-blur-sm">
       
        <input
          className="w-full rounded border border-gray-300 p-2"
          type="text"
          placeholder="Nombre"
          name="user_name"
        />
        <input
          className="w-full rounded border border-gray-300 p-2"
          type="email"
          placeholder="Correo Electrónico"
          name="user_email"
        />
        <textarea
          className="w-full rounded border border-gray-300 p-2"
          placeholder="Mensaje"
          name="message"
        />
        <button type="submit" value="Send" className="cursor-pointer rounded bg-gradient-to-br from-yellow-600 to-red-600 p-2 text-white w-full"
         onClick={(e) => setShowModal(true)}>
          {props.textButton}
       
        </button>
        {showModal ? (
            <>
              {/* MODAL */}

              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/75 outline-none backdrop-blur-sm focus:outline-none p-6 ">
                <div className="relative mx-auto my-6 w-auto max-w-xl xl:max-w-2xl">
                  {/*content*/}
                  <div className="relative mx-auto flex rounded-lg  border-0 bg-white p-3 shadow-lg outline-none focus:outline-none"
                   onClick={() => setShowModal(false)}>
                    {/*header*/}
                  
                      {/* <button
                        className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                       >
                        <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                          ×
                        </span>
                      </button> */}
                   
                    {/*body*/}
                    <div className="flex-1 p-5">

                      <div className='flex '>
                      <h3 className="text-center text-3xl font-semibold">
                        {props.titleModal} 
                      </h3>
                      <img className='w-7 h-7 mt-2 ml-5' src={verificado}/>
                      </div>


                      <p className="my-5 font-links text-[15px] font-light leading-6 text-slate-900 md:text-sm">
                        {props.description}
                      </p>

                      {/*footer*/}
                      <div className="flex items-center justify-center rounded-b">
                        <button
                          className="w-full rounded bg-gradient-to-br from-yellow-600 to-red-600 px-6 py-3 text-[16px] font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                          type="button"
                          onClick={() => setShowModal(false)
                          }>
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


      </form>
      )





 
  
}

export default Map;
