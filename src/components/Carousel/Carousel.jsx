import Card from "../Card/Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Javier from "../../assets/image/avatarJavier.png"

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  return (
    <div className="relative overflow-x-auto mt-[20%] snap-proximity snap-x">
      <div className="absolute right-0 top-[12%] ">
        <button onClick={scrollLeft} className="m-2 rounded-full bg-white p-2">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="m-2 rounded-full bg-white p-2">
          <FiChevronRight />
        </button>
      </div>
      <div
        id="content"
        className="flex items-center justify-center overflow-x-auto scroll-smooth  p-4">
        <div className="snap-center">
          <Card testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
              nombre="Nadia Saballa"
              description="Miembro I.El Encuentro-T.Suárez"
              imagen={Javier} />
        </div>

        <div className="snap-center">
          <Card testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
                nombre="Nadia Saballa"
                description="Miembro I.El Encuentro-T.Suárez"
                imagen={Javier} />
        </div>

        <div className="snap-center">
         <Card testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
                nombre="Nadia Saballa"
                description="Miembro I.El Encuentro-T.Suárez"
                imagen={Javier} />
        </div>

        <div className="snap-center">
          <Card testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
                nombre="Nadia Saballa"
                description="Miembro I.El Encuentro-T.Suárez"
                imagen={Javier} />
        </div>

        <div className="snap-center">
         <Card testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
                nombre="Nadia Saballa"
                description="Miembro I.El Encuentro-T.Suárez"
                imagen={Javier} />
        </div>

        <div className="snap-center">
         <Card testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
                nombre="Nadia Saballa"
                description="Miembro I.El Encuentro-T.Suárez"
                imagen={Javier} />
        </div>
        <div className="snap-center">
         <Card testimonio="Ut efficitur sapien quis ipsum vestibulum eleifend gravida ac odio. In hac habitasse platea dictumst. Pellentesque fringilla, tortor sit amet sodales gravida, sapien lectus dapibus augue, vitae luctus nisl elit sit amet felis. Mauris semper ipsum et lorem sollicitudin venenatis. Nulla facilisi. Cras convallis mauris ut odio pretium, ut volutpat tortor porttitor. In et congue neque."
                nombre="Nadia Saballa"
                description="Miembro I.El Encuentro-T.Suárez"
                imagen={Javier} />
        </div>
        

    
      </div>
    </div>
  );
}

export default Carousel;
