import React from 'react';
import Intro from '../components/intro';
import Hero from '../components/hero';
import Catalog from '../components/katalog';
import Footer from '../components/foter';

const MainPage = () => {
  return (
    <div className="w-full">
       <Hero />
      <Intro />
      <Catalog />
      <Footer />
    </div>
  );
};

export default MainPage;