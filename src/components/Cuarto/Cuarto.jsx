import AvataresMobile from "../Avatares/AvataresMobile";
import AvatarJavier from "../../assets/image/avatarJavier.png"

function Cuarto() {
  return (
    <div className="container m-20 mx-auto flex flex-grow bg-white p-5">
      <div className="w-1/3 bg-portada bg-cover bg-center md:w-2/4"></div>

      <div className="flex flex-1 flex-col gap-10 p-6 text-justify md:text-justify md:p-28">
        <h3 className="text-[16px] font-links font-light md:text-md text-black">
          Te animo a que seas parte de esta generación que siendo llenos por el
          Espiritu Santo claman día y noche, apasionados por ver a Jesús
          regresar y gobernar en las naciones desde Jerusalén. Este clamor es
          cada vez más intenso y va en aumento. No pararemos de cantar y adorar
          HASTA que EL venga.
        </h3>

        <h4 className="text-md md:text-md font-medium text-black">
          Domingos 09:45 a 10:15hs
        </h4>

        <div className="z-10">
          <AvataresMobile
            imagen={AvatarJavier}
            color="black"
            nombre="Rebeca Medina"
            description="Lider Iglesia El Encuentro- T.Suárez"
          />
        </div>

      </div>

    </div>
  );
}

export default Cuarto;
