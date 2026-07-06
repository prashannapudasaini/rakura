import React from 'react';
import { motion } from 'framer-motion';

import blackImg from '../assets/black_tea.webp';
import greenImg from '../assets/green_tea.webp';
import orthodoxImg from '../assets/orthodox.webp';
import ctcImg from '../assets/ctc.webp';
import herbalImg from '../assets/herbal.webp';
import orangeImg from '../assets/orange.webp';

const productCategories = [
  { id: 'black', name: 'Black Tea', image: blackImg, theme: 'bg-[#1a1a1a]', accent: 'text-[#D4AF37]', border: 'border-[#D4AF37]', desc: 'Luxury + Strength. Premium Executive.' },
  { id: 'green', name: 'Green Tea', image: greenImg, theme: 'bg-[#EAF7EC]', accent: 'text-[#2D6A4F]', border: 'border-[#2D6A4F]', desc: 'Fresh + Wellness. Nature + Health.' },
  { id: 'orthodox', name: 'Orthodox Tea', image: orthodoxImg, theme: 'bg-[#F7F1E8]', accent: 'text-[#8B5E34]', border: 'border-[#8B5E34]', desc: 'Traditional Luxury. Heritage.' },
  { id: 'ctc', name: 'CTC Tea', image: ctcImg, theme: 'bg-[#2a1d13]', accent: 'text-[#C77D32]', border: 'border-[#C77D32]', desc: 'Bold Energy. Strong Daily Tea.' },
  { id: 'herbal', name: 'Herbal Tea', image: herbalImg, theme: 'bg-[#EEF8F0]', accent: 'text-[#5C946E]', border: 'border-[#5C946E]', desc: 'Wellness. Relaxation.' },
  { id: 'flavoured', name: 'Flavoured Tea', image: orangeImg, theme: 'bg-[#FFF3E0]', accent: 'text-[#E65100]', border: 'border-[#E65100]', desc: 'Modern Lifestyle. Contemporary.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const Teas = () => {
  return (
    <main className="bg-brand-cream pt-24 min-h-screen">
      <section className="py-24 text-brand-dark-green text-center px-6">
        <motion.span 
          className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-4 block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Collection
        </motion.span>
        <motion.h1 
          className="font-serif text-5xl md:text-7xl font-medium mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the Finest Brews
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl font-light max-w-3xl mx-auto text-brand-dark-green/80 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover a curated selection of our finest Himalayan teas. Hand-picked and masterfully blended to bring out authentic flavors for every tea lover.
        </motion.p>
      </section>
      
      <section className="pb-32 bg-brand-cream relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sage/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {productCategories.map((product) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                whileHover={{ y: -15 }}
                className={`relative h-[450px] rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-end overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}
              >
                {/* Dynamic Background */}
                <div className={`absolute inset-0 ${product.theme} opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100`}></div>
                
                {/* Product Image with continuous floating animation */}
                <div className="absolute inset-0 flex items-start justify-center pt-12 md:pt-16 z-10">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="h-44 md:h-52 object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 4 + Math.random() * 2, ease: "easeInOut" }}
                  />
                </div>

                {/* Glassmorphism content overlay */}
                <div className={`relative z-20 backdrop-blur-xl border rounded-3xl p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ${product.id === 'black' || product.id === 'ctc' ? 'bg-white/10 border-white/20' : 'bg-white/40 border-white/50'}`}>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className={`font-serif text-2xl md:text-3xl font-medium ${product.id === 'black' || product.id === 'ctc' ? 'text-white' : 'text-brand-dark-green'}`}>
                      {product.name}
                    </h3>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 ${product.id === 'black' || product.id === 'ctc' ? 'border-white/30 text-white group-hover:bg-white group-hover:text-black' : 'border-brand-dark-green/20 text-brand-dark-green group-hover:bg-brand-dark-green group-hover:text-white'}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                  </div>
                  <p className={`font-light text-sm md:text-base leading-relaxed ${product.id === 'black' || product.id === 'ctc' ? 'text-white/70' : 'text-brand-black/70'}`}>
                    {product.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Teas;
