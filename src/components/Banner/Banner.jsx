import AvataresMobile from "../Avatares/AvataresMobile";
import avatarJavier from "../../assets/image/avatarJavier.png";

const Banner = () => {
    return(
        <div className="flex flex-col justify-center items-center md:gap-5 ">
            <h1 className="md:text-5xl text-md text-white mt-6 mb-4">"No entres en pánico, Dios gobierna en tu tormenta"</h1>
            <AvataresMobile 
                imagen={avatarJavier}
                color="white"
                nombre="Javier Corsi"
                description="Pastor Iglesia El Encuentro- T.Suárez" />
        </div>

    
    )
};

export default Banner;