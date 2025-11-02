'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useViewMode } from '@/contexts/ViewModeContext';
import Image from 'next/image';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { viewMode } = useViewMode();

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      alt: 'Elegant dining setup',
    },
    {
      url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
      alt: 'Gourmet dish',
    },
    {
      url: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80',
      alt: 'Fine dining appetizer',
    },
    {
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
      alt: 'Restaurant interior',
    },
    {
      url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
      alt: 'Signature pizza',
    },
    {
      url: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
      alt: 'Chef preparing food',
    },
  ];

  return (
    <section id="gallery" className={`bg-gradient-to-b from-dark-900 to-dark-950 relative overflow-hidden ${
      viewMode === 'mobile' ? 'py-12' : 'py-24'
    }`}>
      <div ref={ref} className={`mx-auto relative z-10 ${viewMode === 'mobile' ? 'px-4' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
        {/* Header */}
        <motion.div
          className={`text-center ${viewMode === 'mobile' ? 'mb-8' : 'mb-16'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-600/30">
            Gallery
          </span>
          <h2 className={`font-display font-bold mb-6 ${viewMode === 'mobile' ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>
            Visual <span className="text-primary-400">Journey</span>
          </h2>
          <p className={`text-gray-400 max-w-3xl mx-auto ${viewMode === 'mobile' ? 'text-base' : 'text-xl'}`}>
            A glimpse into our culinary artistry and dining ambiance
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'mobile' ? 'grid-cols-2 gap-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-primary-400 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="relative max-w-4xl max-h-[90vh] aspect-video">
              <Image
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

