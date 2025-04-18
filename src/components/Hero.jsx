import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const slides = [
    {
      image: '/images/KORI.png',
      background: '/images/bgor.png',
      title: 'KRIPIK ORIGINAL',
      discount: 'Diskon 15%',
      description: 'Kripik singkong asli dengan rasa otentik yang renyah',
      buttonText: 'Pesan Sekarang',
    },
    {
      image: '/images/KKEJU.png',
      background: '/images/bgkj.png',
      title: 'KRIPIK KEJU',
      discount: 'Diskon 20%',
      description: 'Kripik singkong dengan taburan keju lezat',
      buttonText: 'Beli Sekarang',
    },
    {
      image: '/images/KPEDES.png',
      background: '/images/bgpd.png',
      title: 'KRIPIK PEDAS',
      discount: 'Promo 10%',
      description: 'Kripik singkong dengan sensasi pedas menggigit',
      buttonText: 'Order Now',
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
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.8 } },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: 30, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Overlay untuk membuat konten lebih readable */}
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Konten Utama */}
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-12 md:py-16 z-10 min-h-screen">
        {/* Bagian Gambar di Kiri */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start relative">
          <div className="relative w-[250px] md:w-[300px] lg:w-[350px] h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center">
            {/* Lingkaran Dekoratif */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 md:w-72 lg:w-80 h-56 md:h-72 lg:h-80 bg-amber-400/30 rounded-full z-0"></div>
            {/* Gambar Produk */}
            <AnimatePresence>
              <motion.div
                key={slides[currentSlide].image}
                variants={imageAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative z-10"
              >
                <img
                  src={slides[currentSlide].image}
                  alt="Product"
                  className="max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bagian Teks di Kanan */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6 mt-8 lg:mt-0">
          <AnimatePresence>
            <motion.h1
              key={slides[currentSlide].title}
              variants={textAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence>
            <motion.p
              key={slides[currentSlide].discount}
              variants={textAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-amber-300 text-2xl md:text-3xl font-semibold"
            >
              {slides[currentSlide].discount}
            </motion.p>
          </AnimatePresence>
          <AnimatePresence>
            <motion.p
              key={slides[currentSlide].description}
              variants={textAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-white text-base md:text-lg opacity-80 max-w-md mx-auto lg:mx-0"
            >
              {slides[currentSlide].description}
            </motion.p>
          </AnimatePresence>
          {/* Tombol */}
          <AnimatePresence>
            <motion.div
              key={slides[currentSlide].buttonText}
              variants={textAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex justify-center lg:justify-start"
            >
              <button className="bg-amber-400 text-black font-semibold py-3 px-8 rounded-full hover:bg-amber-300 transition duration-300">
                {slides[currentSlide].buttonText}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;