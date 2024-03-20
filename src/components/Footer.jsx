import React from 'react';
import appstore from "../assets/images/appstore.png";
import googleplay from "../assets/images/googleplay.png";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 */}
          <div>
            <h2 className="text-lg text-orange-500 font-semibold mb-4">Mapa Web</h2>
            <ul className="space-y-2">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Organizadores</a></li>
              <li><a href="#">Managers</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Agenda</a></li>
              <li><a href="#">Faqs</a></li>
            </ul>
          </div>
          {/* Columna 2 */}
          <div>
            <h2 className="text-lg text-orange-500 font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#">Política de coockies</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Condiciones de uso</a></li>
              <li><a href="#">Aviso Legal</a></li>
            </ul>
          </div>
          {/* Columna 3 */}
          <div>
            <h2 className="text-lg text-orange-500 font-semibold mb-4">Social</h2>
            <ul className="space-y-2">
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
          {/* Columna 4 */}
          <div>
            <h2 className="text-lg  text-orange-500 font-semibold mb-4">Desgarga APP</h2>
            <img src={appstore} alt="App Store Logo" className="mb-4"/>
            <img src={googleplay} alt="App Store Logo" className="mb-4"/>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



