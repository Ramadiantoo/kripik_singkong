import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const slides = [
    {
      image: '/images/kuning.jpeg',
      title: 'KRIPIK',
      discount: 'Potongan 15%',
      description: 'DARI SINGKONG',
    },
    {
      image: '/images/merah.jpeg',
      title: 'KRIPIK INI',
      discount: 'DISKON 20%',
      description: 'DARI SINGKONG',
    },
    {
      image: '/images/ijo.jpeg',
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
    hidden: { opacity: 0, rotate: -180, scale: 0.8 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="relative w-full min-h-screen bg-orange-400 flex items-center justify-center overflow-hidden">
      {/* Konten Utama */}
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between px-4 py-12 md:py-16 z-10">
        {/* Bagian Teks */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-4">
          <motion.h3
            key={slides[currentSlide].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-lg md:text-xl font-light"
          >
            {slides[currentSlide].title}
          </motion.h3>
          <motion.h1
            key={slides[currentSlide].discount}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-bold"
          >
            {slides[currentSlide].discount}
          </motion.h1>
          <motion.p
            key={slides[currentSlide].description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white text-base md:text-lg"
          >
            {slides[currentSlide].description}
          </motion.p>
        </div>

        {/* Bagian Gambar di kiri atas, besar */}
        <motion.div
          key={slides[currentSlide].image}
          variants={imageAnimation}
          initial="hidden"
          animate="visible"
          className="absolute top-0 left-0 z-0 w-[250px] md:w-[350px] lg:w-[450px]"
        >
          <img
            src={slides[currentSlide].image}
            alt="Product"
            className="w-full h-auto object-cover rounded-br-3xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Gelombang Putih */}
      <div className="absolute bottom-0 w-full h-[20%] bg-white">
        <svg
          viewBox="0 0 1440 60"
          className="absolute top-0 w-full h-20 md:h-28 -translate-y-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,60 L1440,60 L1440,20 C1080,45 720,35 360,45 C120,50 0,35 0,20 Z"
          />
        </svg>
      </div>

      {/* Tombol Navigasi Slide */}
      <div className="absolute bottom-8 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
