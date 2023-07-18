import React, { useState } from "react";

const Modal = () => {

  


  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[99] m-auto h-full w-full bg-black backdrop-blur-sm opacity-90">
      <div className="fixed bottom-0 left-0 right-0 top-0 m-auto h-[50%] w-[50%] bg-yellow-500 ">
        <p className="flex items-center justify-center"> "Hola mundo!"</p>
      </div>
    </div>
  );
}

export default Modal;
