import React from 'react';
import Intro from '../components/intro';
import Hero from '../components/hero';
import Catalog from '../components/katalog';
import Rating from '../components/rating';
import Footer from '../components/foter';

const MainPage = () => {
  return (
    <div className="w-full">
      <Hero />
      {/* Bungkus Intro dan Catalog dalam div dengan background image */}
      <div
        className="w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/Patern.jpg')" }}
      >
        {/* Overlay untuk meningkatkan keterbacaan teks */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        {/* Konten dengan z-index lebih tinggi agar tidak tertutup overlay */}
        <div className="relative z-10">
          <Intro />
          <Catalog />
          <Rating />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MainPage;