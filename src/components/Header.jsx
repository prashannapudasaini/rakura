import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import logoImg from '../assets/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use dark header if we've scrolled down, or if we are not on the home page 
  // (since other pages might have light backgrounds at the top).
  // Actually, wait, let's keep it based on scroll or if they want it dark by default on other pages.
  const isDarkHeader = scrolled || location.pathname !== '/';

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center ${
        isDarkHeader ? 'bg-brand-white/90 backdrop-blur-md shadow-sm py-4 text-brand-black' : 'bg-transparent text-brand-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <Link to="/" className="flex items-center">
        <img src={logoImg} alt="Rakura" className="h-8 md:h-10 object-contain" />
      </Link>
      
      <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
        <Link to="/story" className="hover:text-brand-gold transition-colors cursor-pointer">Our Story</Link>
        <Link to="/factory" className="hover:text-brand-gold transition-colors cursor-pointer">Factory</Link>
        <Link to="/teas" className="hover:text-brand-gold transition-colors cursor-pointer">Teas</Link>
        <Link to="/sustainability" className="hover:text-brand-gold transition-colors cursor-pointer">Sustainability</Link>
        <Link to="/contact" className="hover:text-brand-gold transition-colors cursor-pointer">Contact</Link>
      </nav>

      <Link to="/teas" className={`px-6 py-2 border rounded-full text-sm font-medium tracking-wide uppercase transition-colors cursor-pointer ${
        isDarkHeader ? 'border-brand-dark-green text-brand-dark-green hover:bg-brand-dark-green hover:text-white' : 'border-white text-white hover:bg-white hover:text-brand-dark-green'
      }`}>
        Explore Products
      </Link>
    </motion.header>
  );
};

export default Header;
