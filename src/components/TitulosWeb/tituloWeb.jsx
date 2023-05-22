



const TituloWeb = (props) => {
  return (
    <div className=" mt-20">   
      <h4 className={`text-center text-[12px] font-['Poppins']  text-${props.color}`} >Somos Iglesia!</h4>
      <h1 className={`text-4xl text-center text-${props.color}`}>{props.title}
   
      </h1>
    </div>
    
  );

};

export default TituloWeb;
