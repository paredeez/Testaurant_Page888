'use client';

import { motion } from 'framer-motion';
import { ChefHat, Clock, Award, ArrowDown } from 'lucide-react';
import FloatingFood from './FloatingFood';
import { useViewMode } from '@/contexts/ViewModeContext';

const Hero = () => {
  const { viewMode } = useViewMode();
  const features = [
    { icon: ChefHat, text: 'Expert Chefs' },
    { icon: Clock, text: 'Open Daily' },
    { icon: Award, text: 'Michelin Star' },
  ];

  return (
    <section id="home" className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 ${
      viewMode === 'mobile' ? 'min-h-[100vh] py-16' : 'min-h-screen'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className={`relative z-10 mx-auto ${
        viewMode === 'mobile' ? 'px-4 py-8' : 'max-w-7xl px-4 sm:px-6 lg:px-8 py-32'
      }`}>
        <div className={`grid gap-12 items-center ${viewMode === 'mobile' ? 'grid-cols-1' : 'lg:grid-cols-2'}`}>
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-semibold mb-6 border border-primary-600/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                ✨ Welcome to Savoria
              </motion.span>

              <motion.h1
                className={`font-display font-bold mb-6 leading-tight ${
                  viewMode === 'mobile' ? 'text-3xl' : 'text-5xl md:text-7xl'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Where Every Bite
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  Tells a Story
                </span>
              </motion.h1>

              <motion.p
                className={`text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 ${
                  viewMode === 'mobile' ? 'text-base' : 'text-xl'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Experience culinary excellence with our carefully crafted dishes, 
                blending tradition and innovation in every plate.
              </motion.p>

              <motion.div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${
                  viewMode === 'mobile' ? 'mb-6' : 'mb-12'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.a
                  href="#menu"
                  className={`bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/30 ${
                    viewMode === 'mobile' ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'
                  }`}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(241, 106, 11, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Menu
                </motion.a>
                <motion.a
                  href="#reservation"
                  className={`bg-transparent border-2 border-primary-600 text-primary-400 rounded-full font-semibold hover:bg-primary-600/10 transition-all ${
                    viewMode === 'mobile' ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reserve Now
                </motion.a>
              </motion.div>

              {/* Features */}
              <motion.div
                className={`flex flex-wrap justify-center lg:justify-start ${viewMode === 'mobile' ? 'gap-3' : 'gap-6'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-3 bg-dark-900/50 backdrop-blur-sm rounded-full border border-dark-700 ${
                      viewMode === 'mobile' ? 'px-3 py-2' : 'px-4 py-3'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgb(241, 106, 11)' }}
                  >
                    <feature.icon className={viewMode === 'mobile' ? 'w-4 h-4 text-primary-400' : 'w-5 h-5 text-primary-400'} />
                    <span className={`text-gray-300 font-medium ${viewMode === 'mobile' ? 'text-sm' : ''}`}>{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - 3D Food Element */}
          {viewMode !== 'mobile' && (
            <motion.div
              className="relative h-[500px] hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <FloatingFood />
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

