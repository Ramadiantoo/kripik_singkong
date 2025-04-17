import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const slides = [
    {
<<<<<<< Updated upstream
      image: '/images/ijo.png',
=======
      image: '/images/Keju.png',
>>>>>>> Stashed changes
      title: 'KRIPIK',
      discount: 'Potongan 15%',
      description: 'DARI SINGKONG',
    },
    {
<<<<<<< Updated upstream
      image: '/images/kuning.png',
=======
      image: '/images/Ori.png',
>>>>>>> Stashed changes
      title: 'KRIPIK INI',
      discount: 'DISKON 20%',
      description: 'DARI SINGKONG',
    },
    {
<<<<<<< Updated upstream
      image: '/images/merah.png',
=======
      image: '/images/Pedas.png',
>>>>>>> Stashed changes
      title: 'INI KRIPIK',
      discount: 'Promo 10%',
      description: 'DARI SINGKONG',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-amber-400 flex items-center justify-center overflow-hidden">
      {/* Konten Utama */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-12 md:py-16 z-10">
        {/* Bagian Gambar di Kiri dengan Lingkaran Hitam Transparan */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start relative">
          {/* Container dengan Dimensi Jelas */}
          <div className="relative w-[200px] md:w-[250px] lg:w-[300px] h-[200px] md:h-[250px] lg:h-[300px] flex items-center justify-center">
            {/* Lingkaran Hitam Transparan (Statis, Tidak Terkena Motion) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-60 lg:w-72 h-48 md:h-60 lg:h-72 bg-black/40 rounded-full z-0"></div>
            {/* Gambar dengan Motion */}
            <motion.div
              key={slides[currentSlide].image}
              variants={imageAnimation}
              initial="hidden"
              animate="visible"
              className="relative z-10"
            >
              <img
                src={slides[currentSlide].image}
                alt="Product"
                className="max-w-[200px] md:max-w-[250px] lg:max-w-[300px] h-auto object-contain z-10 relative"
              />
            </motion.div>
          </div>
        </div>

        {/* Bagian Teks di Kanan */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6 mt-8 lg:mt-0">
          <motion.h1
            key={slides[currentSlide].title + slides[currentSlide].discount}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            {slides[currentSlide].title} <br /> {slides[currentSlide].discount}
          </motion.h1>
          <motion.p
            key={slides[currentSlide].description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-base md:text-lg opacity-80"
          >
            {slides[currentSlide].description}
          </motion.p>
          {/* Tombol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <button className="bg-white text-amber-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
              Beli Sekarang
            </button>
          </motion.div>
        </div>
<<<<<<< Updated upstream
      </div>

      {/* Gelombang Putih */}
      <div className="absolute bottom-0 w-full h-[20%] bg-white">
        <svg
          viewBox="0 0 1440 100"
          className="absolute top-0 w-full h-24 md:h-32 -translate-y-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,100 L1440,100 L1440,40 C1080,80 720,60 360,80 C120,90 0,60 0,40 Z"
          />
        </svg>
=======
>>>>>>> Stashed changes
      </div>

    </div>
  );
};

export default Hero;