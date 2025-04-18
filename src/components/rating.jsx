import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Rating = () => {
  const reviews = [
    {
      name: 'ALIF ',
      rating: 5,
      comment: 'MANTAP'
    },
    {
      name: 'DI',
      rating: 5,
      comment: 'Delicious!'
    },
    {
      name: 'IMAM',
      rating: 5,
      comment: 'This is my favorite.'
    }
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const reviewAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.3, ease: 'easeOut' }
    })
  };

  const bgStyles = [
    'bg-[url(/images/review1.jpg)]',
    'bg-white',
    'bg-[url(/images/review3.jpg)]'
  ];

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

      <div ref={ref} className="flex flex-col gap-6 w-full max-w-2xl">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={reviewAnimation}
            initial="hidden"
            animate={controls}
            className={`relative rounded-[40px] px-6 py-8 text-center shadow-xl overflow-hidden ${
              index % 2 === 0 ? 'text-white' : 'text-gray-800'
            } ${index === 1 ? 'bg-white' : 'bg-orange-400'}`}
            style={{
              backgroundImage: index === 0 || index === 2 ? 'url(/images/bg-leaf.jpg)' : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <p className="text-md sm:text-lg mb-4 italic">{review.comment}</p>
            <div className="flex justify-center mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.539 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.236 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
              ))}
            </div>
            <h3 className="text-xl font-semibold">{review.name}</h3>

            {/* Ornamental Bubble */}
            <div className="absolute w-32 h-32 bg-white opacity-40 rounded-full -z-10" style={{ top: '-2rem', left: '-2rem' }} />
            <div className="absolute w-20 h-20 bg-white opacity-30 rounded-full -z-10" style={{ bottom: '-2rem', right: '-1rem' }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
