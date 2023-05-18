import Avatares from "../Avatares/Avatares";
import avatarJavier from "../../assets/image/avatarJavier.png";


function About() {
  return (
    <div className="xl:ml-5 mx-auto grid xl:h-[600px] xl:w-[70%] xl:grid-cols-2 grid-cols-1 md:w-[90%] md:h-[1000px] w-[95%] min-h-[50%]  place-content-center md:gap-5 gap-8 bg-blue-900 md:bg-blue-900/60 p-5 md:p-10 text-justify md:backdrop-blur-[10px] relative rounded-xl md:pb-[10%] pb-[35%]">
      <p className="text-white md:text-[18px] md:leading-5 text-base">
        Cada persona que llega a la comunidad es desafiada a entregarse a Jesús
        y dejar que Él sea su Señor. Esto solo es posible por lo que Dios hizo
        con el hombre a través de Jesús. Nuestro nuevo nacimiento viene por un
        pacto. Todo lector de la Biblia comprenderá que Dios, desde la creación
        del hombre, se ha relacionado con él, a través de pactos. Hoy todos los
        cristianos han estado involucrados bajo el nuevo pacto hecho por Jesús
        en la cruz ( Mateo 26-28). Será difícil concebir la vida de la
        comunidad, sin vivir a la sombra de quienes pactan con nosotros para
        siempre. Los pastores de nuestra comunidad recibieron la luz, bajo el
        concepto de la Palabra de Dios, de hacer parte del diario vivir de la
        iglesia, las verdades de la Alianza. Este hecho de Dios con nosotros
        sería escaso si no se extendiera a todos los aspectos de nuestra vida.
      </p>

      <p className="text-white md:text-[18px] md:leading-5 text-base">
        Dios se ha desbordado en su expresión de amor y lo ha extendido , a la
        formación de una familia, un cuerpo, su iglesia, que nace por mediación
        de Jesucristo en la nueva alianza (1 P 2, 4-10) y que es el único capaz
        de acabar con todo otro tipo de pactos que se han hecho. La iglesia, los
        que la formamos, no podemos vivir fuera de la bendición para disfrutar
        de todos los logros que esto representa para el caminar diario. Como
        solidificando nuestras relaciones, limpiándolas para que sean
        cristalinas, guardando cuidadosamente la unidad del Espíritu . Esto
        exige una conducta voluntaria que se comprometan a “mantener a pedido”,
        cuidar con cuidado , no dejar fisuras a la Unidad. Sólo así se edifica
        un cuerpo, o mejor dicho, crece un cuerpo, donde la cabeza es Cristo
        (Efesios 4:15) y se establece claramente la delegación de autoridad.
        Dios nos enseña cómo mantener el cuerpo unido ayudándonos unos a otros
        (Efesios 4:16).
      </p>

      <div className="absolute bottom-7 left-6 md:bottom-7 md:left-10">
        <Avatares
          nombre="Pastor Javier Corsi"
          description="Pastor Iglesia El Encuentro- T.Suárez"
          imagen={avatarJavier}
        />
      </div>
 
      
    </div>
  );
}

export default About;
