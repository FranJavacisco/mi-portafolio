import { FC, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  name: string;
  to: string;
}

const navigationLinks: NavLink[] = [
  { name: 'Inicio', to: 'home' },
  { name: 'Proyectos', to: 'projects' },
  { name: 'Habilidades', to: 'skills' },
  { name: 'Contacto', to: 'contact' }
];

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">Portfolio</span>
          </div>

          {/* Desktop Navigation - Se oculta en móvil */}
          <div className="hidden md:flex items-center space-x-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                className="px-3 py-2 rounded-md text-sm font-medium cursor-pointer
                  hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botón de menú móvil - Solo visible en móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
          >
            <span className="sr-only">Abrir menú principal</span>
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span 
                className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menú móvil - Se muestra/oculta según estado */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300
                hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;