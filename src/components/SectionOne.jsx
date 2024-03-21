import React from 'react';
import evento13 from "../assets/images/evento13.jpg";
import appstore from "../assets/images/appstore.png";
import googleplay from "../assets/images/googleplay.png";


const SectionOne = () => {
  return (
    <div className="bg-black">
    <div className="container mx-auto py-8 px-4 md:px-0">
      <div className="flex flex-col md:flex-row">
        {/* Columna Izquierda */}
        <div className="md:w-1/2 md:pr-4">
          <img src={evento13} alt="Imagen" className="w-full h-auto" />
        </div>
        
        {/* Columna Derecha */}
        <div className="md:w-1/2 md:pl-4">
          <h2 className="text-4xl text-orange-600 font-bold mb-10">Kilómetros de Aventura y Conexión en  tus Manos  </h2>
          <p className="text-xl text-white mb-10">Ahora en tus manos todos los eventos y rutas moteras de cualquier punto 
                de España de una manera diferente, divertida y organizada. Consulta toda la información, 
                ponte en contacto con el club, apúntala en tu calendario y ¡prepara tu moto!Descripción</p>
          <h3 className="text-3xl text-white font-bold mb-10">Próximamente</h3>
          <div className="flex mb-2">
              <img src={googleplay} alt="logo googleplay" className="mr-2 w-32 h-auto" />
              <img src={appstore} alt="logo appstore" className="w-32 h-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SectionOne;
