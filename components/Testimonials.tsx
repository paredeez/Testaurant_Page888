'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { useViewMode } from '@/contexts/ViewModeContext';
import Image from 'next/image';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { viewMode } = useViewMode();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Food Critic',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      rating: 5,
      text: 'Absolutely exceptional! The attention to detail and quality of ingredients is unmatched. Every dish is a masterpiece.',
    },
    {
      name: 'Michael Chen',
      role: 'Regular Customer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      rating: 5,
      text: 'I&apos;ve been coming here for years and it never disappoints. The ambiance is perfect for special occasions.',
    },
    {
      name: 'Emma Williams',
      role: 'Business Executive',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
      rating: 5,
      text: 'The perfect place for business dinners. Impeccable service and a wine selection that rivals the best.',
    },
  ];

  return (
    <section className={`bg-dark-950 relative overflow-hidden ${viewMode === 'mobile' ? 'py-12' : 'py-24'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div ref={ref} className={`mx-auto relative z-10 ${viewMode === 'mobile' ? 'px-4' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-600/30">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What Our Guests <span className="text-primary-400">Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className={`grid gap-8 ${viewMode === 'mobile' ? 'grid-cols-1 gap-4' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700 hover:border-primary-600/50 transition-all relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary-600/20" />

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary-600/50">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary-400 text-primary-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400">4.9</div>
            <div className="text-sm text-gray-400">Google Rating</div>
          </div>
          <div className="w-px h-12 bg-dark-700"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400">5.0</div>
            <div className="text-sm text-gray-400">TripAdvisor</div>
          </div>
          <div className="w-px h-12 bg-dark-700"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400">★</div>
            <div className="text-sm text-gray-400">Michelin Star</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

