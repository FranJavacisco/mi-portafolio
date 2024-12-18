// src/components/Contact/Contact.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <a href="mailto:contacto@example.com" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                      panchodev2024@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Teléfono</h4>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                      +56 (9) 7873-8166
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Ubicación</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Santiago, Chile
                    </p>
                  </div>
                </div>
              </div>

              <SocialLinks className="mt-8" />
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

