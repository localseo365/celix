import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/5e31f225a89a2f0525d5505e/1a20371e-12af-4c22-aac0-62e1c6bafcad/sanitise+spray.jpeg")'
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 py-24 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios profesionales de limpieza por defrunción en Barcelona
          </h1>
          <p className="text-xl mb-8">
            Servicio profesional, discreto y compasivo de limpieza especializada disponible 24/7 en Barcelona y área metropolitana. Con más de 15 años de experiencia en la gestión profesional de situaciones delicadas, CELIX se especializa en la limpieza y desinfección de escenarios traumáticos, proporcionando un servicio integral que cumple con los más altos estándares de calidad y seguridad. Nuestro equipo altamente capacitado está preparado para responder a cualquier emergencia, garantizando una intervención rápida y eficaz en toda la provincia de Barcelona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+34690220944" className="bg-white text-indigo-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 text-center inline-block">
              Solicitar Asistencia Urgente
            </a>
            <a href="#servicios" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-indigo-900 text-center inline-block">
              Nuestros Servicios
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <Shield className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certificados y Asegurados</h3>
            <p>Cumplimos con todas las normativas y estándares de seguridad vigentes en Cataluña. Nuestro equipo está completamente certificado y asegurado, garantizando la máxima protección y tranquilidad en cada intervención. Contamos con todas las acreditaciones necesarias para la gestión de residuos biológicos y la descontaminación de espacios.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <Clock className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Disponibilidad 24/7</h3>
            <p>Servicio de respuesta inmediata disponible las 24 horas del día, los 365 días del año en Barcelona y área metropolitana. Nuestro equipo de guardia está preparado para actuar en menos de 2 horas en cualquier ubicación de la ciudad. Atendemos emergencias en toda la provincia, incluyendo el Vallès, Maresme y Baix Llobregat.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <Award className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Máxima Discreción</h3>
            <p>Garantizamos total confidencialidad y profesionalidad en cada servicio. Nuestros protocolos de actuación aseguran la privacidad absoluta de nuestros clientes, cumpliendo con la normativa LOPD y el RGPD. Utilizamos vehículos no rotulados y equipos discretos para mantener la máxima confidencialidad durante nuestras intervenciones.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;