import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'UniverseTravel',
    description: 'Landing page dinámica y moderna para una empresa de viajes espaciales',
    image: 'assets/project1.png',
    tags: ['React', 'ES6+', 'Tailwind'],
    link: ' https://franjavacisco.github.io/universe-travel/',
    github: 'https://github.com/FranJavacisco/universe-travel'
  },
  {
    id: 2,
    title: 'PetFashion',
    description: 'Plataforma de e-commerce enfocada en moda para mascotas, moderno y surrealista',
    image: 'assets/project2.png',
    tags: ['React', 'Firebase', 'Tailwind'],
    link: 'https://franjavacisco.github.io/pawsome-petcare/',
    github: 'https://github.com/FranJavacisco/pawsome-petcare'
  },
  {
    id: 3,
    title: 'OasisVar',
    description: 'Landing page inspirada en Ready Player One. Enfocada en la realidad virtual. ',
    image: 'assets/project3.png',
    tags: ['React', 'Javascript', 'Tailwind'],
    link: 'https://project3.com',
    github: 'https://github.com/FranJavacisco/Oasis-Var'
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section id="proyectos" className="relative overflow-hidden py-20 bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-primary/30 transition-colors duration-300" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20" />

      {/* Círculos decorativos */}
      <div className="absolute top-20 right-[20%] w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-20 left-[20%] w-96 h-96 bg-purple-400/10 dark:bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r dark:from-white dark:via-purple-200 dark:to-white from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
            Mis Proyectos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors">
            Una colección de mis trabajos más recientes y destacados
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>

      {/* Separadores con gradiente */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 dark:via-primary/50 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 dark:via-primary/50 to-transparent" />
    </section>
  );
}