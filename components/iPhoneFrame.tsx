'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface iPhoneFrameProps {
  children: ReactNode;
}

const iPhoneFrame = ({ children }: iPhoneFrameProps) => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center p-4 sm:p-8 overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      >
        {/* iPhone Frame */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Screen Border */}
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden shadow-inner">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50 flex items-center justify-center">
              <div className="w-16 h-1.5 bg-gray-900 rounded-full mt-2"></div>
            </div>

            {/* Screen Content */}
            <div 
              className="w-[375px] h-[812px] overflow-y-auto overflow-x-hidden bg-dark-950 hide-scrollbar"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="scale-100 origin-top-left">
                {children}
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full z-50"></div>
          </div>

          {/* Side Buttons */}
          <div className="absolute -left-1 top-24 w-1 h-8 bg-gray-700 rounded-l"></div>
          <div className="absolute -left-1 top-36 w-1 h-12 bg-gray-700 rounded-l"></div>
          <div className="absolute -left-1 top-52 w-1 h-12 bg-gray-700 rounded-l"></div>
          <div className="absolute -right-1 top-36 w-1 h-16 bg-gray-700 rounded-r"></div>
        </div>

        {/* Device Label */}
        <motion.div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm font-medium">iPhone 14 Pro</p>
          <p className="text-gray-600 text-xs">Restaurant Preview Mode</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default iPhoneFrame;

