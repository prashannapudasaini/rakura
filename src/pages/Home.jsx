import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyRakura from '../components/WhyRakura';
import FactoryExperience from '../components/FactoryExperience';
import Products from '../components/Products';
import Sustainability from '../components/Sustainability';
import GlobalExports from '../components/GlobalExports';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <WhyRakura />
      <FactoryExperience />
      <Products />
      <Sustainability />
      <GlobalExports />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
