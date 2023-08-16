import Avatar from "../Avatares/Avatares2"
import avatarJavier from "../../assets/image/avatarJavier.png";
import avatarAle from "../../assets/image/alePastora.png";



function About() {
  return (
    <>
    <div className="grid min-h-[100%]  gap-10 p-10 md:p-10 xl:p-20 text-justify md:grid-cols-2 mb-10">



      <p className="z-10 text-[16px] text-white font-links font-bold md:text-[18px] md:leading-6">
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
        Dios se ha desbordado en su expresión de amor y lo ha extendido , a la
        formación de una familia, un cuerpo, su iglesia, que nace por mediación
        de Jesucristo en la nueva alianza (1 P 2, 4-10) y que es el único capaz
        de acabar con todo otro tipo de pactos que se han hecho.
      </p>

      <p className="z-10 text-[16px] font-links font-bold text-white md:text-[18px] md:leading-6">

        La iglesia, los que la formamos, no podemos vivir fuera de la bendición
        para disfrutar de todos los logros que esto representa para el caminar
        diario. Como solidificando nuestras relaciones, limpiándolas para que
        sean cristalinas, guardando cuidadosamente la unidad del Espíritu. Esto
        exige una conducta voluntaria que se comprometan a “mantener a pedido”,
        cuidar con cuidado , no dejar fisuras a la Unidad. Sólo así se edifica
        un cuerpo, o mejor dicho, crece un cuerpo, donde la cabeza es Cristo
        (Efesios 4:15) y se establece claramente la delegación de autoridad.
        Dios nos enseña cómo mantener el cuerpo unido ayudándonos unos a otros
        (Efesios 4:16).
      </p>

    </div><div className="mb-[10%] z-10">
        <Avatar
          imagenUno={avatarJavier}
          imagenDos={avatarAle}
          color="white"
          nombre="Javier Corsi / Alejandra Corsi"
          description="Pastores Iglesia El Encuentro- T.Suárez" />
      </div></>
  );
}

export default About;
