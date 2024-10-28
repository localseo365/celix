import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-indigo-900 hover:text-indigo-700 transition-colors">CELIX</a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-indigo-900">Servicios</a>
            <a href="#casos" className="text-gray-700 hover:text-indigo-900">Casos</a>
            <a href="#certificaciones" className="text-gray-700 hover:text-indigo-900">Certificaciones</a>
            <a href="#recursos" className="text-gray-700 hover:text-indigo-900">Recursos</a>
            <a href="tel:+34690220944" className="bg-indigo-900 text-white px-6 py-2 rounded-md hover:bg-indigo-800 flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Contacto Urgente
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#services" className="block py-2 text-gray-700">Servicios</a>
            <a href="#casos" className="block py-2 text-gray-700">Casos</a>
            <a href="#certificaciones" className="block py-2 text-gray-700">Certificaciones</a>
            <a href="#recursos" className="block py-2 text-gray-700">Recursos</a>
            <a href="tel:+34690220944" className="block py-2 text-indigo-900 font-semibold">Contacto Urgente</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;