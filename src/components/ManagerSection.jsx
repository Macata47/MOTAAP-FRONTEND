import React from 'react';
import { cardsManager } from './Atoms/CardsManager.jsx';

function ManagerSection() {
  return (
    <div className="relative text-center p-8">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-900 opacity-80"></div>
      <div className="relative z-10">
        <h1 className="text-4xl text-black font-bold mb-4">Motapp Managers</h1>
        <div className="flex overflow-x-auto space-x-4">
          {cardsManager.map((manager, index) => (
            <div key={index} className="w-64 bg-orange-500 rounded-lg p-4 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <img src={manager.logo} alt={manager.nombre} className="w-full h-auto object-cover rounded-lg" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{manager.nombre}</h2>
            <p>{manager.leyenda}</p>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManagerSection;












