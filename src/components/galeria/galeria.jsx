import avatarAle from "../../assets/image/alePastora.png";
import alabanzaUno from "../../assets/image/galeria1.png";
import alabanzaDos from "../../assets/image/galeria2.jpg";
import alabanzaCami from "../../assets/image/nosotros.jpg";

const Galeria = () =>{
    return (

        
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaUno} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={avatarAle} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={alabanzaDos} alt=""/>
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