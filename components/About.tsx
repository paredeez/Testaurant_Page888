'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Heart, Leaf } from 'lucide-react';
import { useViewMode } from '@/contexts/ViewModeContext';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { viewMode } = useViewMode();

  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '50+', label: 'Chef Team' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '100+', label: 'Menu Items' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We use only the finest ingredients sourced from local farms.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our chefs bring decades of culinary expertise to every dish.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every meal is crafted with passion and attention to detail.',
    },
    {
      icon: Leaf,
      title: 'Sustainable',
      description: 'Committed to eco-friendly practices and sustainability.',
    },
  ];

  return (
    <section id="about" className={`bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden ${
      viewMode === 'mobile' ? 'py-12' : 'py-24'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZjA3NjBiIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div ref={ref} className={`mx-auto relative z-10 ${
        viewMode === 'mobile' ? 'px-4' : 'max-w-7xl px-4 sm:px-6 lg:px-8'
      }`}>
        {/* Header */}
        <motion.div
          className={`text-center ${viewMode === 'mobile' ? 'mb-8' : 'mb-16'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-600/30">
            About Us
          </span>
          <h2 className={`font-display font-bold mb-6 ${viewMode === 'mobile' ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>
            Our <span className="text-primary-400">Story</span>
          </h2>
          <p className={`text-gray-400 max-w-3xl mx-auto ${viewMode === 'mobile' ? 'text-base' : 'text-xl'}`}>
            For over two decades, we've been serving exceptional dishes that blend 
            tradition with innovation, creating unforgettable dining experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className={`grid grid-cols-2 ${viewMode === 'mobile' ? 'gap-3 mb-10' : 'md:grid-cols-4 gap-6 mb-20'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`bg-dark-800/50 backdrop-blur-sm rounded-2xl text-center border border-dark-700 hover:border-primary-600/50 transition-all ${
                viewMode === 'mobile' ? 'p-4' : 'p-8'
              }`}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <motion.div
                className={`font-display font-bold text-primary-400 mb-2 ${
                  viewMode === 'mobile' ? 'text-2xl' : 'text-4xl md:text-5xl'
                }`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className={`text-gray-400 font-medium ${viewMode === 'mobile' ? 'text-xs' : ''}`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'mobile' ? 'grid-cols-1 gap-4' : 'md:grid-cols-2 lg:grid-cols-4'
        }`}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm rounded-2xl border border-dark-700 hover:border-primary-600/50 transition-all group ${
                viewMode === 'mobile' ? 'p-4' : 'p-6'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`bg-primary-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600/30 transition-colors ${
                  viewMode === 'mobile' ? 'w-12 h-12' : 'w-14 h-14'
                }`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <value.icon className={viewMode === 'mobile' ? 'w-6 h-6 text-primary-400' : 'w-7 h-7 text-primary-400'} />
              </motion.div>
              <h3 className={`font-display font-semibold mb-3 text-gray-100 ${
                viewMode === 'mobile' ? 'text-lg' : 'text-xl'
              }`}>
                {value.title}
              </h3>
              <p className={`text-gray-400 ${viewMode === 'mobile' ? 'text-sm' : ''}`}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#menu"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Our Menu
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

