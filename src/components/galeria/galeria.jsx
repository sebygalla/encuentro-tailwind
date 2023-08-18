import avatarAle from "../../assets/image/alePastora.png";
import alabanzaUno from "../../assets/image/galeria1.png";
import alabanzaDos from "../../assets/image/galeria2.jpg";
import alabanzaTres from "../../assets/image/galeria3.jpg";
import alabanzaCuatro from "../../assets/image/galeria4.jpg";
import alabanzaCinco from "../../assets/image/galeria5.jpg";
import alabanzaSeis from "../../assets/image/galeria6.jpg";
import alabanzaSiete from "../../assets/image/galeria7.jpg";
import alabanzaOcho from "../../assets/image/galeria8.jpg";



const Galeria = () =>{
    return (

        
<div className="grid grid-cols md:grid-cols-2 xl:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaUno} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaTres} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaDos} alt=""/>
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
            <img className="h-auto max-w-full rounded-lg" src={alabanzaSeis} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaOcho} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={avatarAle} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={avatarAle} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={avatarAle} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={avatarAle} alt=""/>
        </div>
    </div>
</div>





    )
};

export default Galeria