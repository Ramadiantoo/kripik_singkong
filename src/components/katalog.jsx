import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Catalog = () => {
  const products = [
    {
      image: '/images/brw.png',
      name: 'Rasa Original - Cita Rasa Alami',
      description: 'Renyah, alami, dan bikin santai makin berarti. Camilan jujur tanpa drama.',
      price: 'Rp10.000',
    },
    {
      image: '/images/red.png',
      name: 'Rasa Pedas - Untuk Pecinta Tantangan',
      description: 'Ledakan pedas di tiap gigitan. Buat yang berani, ini camilan lo!',
      price: 'Rp12.000',
    },
    {
      image: '/images/ylw.png',
      name: 'Rasa Keju - Creamy dan Lumer',
      description: 'Singkong renyah ketemu keju lumer—ngemil jadi makin dreamy!',
      price: 'Rp13.000',
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
      <div className="w-full px-0 flex flex-col items-center relative z-10">
        <div className="text-center w-full mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Beli Sekarang Dan Pilih Varian Rasamu
          </h1>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left Product */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/2 relative">
            <div className="absolute left-0 top-1/2 h-4/5 w-4/5 backdrop-blur-md bg-black/30 shadow-sm rounded-r-full z-0 -translate-y-1/2"></div>
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
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain mb-0"
              />
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white mb-0">
                {products[leftProductIndex].name}
              </h3>
              <h2 className="text-sm sm:text-base md:text-3xl font-bold text-red-700 mb-1">
                {products[leftProductIndex].price}
              </h2>
              <p className="text-xs sm:text-sm md:text-lg text-white mb-2 max-w-md px-6">
                {products[leftProductIndex].description}
              </p>
              <a
                href={`https://wa.me/6285794304408?text=${encodeURIComponent(`Halo Kress! Saya ingin membeli ${products[leftProductIndex].name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-14 py-2 bg-yellow-400 text-red-900 font-poppins rounded-full hover:bg-yellow-500 transition duration-300 text-sm md:text-base"
                >
                BELI
              </a>
            </motion.div>
          </div>

          {/* Right Product */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/2 relative">
            <div className="absolute right-0 top-1/2 h-4/5 w-4/5 backdrop-blur-md bg-black/30 shadow-sm rounded-l-full z-0 -translate-y-1/2"></div>
            <motion.div
              key={rightProductIndex}
              variants={productAnimation}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex flex-col items-center text-center"
            >
              <img
                src={products[rightProductIndex].image}
                alt={products[rightProductIndex].name}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain mb-0"
              />
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white mb-0">
                {products[rightProductIndex].name}
              </h3>
              <h2 className="text-sm sm:text-base md:text-3xl font-bold text-red-700 mb-1">
                {products[rightProductIndex].price}
              </h2>
              <p className="text-xs sm:text-sm md:text-lg text-white mb-2 max-w-md px-6">
                {products[rightProductIndex].description}
              </p>
              <a
               href={`https://wa.me/6285794304408?text=${encodeURIComponent(`Halo Kress! Saya ingin membeli ${products[rightProductIndex].name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-14 py-2 bg-yellow-400 text-red-900 font-poppins rounded-full hover:bg-yellow-500 transition duration-300 text-sm md:text-base">
                BELI
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
