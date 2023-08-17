// import fotoUno from "../../assets/image/galeria/1.jpg"
// import fotoDos from "../../assets/image/galeria/2.jpg"
// import fotoTres from "../../assets/image/galeria/3.jpg"
import fotoCuatro from "../../assets/image/galeria/4.jpg"
import fotoCinco from "../../assets/image/galeria/5.jpg"
// import fotoSeis from "../../assets/image/galeria/6.jpg"
import fotoSiete from "../../assets/image/galeria/7.jpg"
import fotoOcho from "../../assets/image/galeria/8.jpg"
import fotoNueve from "../../assets/image/galeria/9.jpg"
import fotoDiez from "../../assets/image/galeria/10.jpg"
import fotoOnce from "../../assets/image/galeria/11.jpg"
import fotoDoce from "../../assets/image/galeria/12.jpg"
import fototrece from "../../assets/image/galeria/13.jpg"
import fotoCatorce from "../../assets/image/galeria/14.jpg"
// import fotoDieciseis from "../../assets/image/galeria/16.jpg"
// import fotoDiecisiete from "../../assets/image/galeria/17.jpg"
// import fotoDieciocho from "../../assets/image/galeria/18.jpg"
// import fotoDiecinueve from "../../assets/image/galeria/19.jpg"
// import fotoVeinte from "../../assets/image/galeria/20.jpg"

const Galeria = () =>{
    return (

        
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={fotoOcho} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={fotoCinco} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={fotoCinco} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={fotoCuatro} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={fotoCinco} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={fotoCatorce} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={fotoSiete} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={fototrece} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={fotoNueve} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={fotoDiez} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={fotoOnce} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={fotoDoce} alt=""/>
        </div>
    </div>
</div>





    )
};

export default Galeria