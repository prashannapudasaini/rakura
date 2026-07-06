import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import blackImg from '../assets/black_tea.webp';
import greenImg from '../assets/green_tea.webp';
import orthodoxImg from '../assets/orthodox.webp';
import ctcImg from '../assets/ctc.webp';
import herbalImg from '../assets/herbal.webp';
import orangeImg from '../assets/orange.webp';

const productCategories = [
  { id: 'black', name: 'Black Tea', image: blackImg, theme: 'bg-[#111111]', accent: 'text-[#D4AF37]', border: 'border-[#D4AF37]', desc: 'Luxury + Strength. Premium Executive.' },
  { id: 'green', name: 'Green Tea', image: greenImg, theme: 'bg-[#EAF7EC]', accent: 'text-[#2D6A4F]', border: 'border-[#2D6A4F]', desc: 'Fresh + Wellness. Nature + Health.' },
  { id: 'orthodox', name: 'Orthodox Tea', image: orthodoxImg, theme: 'bg-[#F7F1E8]', accent: 'text-[#8B5E34]', border: 'border-[#8B5E34]', desc: 'Traditional Luxury. Heritage.' },
  { id: 'ctc', name: 'CTC Tea', image: ctcImg, theme: 'bg-[#24180F]', accent: 'text-[#C77D32]', border: 'border-[#C77D32]', desc: 'Bold Energy. Strong Daily Tea.' },
  { id: 'herbal', name: 'Herbal Tea', image: herbalImg, theme: 'bg-[#EEF8F0]', accent: 'text-[#5C946E]', border: 'border-[#5C946E]', desc: 'Wellness. Relaxation.' },
  { id: 'flavoured', name: 'Flavoured Tea', image: orangeImg, theme: 'bg-[#FFF3E0]', accent: 'text-[#E65100]', border: 'border-[#E65100]', desc: 'Modern Lifestyle. Contemporary.' },
];

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(productCategories[0]);

  return (
    <motion.section
      id="products"
      className="py-32 min-h-screen transition-colors duration-1000 relative overflow-hidden"
      animate={{ backgroundColor: activeProduct.theme.replace('bg-[', '').replace(']', '') }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          className={`font-serif text-5xl font-medium mb-16 transition-colors duration-1000 ${activeProduct.id === 'green' || activeProduct.id === 'orthodox' || activeProduct.id === 'herbal' || activeProduct.id === 'flavoured' ? 'text-brand-dark-green' : 'text-brand-gold'}`}
        >
          Our Teas
        </motion.h2>

        <div className="flex justify-center gap-4 flex-wrap mb-16">
          {productCategories.map(cat => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveProduct(cat)}
              onClick={() => setActiveProduct(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-500 font-medium uppercase tracking-wider text-sm
                ${activeProduct.id === cat.id ? `${cat.theme} ${cat.accent} ${cat.border} shadow-lg scale-105` : 'border-black/20 text-black/50 hover:border-black/50'}
                ${(activeProduct.id === 'black' || activeProduct.id === 'ctc') && activeProduct.id !== cat.id ? 'border-white/20 text-white/50 hover:border-white/50' : ''}
              `}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`h-[70vh] rounded-3xl flex flex-col items-center justify-center p-12 relative overflow-hidden shadow-2xl ${activeProduct.id === 'green' || activeProduct.id === 'orthodox' || activeProduct.id === 'herbal' || activeProduct.id === 'flavoured' ? 'bg-white/40' : 'bg-black/40'} backdrop-blur-xl border border-white/20`}
          >
            <motion.img
              src={activeProduct.image}
              alt={activeProduct.name}
              className="h-64 object-contain mb-8 drop-shadow-2xl"
              animate={{ y: [0, -15, 0], rotateY: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />

            <h3 className={`font-serif text-4xl mb-4 ${activeProduct.accent}`}>{activeProduct.name}</h3>
            <p className={`text-xl font-light max-w-md ${activeProduct.id === 'green' || activeProduct.id === 'orthodox' || activeProduct.id === 'herbal' || activeProduct.id === 'flavoured' ? 'text-black/70' : 'text-white/70'}`}>
              {activeProduct.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Products;


