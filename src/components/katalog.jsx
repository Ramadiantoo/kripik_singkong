import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Catalog = () => {
  const products = [
    {
      image: '/images/Ori.png',
      name: 'Original',
      description: 'Rasa klasik yang renyah dan gurih',
    },
    {
      image: '/images/Pedas.png',
      name: 'Balado',
      description: 'Pedas manis khas Balado',
    },
    {
      image: '/images/Keju.png',
      name: 'Keju',
      description: 'Keju meleleh di setiap gigitan',
    },
  ];

  const [leftProductIndex, setLeftProductIndex] = useState(0);
  const [rightProductIndex, setRightProductIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftProductIndex((prevIndex) => (prevIndex + 1) % products.length);
      setRightProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  const productAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-12 relative">
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <div className="text-center w-full mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Beli Sekarang Dan Pilih Varian Rasamu
          </h1>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center text-center w-full sm:w-1/2 relative">
            <div className="absolute left-0 top-0 h-full w-1/2 bg-red-900 rounded-r-full z-0"></div>
            <motion.div
              key={leftProductIndex}
              variants={productAnimation}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex flex-col items-center"
            >
              <img
                src={products[leftProductIndex].image}
                alt={products[leftProductIndex].name}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain mb-4"
              />
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white mb-2">
                {products[leftProductIndex].name}
              </h3>
              <p className="text-xs sm:text-sm md:text-lg text-white mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="px-6 py-2 bg-yellow-400 text-red-900 font-semibold rounded-full hover:bg-yellow-500 transition duration-300 text-sm md:text-base">
                BELI
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col items-center text-center w-full sm:w-1/2 relative">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-red-900 rounded-l-full z-0"></div>
            <motion.div
              key={rightProductIndex}
              variants={productAnimation}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex flex-col items-center"
            >
              <img
                src={products[rightProductIndex].image}
                alt={products[rightProductIndex].name}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain mb-4"
              />
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white mb-2">
                {products[rightProductIndex].name}
              </h3>
              <p className="text-xs sm:text-sm md:text-lg text-white mb-4">
                Ut adipiscing justo cursus in hac habitasse platea dictumst quisque sagittis.
              </p>
              <button className="px-6 py-2 bg-yellow-400 text-red-900 font-semibold rounded-full hover:bg-yellow-500 transition duration-300 text-sm md:text-base">
                BELI
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;