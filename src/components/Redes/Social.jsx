import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Social() {
  return (
    <div className="h-[10vh] flex items-center justify-center w-full z-30 absolute bottom-16">
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <a
          href="https://www.facebook.com/iglesiaelencuentrotristansuarez"
          className="text-gray-200 hover:text-gray-900 dark:hover:text-white text-[25px]">
       
          <FaFacebook/>
        
        </a>

        <a
          href="https://www.youtube.com/@iglesiaelencuentrots-music8317"
          className="text-gray-200 hover:text-gray-900 dark:hover:text-white text-[25px]">
       
          <FaYoutube/>
        
        </a>

        <a
          href="https://www.instagram.com/igle.elencuentro.suarez/"
          className="text-gray-200 hover:text-gray-900 dark:hover:text-white text-[25px]">
       
          <FaInstagram/>
        
        </a>

   
        
 
      </div>
    </div>
  );
}

export default Social;
