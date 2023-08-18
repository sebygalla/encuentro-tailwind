import alabanzaUno from "../../assets/image/galeria1.png";
import alabanzaDos from "../../assets/image/galeria2.jpg";
import alabanzaTres from "../../assets/image/galeria3.jpg";
import alabanzaCuatro from "../../assets/image/galeria4.jpg";
import alabanzaCinco from "../../assets/image/galeria5.jpg";
import alabanzaSeis from "../../assets/image/galeria6.jpg";
import alabanzaSiete from "../../assets/image/galeria7.jpg";
import alabanzaOcho from "../../assets/image/galeria8.jpg";
import alabanzaNueve from "../../assets/image/galeria9.jpg";
import alabanzaDiez from "../../assets/image/galeria10.jpg";
import alabanzaOnce from "../../assets/image/galeria11.jpg";
import alabanzaDoce from "../../assets/image/galeria12.jpg";
import alabanzaTrece from "../../assets/image/galeria13.jpg";




const Galeria = () =>{
    return (

        
<div className="grid grid-cols md:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaUno} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaTres} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaTrece} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaCuatro} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaCinco} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaSiete} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaOnce} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaOcho} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaDos} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaDiez} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaSeis} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaDoce} alt=""/>
        </div>
    </div>
</div>





    )
};

export default Galeria