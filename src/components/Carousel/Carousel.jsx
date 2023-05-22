import Card from "../Card/Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Javier from "../../assets/image/avatarJavier.png";
import Nadia from "../../assets/image/nadia.jpg";
import Alejandra from "../../assets/image/alePastora.png";
import Bienvenida from "../../assets/image/bienvenida.png";
import Richard from "../../assets/image/richard.png";
import Angelito from "../../assets/image/angelito.png";

function Carousel() {
  return (
    <div className="flex w-full snap-x snap-mandatory overflow-x-auto">
      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quistaictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Javier Corsi"
          description="Pastor I.El Encuentro-T.Suárez"
          imagen={Javier}
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quistaictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Alejandra Corsi"
          description="Pastora I.El Encuentro-T.Suárez"
          imagen={Alejandra}
        />
      </div>

      <div className="snap-center">
        <Card
        testimonio="Ut efficitur sapien quistaictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Nadia Saballa"
          description="Miembro I.El Encuentro-T.Suárez"
          imagen={Nadia}
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quistaictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Angel Sayago"
          description="Miembro I.El Encuentro-T.Suárez"
          imagen={Angelito}
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quistaictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Bienvenida Medina"
          description="Lider I.El Encuentro-T.Suárez"
          imagen={Bienvenida}
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quistaictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Ricardo Medina"
          description="Lider I.El Encuentro-T.Suárez"
          imagen={Richard}
        />
      </div>
    </div>
  );
}

export default Carousel;
