import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+34690220944" className="hover:text-white">690 22 09 44</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@celix.vercel.app" className="hover:text-white">info@celix.vercel.app</a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span>Carrer de la Costa, 38-60, Sarrià-Sant Gervasi, 08023 Barcelona</span>
              </div>
            </div>
            <div className="mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.4876546530483!2d2.1377799999999997!3d41.408145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2a989516d85%3A0x13f21d5c0f0f8f3a!2sCarrer%20de%20la%20Costa%2C%2038-60%2C%2008023%20Barcelona!5e0!3m2!1ses!2ses!4v1624451234567!5m2!1ses!2ses"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg mt-4"
                title="Ubicación de CELIX"
              ></iframe>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#servicios" className="hover:text-white">Limpieza Traumática</a></li>
              <li><a href="#servicios" className="hover:text-white">Desinfección</a></li>
              <li><a href="#servicios" className="hover:text-white">Limpieza de Biohazard</a></li>
              <li><a href="#servicios" className="hover:text-white">Servicios de Emergencia</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#sobre-nosotros" className="hover:text-white">Sobre Nosotros</a></li>
              <li><a href="#certificaciones" className="hover:text-white">Certificaciones</a></li>
              <li><a href="#casos" className="hover:text-white">Casos de Estudio</a></li>
              <li><a href="#blog" className="hover:text-white">Recursos</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="https://www.limpiezasindromediogenes.com/politica-de-privacidad/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Política de Privacidad</a></li>
              <li><a href="https://www.limpiezasindromediogenes.com/politica-de-cookies/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Política de Cookies</a></li>
              <li><a href="https://www.limpiezasindromediogenes.com/aviso-legal/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Aviso Legal</a></li>
              <li><a href="https://www.limpiezasindromediogenes.com/politica-de-privacidad/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Términos y Condiciones</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="https://facebook.com" className="hover:text-white" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="hover:text-white" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} CELIX. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}