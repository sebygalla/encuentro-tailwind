import React from 'react'

const Boton = (props) => {
  return (
    <button>
         <a href="#" className="inline-block bg-red-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-600">{props.children}</a>
    </button>
  )
}

export default Boton;
