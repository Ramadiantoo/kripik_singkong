import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Catalog = () => {
  const products = [
    {
      image: '/images/ijo.png',
      name: 'Original',
      description: 'Rasa klasik yang renyah dan gurih',
    },
    {
      image: '/images/kuning.png',
      name: 'Balado',
      description: 'Pedas manis khas Balado',
    },
    {
      image: '/images/merah.png',
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
      {/* Elemen Dekoratif Kiri */}
      <div className="absolute left-0 top-0 h-full w-screen flex items-center z-0">
        <div className="h-64 sm:h-72 md:h-80 w-[40%] sm:w-[35%] md:w-[30%] bg-white rounded-r-full"></div>
      </div>
      {/* Elemen Dekoratif Kanan */}
      <div className="absolute right-0 top-0 h-full w-screen flex items-center justify-end z-0">
        <div className="h-64 sm:h-72 md:h-80 w-[40%] sm:w-[35%] md:w-[30%] bg-white rounded-l-full"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        {/* Teks Tengah - Di atas di mobile, di tengah di non-mobile */}
        <div className="text-center w-full mb-8 relative -top-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Pilih Varian Kripik Singkong Anda
          </h1>
        </div>

        {/* Kontainer untuk Produk - Berdampingan di mobile dan non-mobile */}
        <div className="w-full flex flex-row sm:flex-row justify-between sm:gap-4">
          {/* Sisi Kiri - Produk 1 */}
          <div className="flex flex-col items-center text-center w-1/2 sm:w-1/3 pr-2 sm:pr-0 sm:order-1">
            <motion.div
              key={leftProductIndex}
              variants={productAnimation}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center"
            >
              <img
                src={products[leftProductIndex].image}
                alt={products[leftProductIndex].name}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain mb-4"
              />
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white mb-2">
                {products[leftProductIndex].name}
              </h3>
              <p className="text-xs sm:text-sm md:text-lg text-gray-200 mb-4">
                {products[leftProductIndex].description}
              </p>
              <button className="px-3 py-1 sm:px-4 sm:py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 text-xs sm:text-sm md:text-base">
                Beli Sekarang
              </button>
            </motion.div>
          </div>

          {/* Sisi Kanan - Produk 2 */}
          <div className="flex flex-col items-center text-center w-1/2 sm:w-1/3 pl-2 sm:pl-0 sm:order-3">
            <motion.div
              key={rightProductIndex}
              variants={productAnimation}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center"
            >
              <img
                src={products[rightProductIndex].image}
                alt={products[rightProductIndex].name}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain mb-4"
              />
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white mb-2">
                {products[rightProductIndex].name}
              </h3>
              <p className="text-xs sm:text-sm md:text-lg text-gray-200 mb-4">
                {products[rightProductIndex].description}
              </p>
              <button className="px-3 py-1 sm:px-4 sm:py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 text-xs sm:text-sm md:text-base">
                Beli Sekarang
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;