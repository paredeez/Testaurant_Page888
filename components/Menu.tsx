'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Utensils, Coffee, Wine, Cake } from 'lucide-react';
import { useViewMode } from '@/contexts/ViewModeContext';

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('mains');
  const { viewMode } = useViewMode();

  const categories = [
    { id: 'mains', name: 'Main Courses', icon: Utensils },
    { id: 'beverages', name: 'Beverages', icon: Coffee },
    { id: 'wines', name: 'Wines', icon: Wine },
    { id: 'desserts', name: 'Desserts', icon: Cake },
  ];

  const menuItems: Record<string, Array<{title: string; description: string; price: string}>> = {
    mains: [
      {
        title: 'Grilled Salmon',
        description: 'Fresh Atlantic salmon with herb butter and seasonal vegetables',
        price: '$32',
      },
      {
        title: 'Wagyu Beef Steak',
        description: 'Premium cut with truffle mashed potatoes and red wine reduction',
        price: '$58',
      },
      {
        title: 'Mushroom Risotto',
        description: 'Creamy arborio rice with wild mushrooms and parmesan',
        price: '$28',
      },
      {
        title: 'Lobster Thermidor',
        description: 'Classic French dish with brandy cream sauce',
        price: '$45',
      },
      {
        title: 'Duck Confit',
        description: 'Slow-cooked duck leg with cherry reduction',
        price: '$38',
      },
      {
        title: 'Vegetable Wellington',
        description: 'Roasted vegetables in puff pastry with herb gravy',
        price: '$26',
      },
    ],
    beverages: [
      {
        title: 'Artisan Coffee',
        description: 'Single-origin espresso or pour-over',
        price: '$6',
      },
      {
        title: 'Fresh Juice',
        description: 'Orange, apple, or seasonal fruit blend',
        price: '$8',
      },
      {
        title: 'Craft Cocktails',
        description: 'House specialty cocktails made with premium spirits',
        price: '$16',
      },
      {
        title: 'Herbal Tea Selection',
        description: 'Curated collection of premium loose-leaf teas',
        price: '$7',
      },
    ],
    wines: [
      {
        title: 'Chardonnay Reserve',
        description: 'California 2019 - Oak aged with vanilla notes',
        price: '$65',
      },
      {
        title: 'Pinot Noir',
        description: 'Oregon 2020 - Earthy with red fruit flavors',
        price: '$72',
      },
      {
        title: 'Champagne Brut',
        description: 'France NV - Crisp bubbles with citrus notes',
        price: '$95',
      },
      {
        title: 'Cabernet Sauvignon',
        description: 'Napa Valley 2018 - Bold with dark fruit',
        price: '$88',
      },
    ],
    desserts: [
      {
        title: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center and vanilla ice cream',
        price: '$14',
      },
      {
        title: 'Crème Brûlée',
        description: 'Classic French custard with caramelized sugar crust',
        price: '$12',
      },
      {
        title: 'Tiramisu',
        description: 'Italian coffee-soaked ladyfingers with mascarpone',
        price: '$13',
      },
      {
        title: 'Seasonal Fruit Tart',
        description: 'Fresh berries on vanilla custard with buttery crust',
        price: '$11',
      },
    ],
  };

  return (
    <section id="menu" className={`bg-dark-900 relative overflow-hidden ${viewMode === 'mobile' ? 'py-12' : 'py-24'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary-600/5 rounded-full blur-3xl"
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
      </div>

      <div ref={ref} className={`mx-auto relative z-10 ${viewMode === 'mobile' ? 'px-4' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
        {/* Header */}
        <motion.div
          className={`text-center ${viewMode === 'mobile' ? 'mb-8' : 'mb-16'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-600/30">
            Our Menu
          </span>
          <h2 className={`font-display font-bold mb-6 ${viewMode === 'mobile' ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>
            Culinary <span className="text-primary-400">Delights</span>
          </h2>
          <p className={`text-gray-400 max-w-3xl mx-auto ${viewMode === 'mobile' ? 'text-base' : 'text-xl'}`}>
            Explore our carefully curated selection of dishes, each prepared with 
            the finest ingredients and utmost care.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className={`flex flex-wrap justify-center mb-12 ${viewMode === 'mobile' ? 'gap-2' : 'gap-4'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 rounded-full font-semibold transition-all ${
                viewMode === 'mobile' ? 'px-4 py-2 text-sm' : 'px-6 py-3'
              } ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className={viewMode === 'mobile' ? 'w-4 h-4' : 'w-5 h-5'} />
              <span className={viewMode === 'mobile' ? 'text-xs' : ''}>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          className={`grid gap-6 ${
            viewMode === 'mobile' ? 'grid-cols-1 gap-4' : 'md:grid-cols-2 lg:grid-cols-3'
          }`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm rounded-2xl border border-dark-700 hover:border-primary-600/50 transition-all group ${
                viewMode === 'mobile' ? 'p-4' : 'p-6'
              }`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className={`font-display font-semibold text-gray-100 group-hover:text-primary-400 transition-colors ${
                  viewMode === 'mobile' ? 'text-lg' : 'text-xl'
                }`}>
                  {item.title}
                </h3>
                <span className={`font-bold text-primary-400 ${viewMode === 'mobile' ? 'text-xl' : 'text-2xl'}`}>
                  {item.price}
                </span>
              </div>
              <p className={`text-gray-400 leading-relaxed ${viewMode === 'mobile' ? 'text-sm' : ''}`}>
                {item.description}
              </p>
              <motion.div
                className="mt-4 pt-4 border-t border-dark-700 flex justify-end"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <button className="text-sm text-primary-400 hover:text-primary-300 font-semibold">
                  Add to order →
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400 mb-6">
            Want to see our full menu with seasonal specials?
          </p>
          <motion.button
            className="inline-block px-8 py-4 bg-transparent border-2 border-primary-600 text-primary-400 rounded-full font-semibold text-lg hover:bg-primary-600/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Full Menu (PDF)
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;

