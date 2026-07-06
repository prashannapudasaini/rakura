import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import blackImg from '../assets/black_tea.webp';
import greenImg from '../assets/green_tea.webp';
import orthodoxImg from '../assets/orthodox.webp';
import ctcImg from '../assets/ctc.webp';

const heroProducts = [
  { id: 'black', name: 'Black Tea', image: blackImg, color: 'rgba(17, 17, 17, 0.4)' },
  { id: 'green', name: 'Green Tea', image: greenImg, color: 'rgba(45, 106, 79, 0.4)' },
  { id: 'orthodox', name: 'Orthodox Tea', image: orthodoxImg, color: 'rgba(139, 94, 52, 0.4)' },
  { id: 'ctc', name: 'CTC Tea', image: ctcImg, color: 'rgba(199, 125, 50, 0.4)' },
];

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeProduct = heroProducts[currentIdx];

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-brand-dark-green">
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          onTimeUpdate={(e) => {
            const shouldShow = e.target.currentTime < 8;
            setShowText(prev => prev !== shouldShow ? shouldShow : prev);
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 w-full max-w-7xl mx-auto flex flex-col justify-center items-center h-full">
        <motion.div 
          animate={{ opacity: showText ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center justify-center w-full"
        >
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            Crafting Nepal's <br/> Finest Tea Experiences
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 text-brand-cream/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            From the tea gardens of Nepal to tea lovers around the world.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Link to="/story" className="px-8 py-4 bg-brand-gold text-brand-dark-green font-medium tracking-wide uppercase rounded-full hover:bg-white transition-colors w-full sm:w-auto inline-block text-center">
            Explore Our Story
          </Link>
          <Link to="/products" className="px-8 py-4 border border-white/50 text-white font-medium tracking-wide uppercase rounded-full hover:bg-white hover:text-brand-dark-green transition-colors w-full sm:w-auto inline-block text-center">
            Explore Products
          </Link>
        </motion.div>
      </div>

      {/* Liquid Glass Product Card */}
      <motion.div
        className="absolute bottom-4 left-4 md:bottom-12 md:left-12 z-20 w-40 h-56 md:w-64 md:h-80 rounded-2xl md:rounded-3xl border border-white/20 backdrop-blur-xl bg-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden hidden sm:flex flex-col items-center justify-center p-4 md:p-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 1, 
          delay: 2 
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            className="flex flex-col items-center w-full h-full"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex-1 flex items-center justify-center w-full relative">
              <motion.img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-24 md:h-40 object-contain drop-shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
            </div>
            <div className="mt-2 md:mt-4 text-center">
              <p className="text-white/60 text-[10px] md:text-xs font-mono uppercase tracking-widest mb-1">Featured</p>
              <h3 className="text-white font-serif text-sm md:text-xl">{activeProduct.name}</h3>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Hero;
