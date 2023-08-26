import Card from "../Card/Card";

import Javier from "../../assets/image/avatarJavier.webp";
import Nadia from "../../assets/image/nadia.webp";
import Alejandra from "../../assets/image/alePastora.webp";
import Bienvenida from "../../assets/image/bienvenida.webp";
import Richard from "../../assets/image/richard.webp";
import Angelito from "../../assets/image/angelito.webp";

function Carousel() {
  return (
    <div className="flex w-full snap-x snap-mandatory overflow-x-auto">
      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quistaictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Javier Corsi"
          description="Pastor I.El Encuentro-T.Suárez"
          imagen={Javier}
          color="white"
       
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quistaictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Alejandra Corsi"
          description="Pastora I.El Encuentro-T.Suárez"
          imagen={Alejandra}
          color="white"
        />
      </div>

      <div className="snap-center">
        <Card
        testimonio="Ut efficitur sapien quistaictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Nadia Saballa"
          description="Miembro I.El Encuentro-T.Suárez"
          imagen={Nadia}
          color="white"
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quistaictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Angel Sayago"
          description="Miembro I.El Encuentro-T.Suárez"
          imagen={Angelito}
          color="white"
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quistaictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Bienvenida Medina"
          description="Lider I.El Encuentro-T.Suárez"
          imagen={Bienvenida}
          color="white"
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quistaictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Ricardo Medina"
          description="Lider I.El Encuentro-T.Suárez"
          imagen={Richard}
          color="white"
        />
      </div>
    </div>
  );
}

export default Carousel;
