import { FC } from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Tecnologías Core",
    skills: [
      { name: "React + Vite", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 92, icon: "💪" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "Framer Motion", level: 88, icon: "✨" }
    ]
  },
  {
    title: "Herramientas de Desarrollo",
    skills: [
      { name: "Git & GitHub", level: 85, icon: "🔄" },
      { name: "npm/yarn", level: 88, icon: "📦" },
      { name: "ESLint", level: 85, icon: "🔍" },
      { name: "VS Code", level: 90, icon: "💻" }
    ]
  },
  {
    title: "Optimización & Rendimiento",
    skills: [
      { name: "Lazy Loading", level: 85, icon: "🚀" },
      { name: "SEO", level: 82, icon: "🎯" },
      { name: "Responsive Design", level: 95, icon: "📱" },
      { name: "Clean Code", level: 88, icon: "✨" }
    ]
  },
  {
    title: "UI/UX & Animaciones",
    skills: [
      { name: "Animaciones CSS", level: 90, icon: "🎭" },
      { name: "Diseño Moderno", level: 88, icon: "🎨" },
      { name: "Accesibilidad", level: 85, icon: "♿" },
      { name: "Dark Mode", level: 92, icon: "🌙" }
    ]
  }
];

const Skills: FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de sección con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tecnologías Utilizadas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Stack tecnológico y herramientas implementadas en este y otros proyectos
          </p>
        </motion.div>

        {/* Grid de categorías con animación escalonada */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Nota adicional con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center text-gray-600 dark:text-gray-400"
        >
          <p>
            Este proyecto está en constante evolución, incorporando las últimas tendencias
            y mejores prácticas del desarrollo web moderno.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;