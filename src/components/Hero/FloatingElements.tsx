// src/components/Hero/FloatingElements.tsx
import { motion } from 'framer-motion';

export default function FloatingElements() {
  const elements = [
    { size: 'w-4 h-4', position: 'top-1/4 left-1/4', delay: 0 },
    { size: 'w-6 h-6', position: 'top-1/2 right-1/4', delay: 1 },
    { size: 'w-8 h-8', position: 'bottom-1/4 left-1/3', delay: 2 },
  ];

  return (
    <>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.size} bg-primary/30 rounded-full`}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </>
  );
}