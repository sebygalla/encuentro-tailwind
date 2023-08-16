import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Social() {
  return (
    <div className="h-[10vh] flex items-center justify-center w-full z-30 absolute bottom-16">
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <a
          href="#"
          className="text-gray-200 hover:text-gray-900 dark:hover:text-white text-[25px]">
       
          <FaFacebook/>
        
        </a>

        <a
          href="#"
          className="text-gray-200 hover:text-gray-900 dark:hover:text-white text-[25px]">
       
          <FaYoutube/>
        
        </a>

        <a
          href="#"
          className="text-gray-200 hover:text-gray-900 dark:hover:text-white text-[25px]">
       
          <FaInstagram/>
        
        </a>

   
        
 
      </div>
    </div>
  );
}

export default Social;
