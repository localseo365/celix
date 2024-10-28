import React from 'react';
import { Book, AlertTriangle, FileText } from 'lucide-react';

const Education = () => {
  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Recursos Educativos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <ul className="space-y-2">
                {resource.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                    <span className="text-sm text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Preguntas Frecuentes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-3">{faq.question}</h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const resources = [
  {
    icon: <Book className="w-6 h-6 text-indigo-600" />,
    title: "Guía de Prevención",
    description: "Información esencial sobre medidas preventivas y mantenimiento.",
    points: [
      "Protocolos de limpieza preventiva",
      "Identificación de riesgos potenciales",
      "Mantenimiento regular recomendado",
      "Medidas de seguridad básicas"
    ]
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-indigo-600" />,
    title: "Protocolos de Emergencia",
    description: "Procedimientos a seguir en situaciones de emergencia.",
    points: [
      "Pasos inmediatos a seguir",
      "Contactos de emergencia",
      "Documentación necesaria",
      "Medidas de seguridad"
    ]
  },
  {
    icon: <FileText className="w-6 h-6 text-indigo-600" />,
    title: "Normativa y Legislación",
    description: "Información sobre requisitos legales y normativas.",
    points: [
      "Legislación vigente",
      "Requisitos de documentación",
      "Gestión de residuos",
      "Certificaciones necesarias"
    ]
  }
];

const faqs = [
  {
    question: "¿Cuál es el tiempo de respuesta en emergencias?",
    answer: "Garantizamos un tiempo de respuesta inferior a 2 horas en Barcelona ciudad y área metropolitana, disponibles 24/7."
  },
  {
    question: "¿Qué documentación se proporciona tras el servicio?",
    answer: "Entregamos un certificado detallado de limpieza, documentación fotográfica (si se autoriza) y garantía del servicio."
  },
  {
    question: "¿Están cubiertos por seguro los servicios?",
    answer: "Sí, disponemos de un seguro de responsabilidad civil de hasta 1.000.000€ que cubre todos nuestros servicios."
  },
  {
    question: "¿Cómo garantizan la confidencialidad?",
    answer: "Firmamos acuerdos de confidencialidad y todo nuestro personal está sujeto a estrictos protocolos de privacidad."
  }
];

export default Education;