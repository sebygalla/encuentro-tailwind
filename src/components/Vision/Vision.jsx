import Avatar from "../Avatares/Avatares2";
import avatarJavier from "../../assets/image/avatarJavier.png";
import avatarAle from "../../assets/image/alePastora.png";

function Vision() {
  return (
    <>
      <div className="mb-10 grid  min-h-[100%] gap-20 p-10 text-justify md:grid-cols-2 md:p-10 xl:p-20">
        <p className="z-10 text-lg font-medium text-white md:text-[18px] md:leading-6">
          Una Iglesia que abrigue a todos los que se acerquen a ella con un
          fuerte y mnifiesto interés en el área social, una Iglesia formadora de
          líderes, que bendiga al pueblo de Dios nacional e internacional, una
          Iglesia fundamentada en el estudio de la Palabra de Dios, una Iglesia
          abierta a todos los dones espirituales, en armonía y obediencia a la
          Palabra de Dios, Una Iglesia abierta a compartir la Palabra, con
          líderes de otras líneas teológicas, disfrutando de la comunión y
          respetando nuestras diferencias, una Iglesia auxiliadora de otras
          congregaciones en crisis o con dificultades, una Iglesia con un fuerte
          énfasis en la adoración a Dios, una Iglesia con ministerios centrales
          funcionando a pleno, reuniendo en ellos el modelo del Ministerio de
          Jesucristo (Evangelismo, Incorporación, Calidad de Vida, Adoración,
          Enseñanza, Obra Social, Administración y Finanzas). Una Iglesia con un
          pleno desarrollo de las edades para una pastoral cercana (de niños a
          abuelos), una Iglesia con un liderazgo de primera línea "de amigos en
          Cristo", que se conocen profundamente, dispuestosma sostenerse entre
          ellos en los momentos más dificiles, que trabajan con un verdadero
          pacto de amor, sin buscar lo suyo propio, sin egoismos,
        </p>

        <p className="z-10 text-lg font-medium text-white md:text-[18px] md:leading-6">
          teniendo como base la transparencia de sus acciones e inquietudes y
          bajo la cobertura del Espíritu Santo, en un marco de respeto y perdón,
          una Iglesia con una economia clara y finanzas transparentes, abierta a
          cualquier área del liderazgo comprometido, para evitar sospechas y
          disfrutar del crecimiento que Dios no da, una Iglesia con un llamado a
          las misiones locales e internacionales, con el anhelo prioritario de
          plantar iglesias en cada ciudad donde Dios lo muestre y confirme, una
          Iglesia que predica, proclama y trabaja para la verdadera unidad del
          Cuerpo de Cristo, en armonía con iglesias hermanas, una Iglesia de
          pacto, defensora de la comunión entre los hermanos, declarando como
          único adversario el diaUna Iglesia que anhela armonizar con el
          propósito del Señor, tomando decisiones en el temor de Dios, sabiendo
          que Él juzgará las intensiones de nuestro corazón. Dios nos bendiga!
        </p>
      </div>
      <div className="z-10 mb-[10%]">
        <Avatar
          imagenUno={avatarJavier}
          imagenDos={avatarAle}
          color="white"
          nombre="Javier Corsi / Alejandra Corsi"
          description="Pastores Iglesia El Encuentro- T.Suárez"
        />
      </div>
    </>
  );
}

export default Vision;
