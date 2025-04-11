import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const katalog = () => {
  // Data produk kripik singkong
  const products = [
    {
      image: '/images/kuning.jpeg',
      name: 'Original',
      description: 'Rasa klasik yang renyah dan gurih',
    },
    {
      image: '/images/merah.jpeg',
      name: 'Balado',
      description: 'Pedas manis khas Balado',
    },
    {
      image: '/images/ijo.jpeg',
      name: 'Keju',
      description: 'Keju meleleh di setiap gigitan',
    },
  ];

  // State untuk mengatur produk yang ditampilkan di sisi kiri dan kanan
  const [leftProductIndex, setLeftProductIndex] = useState(0);
  const [rightProductIndex, setRightProductIndex] = useState(1);

  // Efek untuk mengganti produk setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setLeftProductIndex((prevIndex) => (prevIndex + 1) % products.length);
      setRightProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000); // Ganti setiap 5 detik
    return () => clearInterval(interval);
  }, [products.length]);

  // Animasi untuk produk
  const productAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-green-100 py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Sisi Kiri - Produk 1 */}
        <motion.div
          key={leftProductIndex}
          variants={productAnimation}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center w-full lg:w-1/3 mb-8 lg:mb-0"
        >
          <img
            src={products[leftProductIndex].image}
            alt={products[leftProductIndex].name}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain mb-4"
          />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            {products[leftProductIndex].name}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
            {products[leftProductIndex].description}
          </p>
          <button className="px-4 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 text-sm sm:text-base">
            Beli Sekarang
          </button>
        </motion.div>

        {/* Teks Tengah */}
        <div className="text-center w-full lg:w-1/3 mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Pilih Varian Kripik Singkong Anda
          </h1>
        </div>

        {/* Sisi Kanan - Produk 2 */}
        <motion.div
          key={rightProductIndex}
          variants={productAnimation}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center w-full lg:w-1/3"
        >
          <img
            src={products[rightProductIndex].image}
            alt={products[rightProductIndex].name}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain mb-4"
          />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            {products[rightProductIndex].name}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
            {products[rightProductIndex].description}
          </p>
          <button className="px-4 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 text-sm sm:text-base">
            Beli Sekarang
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default katalog;