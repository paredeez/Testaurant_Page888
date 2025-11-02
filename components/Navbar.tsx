'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { useViewMode } from '@/contexts/ViewModeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { viewMode } = useViewMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className={`${viewMode === 'mobile' ? 'px-3' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        <div className={`flex justify-between items-center ${viewMode === 'mobile' ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <motion.a
            href="#home"
            className={`flex items-center gap-2 font-display font-bold text-primary-400 ${
              viewMode === 'mobile' ? 'text-lg' : 'text-2xl'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <UtensilsCrossed className={viewMode === 'mobile' ? 'w-6 h-6' : 'w-8 h-8'} />
            <span>Savoria</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className={`${viewMode === 'mobile' ? 'hidden' : 'hidden md:flex items-center gap-8'}`}>
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#reservation"
              className="px-6 py-2.5 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Table
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${viewMode === 'mobile' ? '' : 'md:hidden'} text-gray-300 hover:text-primary-400 transition-colors`}
          >
            {isOpen ? <X size={viewMode === 'mobile' ? 24 : 28} /> : <Menu size={viewMode === 'mobile' ? 24 : 28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`${viewMode === 'mobile' ? '' : 'md:hidden'} bg-dark-900/98 backdrop-blur-lg overflow-hidden`}
          >
            <div className={`${viewMode === 'mobile' ? 'px-3 py-4 space-y-2' : 'px-4 py-6 space-y-4'}`}>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className={`block text-gray-300 hover:text-primary-400 transition-colors font-medium ${
                    viewMode === 'mobile' ? 'text-base py-1.5' : 'text-lg py-2'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#reservation"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => setIsOpen(false)}
                className={`block w-full bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-500 transition-colors text-center ${
                  viewMode === 'mobile' ? 'px-4 py-2 text-sm mt-2' : 'px-6 py-3 mt-4'
                }`}
              >
                Book a Table
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

