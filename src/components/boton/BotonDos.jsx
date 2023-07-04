import React from 'react'

const BotonDos = (props) => {
  return (
    <a
    href="#"
    className="z-30 rounded-[12px] bg-slate-900 px-12 py-3 text-md font-medium text-white shadow hover:bg-slate-600 focus:outline-none hover:text-white  mt-4">
    {props.text}
  </a>
  )
}

export default BotonDos;
