import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import '../Estilos/Footer.css'
function Footer (){
    return(
        /*footer className="flex items-center justify-between bg-purple-700 text-white py-5 px-10 w-full*/
        /*Por*/
        /*<footer className="footer-container">*/
        /*<div className="flex space-x-4 justify-between"> */
        /*Por*/
        /*<div class className="redes-link">*/
        /*Para las a dejar solo los links*/
        /*<a href="https://web.facebook.com/profile.php?id=100091879890216" className="text-white hover:text-gray-300">*/
        /*Por*/
        /*<a href="https://web.facebook.com/profile.php?id=100091879890216"></a>*/
        <footer className="footer-container">
            <div>© 2023 My E-commerce</div>
            <a href="https://drive.google.com/file/d/1kqZJPK8JE6Z2EBkCKHfubotGNlVDRduN/view?usp=drive_link">
            Términos y condiciones  
                </a>
            <div className="flex space-x-4 justify-between">
                <a href="https://web.facebook.com/profile.php?id=100091879890216" className="text-white hover:text-gray-300">
                    <FiFacebook />
                </a>
                <a href="https://www.instagram.com/my_store_unal/" className="text-white hover:text-gray-300">
                    <FiInstagram />
                </a>
                <a href="https://twitter.com/My_Store_unal" className="text-white hover:text-gray-300">
                    <FiTwitter />
                </a>
            </div>
        </footer>
    );
};

export default Footer;