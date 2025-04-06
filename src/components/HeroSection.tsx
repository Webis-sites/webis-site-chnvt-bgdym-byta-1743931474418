'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="חנות בגדים מודרנית"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-30"
        />
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-l from-primary/40 to-secondary/40 z-1"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-end justify-center h-full px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-right"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            חנות בגדים מוביל בישראל
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl">
            חווית לקוח מושלמת בכל ביקור
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out"
          >
            קבע תור עכשיו
          </motion.button>
        </motion.div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-10 left-10 hidden lg:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="h-24 w-24 rounded-full bg-secondary/20 backdrop-blur-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;