import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AB = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
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

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/about.png)' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered Text Content */}
      <div className="relative flex items-center justify-center min-h-screen px-4 z-10">
        <div className="text-center space-y-4 max-w-3xl">
          <motion.h1
            variants={textAnimation}
            initial="hidden"
            animate="visible"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold font-knewave leading-tight"
          >
            Kress: Renyahnya Bikin Nagih!
          </motion.h1>
          <motion.p
            variants={textAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-white text-base sm:text-lg md:text-xl font-poppins opacity-80 leading-relaxed"
          >
            Nikmati kripik singkong Kress dengan tiga varian rasa: Original yang autentik, Keju yang creamy, dan Pedas yang nendang. Camilan lokal berkualitas, siap menemani waktu santai kamu!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AB;