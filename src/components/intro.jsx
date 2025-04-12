import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Intro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div ref={ref} className="text-center px-4 py-8 space-y-4 max-w-3xl mx-auto">
        <motion.h1
          variants={textAnimation}
          initial="hidden"
          animate={controls}
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        >
          Selamat Datang di Kripik Singkong Jogja!
        </motion.h1>
        <motion.p
          variants={textAnimation}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.2 }}
          className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
        >
          Kami hadir dengan kripik singkong khas Jogja yang renyah dan lezat. Tersedia dalam 3 varian rasa enak: <br />
          <span className="font-semibold">Original, Balado, dan Keju</span>.
        </motion.p>
        <motion.p
          variants={textAnimation}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.4 }}
          className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
        >
          Dapatkan Diskon 15% untuk Pembelian Pertama!
        </motion.p>
        <motion.button
          variants={textAnimation}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.6 }}
          className="mt-4 px-6 py-3 bg-white text-orange-500 font-semibold rounded-full hover:bg-orange-100 transition duration-300 text-sm sm:text-base md:text-lg"
        >
          Pesan Sekarang
        </motion.button>
      </div>
    </div>
  );
};

export default Intro;