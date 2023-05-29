import TituloWeb from "../TitulosWeb/tituloWeb";
import Avatares from "../Avatares/Avatares";
import avatarRebe from "../../assets/image/rebe.jpg";

function Cuarto() {
  return (
    <div className="container m-20 p-1 mx-auto flex flex-grow bg-white">

      <div className="w-[30%] bg-portada bg-cover bg-center md:w-1/3"></div>

      <div className="p-10 md:p-20 text-justify flex flex-col gap-10 flex-1">
        <TituloWeb color="black" title="Cuarto de oración 🙌" />
        <h3 className="text-xs md:text-xl text-black">
          Te animo a que seas parte de esta generación que siendo llenos por el
          Espiritu Santo claman día y noche, apasionados por ver a Jesús
          regresar y gobernar en las naciones desde Jerusalén. Este clamor es
          cada vez más intenso y va en aumento. No pararemos de cantar y adorar
          HASTA que EL venga.
        </h3>

        <div>
          <h4 className="text-black text-xs">Domingos 09:45 a 10:15hs</h4>
        </div>

        <Avatares
          nombre="Rebeca Medina"
          color="black"
          description="Lider Iglesia El Encuentro- T.Suárez"
          imagen={avatarRebe}
          Ring="black"
        />
      </div>
    </div>
  );
}

export default Cuarto;
