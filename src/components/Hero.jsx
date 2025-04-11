import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const slides = [
    {
      image: '/images/kuning.jpeg',
      title: "KRIPIK",
      discount: "Potongan 15%",
      description: "DARI SINGKONG",
    },
    {
      image: '/images/merah.jpeg',
      title: "KRIPIK INI ",
      discount: "DISKON 20% ",
      description: "DARI SINGKONG",
    },
    {
      image: '/images/ijo.jpeg',
      title: "INI KRIPIK",
      discount: "Promo 10%",
      description: "DARI SINGKONG",
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-300 to-orange-500">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-8">
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
            className="text-white text-5xl md:text-7xl lg:text-8xl font-bold"
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

        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <motion.div
            key={slides[currentSlide].image}
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <img
              src={slides[currentSlide].image}
              alt="Product"
              className="w-64 md:w-80 lg:w-96 h-auto object-contain"
            />

          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 flex space-x-2">
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