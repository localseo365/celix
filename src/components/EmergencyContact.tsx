import React, { useState } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

export default function EmergencyContact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: '',
    urgent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contacto de Emergencia 24/7</h2>
            <p className="mb-8">
              Estamos disponibles las 24 horas para atender situaciones urgentes en Barcelona y área metropolitana.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4" />
                <div>
                  <h3 className="font-semibold">Teléfono de urgencias</h3>
                  <p><a href="tel:+34690220944" className="hover:text-indigo-200">690 22 09 44</a></p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p><a href="mailto:urgencias@celix.es" className="hover:text-indigo-200">urgencias@celix.es</a></p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-4" />
                <div>
                  <h3 className="font-semibold">Tiempo de respuesta</h3>
                  <p>En menos de 2 horas en Barcelona ciudad</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Teléfono</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Ubicación</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Mensaje</label>
                <textarea
                  className="w-full px-3 py-2 border rounded-md"
                  rows={4}
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Requiere atención urgente (menos de 2 horas)</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-900 text-white py-3 rounded-md hover:bg-indigo-800"
              >
                Enviar solicitud urgente
              </button>

              <p className="text-xs text-gray-500 mt-4">
                Sus datos están protegidos según la LOPD y el RGPD. Consulte nuestra política de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}