import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const slides = [
    {
      image: '/images/KORI.png',
      background: '/images/bgor.png',
      title: 'Kress Original',
      // discount: 'Diskon 15%',
      description: 'Renyahnya kripik singkong asli dengan cita rasa alami yang bikin waktu santai makin spesial.',
      buttonText: 'Pesan Sekarang',
    },
    {
      image: '/images/KKEJU.png',
      background: '/images/bgkj.png',
      title: 'Kress Keju',
      // discount: 'Diskon 20%',
      description: 'Kripik singkong dengan lapisan keju creamy yang lumer di mulut, sempurna untuk ngemil kapan saja.',
      buttonText: 'Beli Sekarang',
    },
    {
      image: '/images/KPEDES.png',
      background: '/images/bgpd.png',
      title: 'Kress Pedas',
      discount: 'Promo 10%',
      description: 'Kripik singkong dengan ledakan rasa pedas yang nendang, cocok untuk pecinta tantangan.',
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
      {/* Glassmorphism Header */}
      <header className="fixed top-0 left-0 w-full z-20 bg-white/10 backdrop-blur-md shadow-lg">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo and Kress Text */}
          <div className="flex items-center space-x-3">
            <img
              src="LOGO.png"
              alt="Kress Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-white text-2xl font-bold font-knewave">Kress</span>
          </div>
          {/* Navigation Links */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-white text-lg font-poppins hover:text-amber-300 transition duration-300"
            >
              Beranda
            </Link>
            <Link
              to="/aboutus"
              className="text-white text-lg font-poppins hover:text-amber-300 transition duration-300"
            >
              Tentang Kami
            </Link>
          </nav>
        </div>
      </header>

      {/* Existing Hero Content */}
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
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-12 md:py-16 z-10 min-h-screen pt-20">
        {/* Bagian Gambar di Kiri */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start relative">
          <div className="relative w-[350px] md:w-[400px] lg:w-[500px] h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
            {/* Lingkaran Dekoratif */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 lg:w-[600px] h-72 md:h-96 lg:h-[600px] bg-amber-400/30 rounded-full z-0"></div>
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
                  className="max-w-[280px] md:max-w-[480px] lg:max-w-[500px] h-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bagian Teks di Kanan */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6 mt-8 lg:mt-0 lg:ml-8">
          {/* Headline Produk */}
          <div className="text-white text-xl md:text-2xl lg:text-6xl font-knewave opacity-90 mb-4">
            Cemilan Renyah Teman Setia Waktu Santai, BIKIN NAGIH!
          </div>
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
            <motion.h2
              key={slides[currentSlide].discount}
              variants={textAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-amber-300 text-2xl md:text-3xl font-semibold"
            >
              {slides[currentSlide].discount}
            </motion.h2>
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
              <a
                href={`https://wa.me/6285794304408?text=${encodeURIComponent(`Halo Kress! Saya ingin membeli produk anda.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-14 py-2 bg-yellow-400 text-red-900 font-poppins rounded-full hover:bg-yellow-500 transition duration-300 text-sm md:text-base"
                >
                {slides[currentSlide].buttonText}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;