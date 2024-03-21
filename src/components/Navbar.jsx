import React, { useState } from 'react';
import logo from ".././assets/images/logomotapp.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar ">
      <nav className="sticky bg-black top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <div className="flex items-center"> {/* Contenedor de los elementos */}
                <img className="h-32 w-32 mr-2" src={logo} alt="Logo" />
                {/* Mostrar botón de menú solo en pantallas pequeñas */}
                <button
                  className="md:hidden block ml-auto px-3 py-2 rounded focus:outline-none focus:ring focus:ring-gray-300"
                  onClick={toggleMenu}
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm18 5H3v2h18v-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Menú desplegable en pantallas pequeñas */}
            <ul
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } md:flex flex-col md:flex-row md:space-x-16 w-full md:w-auto py-2 px-4 rounded-md`}
            >
              <li>
                <a href="#" className="text-orange-500 font-bold hover:text-gray-300 block py-3">INICIO</a>
              </li>
              <li>
                <a href="#" className="text-orange-500 font-bold hover:text-gray-300 block py-3">SERVICIOS</a>
              </li>
              <li>
                <a href="#" className="text-orange-500 font-bold hover:text-gray-300 block py-3">CLUBES</a>
              </li>
              <li>
                <a href="#" className="text-orange-500 font-bold hover:text-gray-300 block py-3">EVENTOS</a>
              </li>
              <li>
                <a href="#" className="text-orange-500 font-bold hover:text-gray-300 block py-3">CONTACTO</a>
              </li>
              <li>
                <a href="#" className="text-orange-500 font-bold hover:text-gray-300 block py-3">LOGIN</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;










