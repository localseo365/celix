import React from 'react';

const CaseStudies = () => {
  return (
    <section id="casos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Casos de Éxito</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-900 bg-indigo-100 rounded-full mb-4">
                  {study.category}
                </span>
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Tiempo de respuesta: {study.responseTime}</span>
                    <span>{study.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const caseStudies = [
  {
    category: "Limpieza Especializada",
    title: "Restauración Completa de Vivienda",
    description: "Rehabilitación integral de un piso de 90m² en l'Eixample tras un caso de acumulación severa. Proceso completado en 72 horas con certificación sanitaria.",
    responseTime: "2 horas",
    location: "Barcelona, Eixample",
    image: "https://images.squarespace-cdn.com/content/v1/5e31f225a89a2f0525d5505e/1665418617936-VF1IZD2Z4C4GVXH8P3BA/Human+Waste+Cleaning.jpeg"
  },
  {
    category: "Desinfección",
    title: "Intervención en Local Comercial",
    description: "Desinfección y eliminación de olores en un establecimiento comercial de 120m². Reapertura del negocio en 24 horas cumpliendo normativas sanitarias.",
    responseTime: "90 minutos",
    location: "Barcelona, Gràcia",
    image: "https://biotcr.com/wp-content/uploads/2023/12/after-death-cleanup-in-oregon.png"
  },
  {
    category: "Gestión de Biorriesgos",
    title: "Limpieza Especializada Residencial",
    description: "Intervención urgente en una vivienda unifamiliar con gestión completa de residuos biológicos y restauración del espacio según protocolos.",
    responseTime: "60 minutos",
    location: "Sant Cugat",
    image: "https://www.localexpertcleaning.co.uk/wp-content/uploads/2021/01/virus-cleaning-service-near-me-birmingham.jpg"
  }
];

export default CaseStudies;