import React from 'react';
import { ChevronRight, Shield, Sparkles, Trash2, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Limpieza especializada',
      description: 'Servicios profesionales de limpieza por defunción desatendida en Barcelona.',
      icon: Shield,
      link: '/servicios/limpieza-especializada'
    },
    {
      title: 'Desinfección',
      description: 'Desinfección completa del área afectada siguiendo protocolos sanitarios estrictos.',
      icon: Sparkles,
      link: '/servicios/desinfeccion'
    },
    {
      title: 'Gestión de residuos',
      description: 'Eliminación segura y legal de residuos biológicos y materiales contaminados.',
      icon: Trash2,
      link: '/servicios/gestion-residuos'
    },
    {
      title: 'Restauración',
      description: 'Restauración completa del espacio para dejarlo en condiciones óptimas y habitables.',
      icon: Home,
      link: '/servicios/restauracion'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos servicios especializados de limpieza con la máxima profesionalidad, 
            discreción y respeto en momentos difíciles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                  <IconComponent className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Más información
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:+34690220944"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            Solicitar servicio urgente
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;