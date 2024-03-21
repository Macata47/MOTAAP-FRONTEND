import React from 'react';

const ContactSection = () => {
  return (
    <div className="container bg-white mx-auto flex py-8">
      {/* Columna izquierda con el formulario */}
      <div className="w-1/2 p-8 bg-orange-500">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Contacta con nosotros</h2>
        <p className="text-white text-center mb-4">Realiza tu consulta a través de este formulario.
                        Nos pondremos en contacto contigo en la mayor brevedad posible.</p>
        <form className="max-w-sm mx-auto flex flex-col">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Nombre</label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nombre" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">Asunto</label>
            <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Asunto" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Mensaje</label>
            <textarea className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Mensaje"></textarea>
          </div>
          <button className="bg-blue-900 hover:bg-blue-900 item-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-center" type="button">Enviar</button>
        </form>
      </div>

      {/* Columna derecha con la información de contacto */}
      <div className="w-1/2 p-8 flex flex-col self-center">
        <div className="flex items-center mb-2">
          <img src="icono.png" alt="Icono" className="w-12 h-12 mr-2 " />
          <p className="text-lg">Soporte</p>
        </div>
        <p className="flex flex-col"><a href="mailto:info@example.com" className="text-blue-500">info@motapp.com</a></p>
        <div className="flex items-center mb-2">
          <img src="icono.png" alt="Icono" className="w-12 h-12 mr-2" />
          <p className="text-lg">Organizadores</p>
        </div>
        <p className="flex flex-col"><a href="mailto:info@example.com" className="text-blue-500">agenda@motapp.com</a></p>
        <div className="flex items-center mb-2">
          <img src="icono.png" alt="Icono" className="w-12 h-12 mr-2" />
          <p className="text-lg">Publicidad</p>
        </div>
        <p className="flex flex-col"><a href="mailto:info@example.com" className="text-blue-500">marketing@motapp.com</a></p>
      </div>
      
      
    </div>
  );
}

export default ContactSection;
