import React from 'react';
import carretera02 from "../assets/images/carretera02.jpg";
import { cardsInfo } from './Atoms/CardsInfo'; 




function SectionFive() {
    return (
      <div className="relative text-center p-8">
       
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-opacity-20" style={{ backgroundImage: `url(${carretera02})` }}></div>
        
       
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-900 opacity-80"></div>
        
       
        <div className="relative z-10">
          
          <h1 className="text-4xl text-black font-bold mb-4">¿Quiéres organizar un evento?</h1>
          
         
          <p className="text-xl text-black mb-8">Puedes subir tus eventos de forma totalmente gratuita. Consigue visibilidad rodando a nivel nacional de una forma sencilla.
                     Tu aventura no puede faltar en la agenda de la mayor comunidad de moteros.</p>
          
       
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cardsInfo.map((card, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-lg">
                
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-500 mx-auto mb-4">
                  <span className="text-2xl text-white">{card.icon}</span> 
                </div>
               
                <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  

  export default SectionFive;