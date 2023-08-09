// import Avatar from "../Avatares/Avatares2";
// import avatarCami from "../../assets/image/cami.jpg";
// import avatarRebe from "../../assets/image/Rebe.jpg";

function Cuarto() {
  return (
    <div className="container m-20 mx-auto flex flex-grow bg-white p-1">
      <div className="w-[30%] bg-portada bg-cover bg-center md:w-1/3"></div>

      <div className="flex flex-1 flex-col gap-10 p-6 text-justify md:p-28">
        <h3 className="text-md text-black md:text-md">
          Te animo a que seas parte de esta generación que siendo llenos por el
          Espiritu Santo claman día y noche, apasionados por ver a Jesús
          regresar y gobernar en las naciones desde Jerusalén. Este clamor es
          cada vez más intenso y va en aumento. No pararemos de cantar y adorar
          HASTA que EL venga.
        </h3>

        <h4 className="text-md font-medium text-black md:text-md">
          Domingos 09:45 a 10:15hs
        </h4>

{/*         
      <div className="z-10 mb-[10%]">
        <Avatar
          imagenUno={avatarCami}
          imagenDos={avatarRebe}
          color="black"
          nombre="Javier Corsi / Alejandra Corsi"
          description="Pastores Iglesia El Encuentro- T.Suárez"
        />
      </div> */}

      </div>


      

    </div>
  );
}

export default Cuarto;
