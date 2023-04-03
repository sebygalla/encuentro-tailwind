import React from "react";
import cardUno from "../../assets/image/cards actividades/card1.jpg";
import nosotrosPastora from "../../assets/image/nosotros 2.jpg";

function CardActividades() {
  return (
    <section className="container mx-auto flex flex-wrap justify-between bg-slate-600">
      {/* card 1 */}
      <a href="#" className="w-96 relative block group">
        <img
          src={cardUno}
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

          <p className="mt-1.5 max-w-[40ch] text-xs text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sequi dicta impedit aperiam ipsum!
          </p>

          <span className="inline-block px-5 py-3 mt-3 text-xs font-medium tracking-wide text-white uppercase bg-black">
            Shop Now
          </span>
        </div>
      </a>

      {/* card 2 */}
      <a href="#" className="w-96 relative block group">
        <img
          src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

          <p className="mt-1.5 max-w-[40ch] text-xs text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sequi dicta impedit aperiam ipsum!
          </p>

          <span className="inline-block px-5 py-3 mt-3 text-xs font-medium tracking-wide text-white uppercase bg-black">
            Shop Now
          </span>
        </div>
      </a>

      {/* card 3 */}
      <a href="#" className="w-96 relative block group">
        <img
          src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

          <p className="mt-1.5 max-w-[40ch] text-xs text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sequi dicta impedit aperiam ipsum!
          </p>

          <span className="inline-block px-5 py-3 mt-3 text-xs font-medium tracking-wide text-white uppercase bg-black">
            Shop Now
          </span>
        </div>
      </a>
    </section>
  );
}

export default CardActividades;
