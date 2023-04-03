import React from "react";
import cardUno from "../../assets/image/cards actividades/card1.jpg";
import cardDos from "../../assets/image/cards actividades/card2.jpeg";
import cardTres from "../../assets/image/cards actividades/card3.jpg";
import cardCuatro from "../../assets/image/cards actividades/card4.jpg";
import cardCinco from "../../assets/image/cards actividades/card5.jpg";



function CardActividades() {
  return (
    <section className="container mx-auto mb-10 flex flex-wrap  justify-between">

      {/* card 1 */}
      <a href="#" className="w-96 relative block group">
        <img
          src={cardUno}
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
        />

        <div className="absolute z-10 inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="text-xl font-medium text-white">NIÑOS</h3>

          <p className="mt-1.5 max-w-[40ch] text-xs text-white">
            Un espacio donde cientos de chicos y chicas descubren su propósito
            divino para nunca más soltarlo.
          </p>

          <span className="inline-block px-5 py-3 mt-3 text-xs font-medium tracking-wide text-white uppercase bg-black">
            VER MÁS!
          </span>
        </div>
      </a>

      {/* card 2 */}
      <a href="#" className="w-96 relative block group">
        <img
          src={cardDos}
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
          src={cardTres}
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

            {/* card 4 */}
            <a href="#" className="w-96 relative block group">
        <img
          src={cardCuatro}
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

            {/* card 5 */}
            <a href="#" className="w-96 relative block group">
        <img
          src={cardCinco}
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
