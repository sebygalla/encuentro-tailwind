import React from 'react'

const Boton = (props) => {
  return (
    <button>
         <a href="#" className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">{props.children}</a>
    </button>
  )
}

export default Boton;
