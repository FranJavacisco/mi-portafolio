import { FC, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

interface FooterControlsProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const FooterControls: FC<FooterControlsProps> = ({ darkMode, setDarkMode }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Theme Toggle */}
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700
                   shadow-lg hover:shadow-xl transition-all duration-300
                   dark:bg-gray-800/10 group"
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" />
        )}
      </motion.button>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20
                       shadow-lg hover:shadow-xl transition-all duration-300
                       group cursor-pointer"
            >
              <ArrowUpIcon className="w-6 h-6 text-primary group-hover:text-primary-dark transition-colors" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FooterControls;