import HeroTitle from "../Titulo/Titulo";

const Hero = () => {
  return (
    <div className="bg-portada z-10 bg-cover max-w-full h-[80vh] md:h-[50vh] xl:h-[100vh] relative bg-no-repeat bg-[left_-30rem_top_2rem] md:bg-center">
      <HeroTitle /> 
    </div>
  );
};

export default Hero;
