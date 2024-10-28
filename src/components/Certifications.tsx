import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certificaciones" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Certificaciones y Garantías</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center">
                {cert.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Garantías Adicionales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">{guarantee.title}</h4>
                  <p className="text-gray-600 text-sm">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const certifications = [
  {
    icon: <Award className="w-8 h-8 text-indigo-600" />,
    title: "Certificación ITEL",
    description: "Certificados por el Instituto Técnico Español de Limpiezas en procedimientos especializados."
  },
  {
    icon: <Shield className="w-8 h-8 text-indigo-600" />,
    title: "Seguro de Responsabilidad Civil",
    description: "Cobertura completa hasta 1.000.000€ para garantizar la máxima protección."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
    title: "Normativa RESA",
    description: "Cumplimiento de la normativa de Registro de Establecimientos y Servicios de Atención."
  }
];

const guarantees = [
  {
    title: "Confidencialidad Total",
    description: "Acuerdos de confidencialidad para cada servicio realizado."
  },
  {
    title: "Certificado de Tratamiento",
    description: "Documentación detallada de todos los procedimientos realizados."
  },
  {
    title: "Garantía de Satisfacción",
    description: "Compromiso de calidad con seguimiento posterior al servicio."
  },
  {
    title: "Personal Cualificado",
    description: "Equipo especializado con formación continua y certificaciones."
  },
  {
    title: "Productos Homologados",
    description: "Uso exclusivo de productos certificados y respetuosos con el medio ambiente."
  },
  {
    title: "Respuesta Rápida",
    description: "Garantía de respuesta en menos de 2 horas en Barcelona ciudad."
  }
];

export default Certifications;