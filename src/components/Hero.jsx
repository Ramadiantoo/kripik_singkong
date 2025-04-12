import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const slides = [
    { image: '/images/ijo.png' },
    { image: '/images/kuning.png' },
    { image: '/images/merah.png' },
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
    <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gambar Utama */}
      <motion.div
        key={slides[currentSlide].image}
        variants={imageAnimation}
        initial="hidden"
        animate="visible"
        className="w-full h-full flex items-center justify-center"
      >
        <img
          src={slides[currentSlide].image}
          alt="Product"
          className="w-full h-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh] object-contain"
        />
      </motion.div>

      {/* Gelombang Putih di Bawah dengan Overlay */}
      <div className="absolute bottom-0 w-full">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-16 sm:h-20 md:h-24 lg:h-32"
          preserveAspectRatio="none"
        >
          {/* Definisikan pattern untuk background image */}
          <defs>
            <pattern
              id="pattern-hero"
              patternUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                href="/images/Patern.jpg"
                width="1440"
                height="100"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>

          {/* Path Gelombang */}
          <path
            fill="url(#pattern-hero)"
            d="M0,100 L1440,100 L1440,40 C1080,80 720,60 360,80 C120,90 0,60 0,40 Z"
          />

          {/* Overlay pada Path */}
          <path
            fill="rgba(0, 0, 0, 0.5)" // Overlay semi-transparan hanya pada path
            d="M0,100 L1440,100 L1440,40 C1080,80 720,60 360,80 C120,90 0,60 0,40 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;