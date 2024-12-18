import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface HeroProps {
  productName?: string;
}

const Hero = ({ productName = "PanchoDev" }: HeroProps) => {
  const handleExploreClick = () => {
    window.open('https://github.com/FranJavacisco', '_blank');
  };

  return (
    <div className="w-full min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Efectos de fondo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary/30" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </motion.div>

      {/* Círculos decorativos con blur */}
      <div className="absolute top-20 left-[20%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-[20%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 min-h-screen flex items-center relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full">
          {/* Contenido izquierdo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8 order-1 lg:order-none 
                     mt-8 lg:mt-0 lg:pr-8 lg:-translate-y-12"
          >
            {/* Título */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 pt-12 lg:pt-0"
            >
              <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-white 
                           bg-clip-text text-transparent leading-tight lg:leading-none">
                {productName}
              </h1>
              <div className="hidden lg:block">
                <p className="text-xl text-gray-400 max-w-lg">
                  Desarrollador creativo & diseñador de experiencias digitales únicas.
                </p>
                <motion.div 
                  className="flex justify-start mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button 
                    onClick={handleExploreClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-xl
                             flex items-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all"
                  >
                    <span className="text-lg">Explorar Proyectos</span>
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagen del héroe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center order-2 lg:order-none lg:translate-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-[80%] lg:w-full aspect-square"
            >
              <img
                src="assets/hero-image.png"
                alt="hero image"
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 to-purple-600/20 blur-3xl transform scale-95" />
            </motion.div>
          </motion.div>

          {/* Contenido móvil (texto y botón) */}
          <motion.div
            className="space-y-8 order-3 lg:hidden text-center -mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl text-gray-400 max-w-lg mx-auto">
              Desarrollador creativo & diseñador de experiencias digitales únicas.
            </p>
            
            <motion.div className="flex justify-center">
              <motion.button 
                onClick={handleExploreClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-xl
                         flex items-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                <span className="text-lg">Explorar Proyectos</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
