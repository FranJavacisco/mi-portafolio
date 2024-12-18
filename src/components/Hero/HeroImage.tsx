// src/components/Hero/HeroImage.tsx
export default function HeroImage() {
  return (
    <div className="relative w-full aspect-square">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 w-full h-full"
      >
        {/* Círculo decorativo con gradiente */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
        
        {/* Imagen principal */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative z-20 w-full h-full bg-gray-800 rounded-2xl overflow-hidden"
        >
          <img
            src="assets/hero-image.png" // Asegúrate de añadir una imagen aquí
            alt="hero image"
            className="w-full h-full object-cover"
          />
          
          {/* Superposición de efecto */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Elementos decorativos flotantes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
      />
    </div>
  );
}

// Estilos adicionales para añadir al archivo global de CSS (src/index.css)
@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300;
  }
}
