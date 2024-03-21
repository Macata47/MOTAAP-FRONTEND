import React from 'react';

const CardsSection = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Título central */}
      <h2 className="text-3xl font-bold text-center mb-8">La web que pone en tus manos kilómetros de aventura</h2>
      <p className="text-lg font-bold text-center mb-8">Todo lo que necesitas en un mismo lugar</p>
      {/* Contenedor de las dos columnas */}
      <div className="flex justify-center">
        {/* Columna 1 */}
        <div className="w-1/2 mr-4">
          {/* Cards en la columna 1 */}
          <div className="bg-orange-500 rounded p-4 mb-4">
            <h3 className="text-white font-bold mb-2">Agenda </h3>
            <p className="text-blue-900">Encuentra los eventos según tus preferencias y accede a toda la información que necesitas.</p>
          </div>
          <div className="bg-orange-500 rounded p-4 mb-4">
            <h3 className="text-white font-bold mb-2">Inscripción</h3>
            <p className="text-blue-900">Accede al formulario de inscripciones directamente e inscríbete ya.</p>
          </div>
          <div className="bg-orange-500 rounded p-4">
            <h3 className="text-white font-bold mb-2">Avisos</h3>
            <p className="text-blue-900">Accede al formulario de inscripciones directamente e inscríbete ya.</p>
          </div>
        </div>

        {/* Columna 2 */}
        <div className="w-1/2 ml-4">
          {/* Cards en la columna 2 */}
          <div className="bg-orange-500 rounded p-4 mb-4">
            <h3 className="text-white font-bold mb-2">Buscar</h3>
            <p className="text-blue-900">Navega por el mapa, encuentra el evento
que más te interese y se adapte a ti.  </p>
          </div>
          <div className="bg-orange-500 rounded p-4 mb-4">
            <h3 className="text-white font-bold mb-2">Filtrar</h3>
            <p className="text-blue-900">Filtra por Club, Comunidad, modalidad, fecha
 y distancia de forma rápida.</p>
          </div>
          <div className="bg-orange-500 rounded p-4">
            <h3 className="text-white font-bold mb-2">Compartir</h3>
            <p className="text-blue-900">Las aventuras, si son compartidas, siempre 
son mejores. ¡Cuantos más mejor!  </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;
