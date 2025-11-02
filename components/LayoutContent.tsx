'use client';

import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useViewMode } from '@/contexts/ViewModeContext';
import Navbar from './Navbar';
import Footer from './Footer';
import ViewToggle from './ViewToggle';
import iPhoneFrame from './iPhoneFrame';

interface LayoutContentProps {
  children: ReactNode;
}

const LayoutContent = ({ children }: LayoutContentProps) => {
  const { viewMode } = useViewMode();

  const content = (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );

  return (
    <>
      <AnimatePresence mode="wait">
        {viewMode === 'mobile' ? (
          iPhoneFrame({ children: content })
        ) : (
          content
        )}
      </AnimatePresence>
      <ViewToggle />
    </>
  );
};

export default LayoutContent;

