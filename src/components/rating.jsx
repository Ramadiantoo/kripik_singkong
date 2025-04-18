import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Rating = () => {
  const images = [
    '/Review/satu.jpg',
    '/Review/dua.jpg',
    '/Review/tiga.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation for the scrolling images
  const scrollAnimation = {
    animate: {
      x: ['0%', '-30%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, // Adjust speed of scrolling
          ease: 'linear',
        },
      },
    },
  };

  // Close modal when clicking outside the image
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 text-center"
      >
        Testimoni dan review Orang terhadap Kress
      </motion.h1>

      <div ref={ref} className="w-full overflow-hidden">
        <motion.div
          className="flex"
          variants={scrollAnimation}
          animate="animate"
          style={{ width: `${images.length * 100}%` }}
        >
          {/* Duplicate images to create seamless loop */}
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-2 md:mx-4"
              style={{ width: '400px', height: '350px', md: { width: '650px', height: '550px' } }}
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-3 md:p-4 shadow-lg cursor-pointer">
                <img
                  src={src}
                  alt={`Review ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                  onClick={() => setSelectedImage(src)}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-3xl w-full mx-4">
            <img
              src={selectedImage}
              alt="Enlarged Review"
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/40"
              onClick={handleCloseModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;