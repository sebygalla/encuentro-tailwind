import TituloWeb from "../TitulosWeb/tituloWeb";
import Avatares from "../Avatares/Avatares";
import avatarRebe from "../../assets/image/rebe.jpg";

function Cuarto() {
  return (
    <div className="container m-20 mx-auto flex flex-grow bg-white p-1">
      <div className="w-[30%] bg-portada bg-cover bg-center md:w-1/3"></div>

      <div className="flex flex-1 flex-col gap-10 p-10 text-justify md:p-20">
        <TituloWeb color="black" title="Cuarto de oración 🙌" />
        <h3 className="text-xs text-black md:text-xl">
          Te animo a que seas parte de esta generación que siendo llenos por el
          Espiritu Santo claman día y noche, apasionados por ver a Jesús
          regresar y gobernar en las naciones desde Jerusalén. Este clamor es
          cada vez más intenso y va en aumento. No pararemos de cantar y adorar
          HASTA que EL venga.
        </h3>

        <div className="flex flex-col-reverse gap-5 md:gap-10 md:items-start items-center justify-between">
          <Avatares
            nombre="Rebeca Medina"
            color="black"
            description="Lider Iglesia El Encuentro- T.Suárez"
            imagen={avatarRebe}
            Ring="black"
          />

          <h4 className="text-xs md:text-xl text-black">Domingos 09:45 a 10:15hs</h4>
        </div>
      </div>
    </div>
  );
}

export default Cuarto;
