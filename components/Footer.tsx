'use client';

import { motion } from 'framer-motion';
import { UtensilsCrossed, Facebook, Instagram, Twitter, Youtube, MapPin } from 'lucide-react';
import { useViewMode } from '@/contexts/ViewModeContext';

const Footer = () => {
  const { viewMode } = useViewMode();
  const footerLinks = {
    'Quick Links': ['Home', 'About Us', 'Menu', 'Gallery', 'Contact'],
    'Hours': [
      'Monday - Friday: 5:00 PM - 11:00 PM',
      'Saturday: 4:00 PM - 12:00 AM',
      'Sunday: 4:00 PM - 10:00 PM',
    ],
    'Contact': [
      '123 Gourmet Street',
      'New York, NY 10001',
      'Phone: +1 (555) 123-4567',
      'Email: info@savoria.com',
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer id="contact" className="bg-dark-950 border-t border-dark-800">
      <div className={`mx-auto ${viewMode === 'mobile' ? 'px-4 py-8' : 'max-w-7xl px-4 sm:px-6 lg:px-8 py-16'}`}>
        <div className={`grid mb-12 ${viewMode === 'mobile' ? 'grid-cols-1 gap-6 mb-6' : 'md:grid-cols-2 lg:grid-cols-4 gap-12'}`}>
          {/* Brand */}
          <div>
            <motion.div
              className={`flex items-center gap-2 font-display font-bold text-primary-400 mb-4 ${
                viewMode === 'mobile' ? 'text-xl' : 'text-2xl'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <UtensilsCrossed className={viewMode === 'mobile' ? 'w-6 h-6' : 'w-8 h-8'} />
              <span>Savoria</span>
            </motion.div>
            <p className={`text-gray-400 mb-6 ${viewMode === 'mobile' ? 'text-sm' : ''}`}>
              Experience culinary excellence where every dish tells a story of passion and tradition.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h3 className="text-lg font-display font-semibold text-gray-100 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {title === 'Quick Links' ? (
                      <a
                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        {link}
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm block">{link}</span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-dark-800 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-display font-semibold text-gray-100 mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Get updates on new menu items, special events, and exclusive offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-dark-800 border border-dark-700 rounded-full text-gray-100 focus:outline-none focus:border-primary-600 transition-colors"
              />
              <motion.button
                type="submit"
                className="px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Savoria. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

