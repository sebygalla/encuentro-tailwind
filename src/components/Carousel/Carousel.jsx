import Card from "../Card/Card";

import Nadia from "../../assets/image/nadia.webp";
import Bienvenida from "../../assets/image/bienvenida.webp";
import Richard from "../../assets/image/richard.webp";
import Angelito from "../../assets/image/angelito.webp";

import Nazarena from "../../assets/image/nazarena.webp";
import anaYmario from "../../assets/image/anaymario.webp";
import Nuria from "../../assets/image/nuria.jpg";

function Carousel() {
  return (
    <div className="flex w-full snap-x snap-mandatory overflow-x-auto">
      <div className="snap-center">
        <Card
          testimonio="Fuimos recibidos por el Pastor Javier con mucho amor. Estamos muy agradecidos porque nos ayudó con nuestro matrimonio. 
En este lugar pudimos sentir como si se completaba algo que estaba incompleto en nosotros. Aquí nos sentimos hijos, comprendimos lo que era ser iglesia.
Dios nos abrazó, nos llevó a comprender que el tiempo está en sus manos dándonos la oportunidad de servir ,de poner a su disposición nuestros dones y talentos. 
"
          nombre="Ana y Mario"
          description="Iglesia El Encuentro-T.Suárez"
          imagen={anaYmario}
          color="white"
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Hace un año aproximadamente, conocí realmente a Dios en profundidad. Dejó de ser simplemente una idea en mi vida y comencé a tener una relación de intimidad con el. Mi vacío por primera vez comenzó a llenarse de paz y calidez.
          Jesús cambió mi vida y hoy le pertenezco por completo!..."
          nombre="Nazarena Fernandez"
          description="Iglesia El Encuentro-T.Suárez"
          imagen={Nazarena}
          color="white"
        />
      </div>

      <div className="snap-center">
        <Card
          testimonio="Mi nombre es Nuria, quiero dar gracias a Dios por sanar mi corazon, por sacarme de la tristeza, por restaurarme,por la salud de mi familia, por cada uno de ellos que a pesar de que nos arrebataron la vida de mi hermano mayor Dios nos sostiene, nos contiene. hace un año y cuatro meses conoci a Dios y en junio me bautize!... "
          nombre="Nuria Colman"
          description="Iglesia El Encuentro-T.Suárez"
          imagen={Nuria}
          color="white"
        />
      </div>
      {/* 
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
      </div> */}
    </div>
  );
}

export default Carousel;
