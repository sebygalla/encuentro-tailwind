import { LazyLoadImage } from "react-lazy-load-image-component";

import alabanzaUno from "../../assets/image/galeria1.webp";
import alabanzaDos from "../../assets/image/galeria2.webp";
import alabanzaTres from "../../assets/image/galeria3.webp";
import alabanzaCuatro from "../../assets/image/galeria4.webp";
import alabanzaCinco from "../../assets/image/galeria5.webp";
import alabanzaSeis from "../../assets/image/galeria6.webp";
import alabanzaSiete from "../../assets/image/galeria7.webp";
import alabanzaOcho from "../../assets/image/galeria8.webp";

import alabanzaDiez from "../../assets/image/galeria10.webp";
import alabanzaOnce from "../../assets/image/galeria11.webp";
import alabanzaDoce from "../../assets/image/galeria12.webp";
import alabanzaTrece from "../../assets/image/galeria13.webp";




const Galeria = () =>{
    return (

        
<div className="grid grid-cols md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10 ">
    <div className="grid gap-4">
        <div>
            <LazyLoadImage className="h-auto max-w-full rounded-lg" src={alabanzaUno} alt="Hombre alabando"/>
        </div>
        <div>
            <LazyLoadImage className="h-auto max-w-full rounded-lg" src={alabanzaTres} alt="Pastores de la Iglesia"/>
        </div>
        <div>
            <LazyLoadImage className="h-auto max-w-full rounded-lg" src={alabanzaTrece} alt="Alejandra Pastora"/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <LazyLoadImage className="h-auto max-w-full rounded-lg" src={alabanzaCuatro} alt="Mujer tocando el piano"/>
        </div>
        <div>
            <LazyLoadImage className="h-auto max-w-full rounded-lg" src={alabanzaCinco} alt="Pastor Javier"/>
        </div>
        <div>
            <LazyLoadImage className="h-auto max-w-full rounded-lg" src={alabanzaSiete} alt="Mujer alabando"/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <LazyLoadImage className="h-auto max-w-full rounded-lg" src={alabanzaOnce} alt="Pastor Javier en pulpito "/>
        </div>
        <div>
            <LazyLoadImage className="h-auto max-w-full rounded-lg" src={alabanzaOcho} alt="imagen de musicos en pulpito"/>
        </div>
        <div>
            <LazyLoadImage className="h-auto max-w-full rounded-lg" src={alabanzaDos} alt="Hombre tocando el bajo"/>
        </div>
    </div>
    <div className="grid gap-4">
        
        <div>
            <LazyLoadImage className="h-auto max-w-full rounded-lg" src={alabanzaDiez} alt="Musicos alabando "/>
        </div>
        <div>
            <LazyLoadImage className="h-auto max-w-full rounded-lg" src={alabanzaSeis} alt="Mujer cantando"/>
        </div>
        <div>
            <LazyLoadImage className="h-auto max-w-full rounded-lg" src={alabanzaDoce} alt="Mujeres abrazadas"/>
        </div>
    </div>
</div>





    )
};

export default Galeria