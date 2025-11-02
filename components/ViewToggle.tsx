'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone } from 'lucide-react';
import { useViewMode } from '@/contexts/ViewModeContext';

const ViewToggle = () => {
  const { viewMode, toggleViewMode } = useViewMode();

  return (
    <motion.button
      onClick={toggleViewMode}
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-semibold shadow-2xl shadow-primary-600/40 hover:shadow-primary-600/60 transition-all group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {viewMode === 'desktop' ? (
          <motion.div
            key="desktop"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <Smartphone className="w-5 h-5" />
            <span className="hidden sm:inline">iOS Preview</span>
          </motion.div>
        ) : (
          <motion.div
            key="mobile"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <Monitor className="w-5 h-5" />
            <span className="hidden sm:inline">Desktop View</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ViewToggle;

