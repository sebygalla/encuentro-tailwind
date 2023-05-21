import Card from "../Card/Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Javier from "../../assets/image/avatarJavier.png";

function Carousel() {
  return (
    <div className="w-full flex h-auto  overflow-x-auto snap-proximity snap-x">

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Nadia Saballa"
          description="Miembro I.El Encuentro-T.Suárez"
          imagen={Javier}
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Nadia Saballa"
          description="Miembro I.El Encuentro-T.Suárez"
          imagen={Javier}
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Nadia Saballa"
          description="Miembro I.El Encuentro-T.Suárez"
          imagen={Javier}
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Nadia Saballa"
          description="Miembro I.El Encuentro-T.Suárez"
          imagen={Javier}
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Nadia Saballa"
          description="Miembro I.El Encuentro-T.Suárez"
          imagen={Javier}
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
          nombre="Nadia Saballa"
          description="Miembro I.El Encuentro-T.Suárez"
          imagen={Javier}
        />
      </div>


    </div>

    
  );
}

export default Carousel;
