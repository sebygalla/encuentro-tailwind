import AvataresMobile from "../Avatares/AvataresMobile";
import AvatarRebe from "../../assets/image/rebe.jpg"

function Cuarto() {
  return (
    <div className="container w-[100%] md:w-[90%] xl:w-[70%] my-20 mx-auto flex flex-grow bg-gray-200 gap-6">
      <div className="w-1/3 bg-cuarto bg-cover bg-center md:w-1/3 contrast-150"></div>

      <div className="flex flex-1 flex-col gap-10 p-8 md:items-end text-justify">
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
            imagen={AvatarRebe}
            color="black"
            nombre="Rebeca Medina"
        
          />
        </div>

      </div>

    </div>
  );
}

export default Cuarto;
