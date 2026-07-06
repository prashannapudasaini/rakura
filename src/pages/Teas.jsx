import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import blackImg from '../assets/black_tea.webp';
import greenImg from '../assets/green_tea.webp';
import orthodoxImg from '../assets/orthodox.webp';
import ctcImg from '../assets/ctc.webp';
import herbalImg from '../assets/herbal.webp';
import orangeImg from '../assets/orange.webp';

const Teas = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const signatureTeas = [
    {
      id: 'orthodox',
      name: 'Orthodox',
      image: orthodoxImg,
      subtitle: 'The Crown Jewel of the Himalayas',
      desc: 'Meticulously hand-plucked and traditionally rolled. Our orthodox tea offers a complex, multi-layered experience that evolves with every steep.',
      notes: ['Floral', 'Wild Honey', 'Pine'],
      theme: 'bg-[#F7F1E8]',
      textAccent: 'text-[#8B5E34]'
    },
    {
      id: 'black',
      name: 'Premium Black',
      image: blackImg,
      subtitle: 'Robust Elegance',
      desc: 'A full-bodied, brisk infusion characterized by its deep golden liquor and malty richness. The definitive morning luxury.',
      notes: ['Malty', 'Dark Chocolate', 'Earth'],
      theme: 'bg-[#1a1a1a]',
      textAccent: 'text-[#D4AF37]',
      isDark: true
    },
    {
      id: 'green',
      name: 'Organic Green',
      image: greenImg,
      subtitle: 'Purity in a Cup',
      desc: 'Pan-fired immediately after plucking to halt oxidation, preserving its vibrant color, high antioxidants, and fresh, vegetal sweetness.',
      notes: ['Fresh Grass', 'Spring Rain', 'Sweet Kelp'],
      theme: 'bg-[#EAF7EC]',
      textAccent: 'text-[#2D6A4F]'
    }
  ];

  const contemporaryTeas = [
    { id: 'ctc', name: 'CTC Blend', image: ctcImg, desc: 'Bold, quick-infusing strength perfect for chai.', color: 'from-[#C77D32]/20 to-transparent', accent: 'text-[#C77D32]' },
    { id: 'herbal', name: 'Herbal Wellness', image: herbalImg, desc: 'Caffeine-free infusions of Himalayan botanicals.', color: 'from-[#5C946E]/20 to-transparent', accent: 'text-[#5C946E]' },
    { id: 'flavoured', name: 'Modern Flavours', image: orangeImg, desc: 'Contemporary blends with natural fruit and spice.', color: 'from-[#E65100]/20 to-transparent', accent: 'text-[#E65100]' }
  ];

  return (
    <main className="bg-brand-white text-brand-black overflow-hidden">
      
      {/* SECTION 1: Cinematic Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1576092762791-dd9e2220abd4?q=80&w=2000&auto=format&fit=crop')",
            y: yParallax
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-brand-cream"></div>
        
        <div className="relative z-10 text-center px-6 mt-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-6 block"
          >
            The Himalayan Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-tight"
          >
            Masterfully Blended.
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2: The Signature Collection */}
      <section className="py-32 bg-brand-cream relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-32">
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-brand-dark-green mb-6">The Signature Collection</h2>
            <p className="font-light text-xl text-brand-black/60 max-w-2xl mx-auto">Our flagship orthodox and premium blends. Uncompromising quality for the true connoisseur.</p>
          </div>

          <div className="space-y-40">
            {signatureTeas.map((tea, idx) => (
              <div key={tea.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                
                {/* Product Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="lg:w-1/2 w-full relative group cursor-pointer"
                >
                  <div className={`aspect-[4/5] rounded-[3rem] overflow-hidden ${tea.theme} flex items-center justify-center p-12 relative shadow-2xl`}>
                    <motion.img 
                      src={tea.image} 
                      alt={tea.name} 
                      className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    />
                    
                    {/* Hover Tasting Notes */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col items-center justify-center text-white">
                      <span className="font-sans font-bold tracking-widest text-xs uppercase text-brand-gold mb-6">Sensory Profile</span>
                      <div className="flex flex-col gap-4 text-center">
                        {tea.notes.map((note, i) => (
                          <div key={i} className="font-serif text-3xl font-light">{note}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="lg:w-1/2 w-full"
                >
                  <span className={`font-sans font-bold tracking-widest text-xs uppercase mb-4 block ${tea.textAccent}`}>{tea.subtitle}</span>
                  <h3 className="font-serif text-5xl md:text-6xl font-medium mb-8 text-brand-black">{tea.name}</h3>
                  <p className="font-light text-xl text-brand-black/70 leading-relaxed mb-10">
                    {tea.desc}
                  </p>
                  
                  <div className="flex gap-4">
                    <button className={`px-8 py-4 rounded-full font-bold tracking-widest uppercase text-xs border ${tea.isDark ? 'border-brand-black text-brand-black hover:bg-brand-black hover:text-white' : 'border-brand-dark-green text-brand-dark-green hover:bg-brand-dark-green hover:text-white'} transition-colors`}>
                      Explore {tea.name}
                    </button>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: The Contemporary Collection */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 mb-6">The Contemporary Collection</h2>
            <p className="font-light text-xl text-gray-500 max-w-2xl mx-auto">Vibrant, bold, and crafted for the modern lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contemporaryTeas.map((tea, idx) => (
              <motion.div 
                key={tea.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative rounded-3xl overflow-hidden border border-gray-100 group shadow-sm hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${tea.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <div className="aspect-square flex items-center justify-center p-12 relative z-10">
                  <motion.img 
                    src={tea.image} 
                    alt={tea.name} 
                    className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-8 relative z-10 bg-white">
                  <h3 className={`font-serif text-3xl font-medium mb-3 ${tea.accent}`}>{tea.name}</h3>
                  <p className="font-light text-gray-600 leading-relaxed mb-6">{tea.desc}</p>
                  <div className={`font-bold text-xs uppercase tracking-widest ${tea.accent} flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer`}>
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: The Ritual (Brewing Guide) */}
      <section className="py-32 bg-brand-dark-green text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <span className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-6 block">The Ritual</span>
            <h2 className="font-serif text-4xl md:text-6xl font-medium mb-6">The Science of the Perfect Cup</h2>
            <p className="font-light text-xl text-white/70 max-w-2xl mx-auto">Respect the leaf. Proper brewing unlocks the delicate essential oils and true potential of Himalayan tea.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />, title: "Temperature", value: "85°C - 95°C", desc: "Never use boiling water on green or orthodox teas; it scalds the leaves and creates bitterness." },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />, title: "Time", value: "3 - 5 Mins", desc: "Steep precisely. Green teas require less time, while robust blacks need time to unfurl completely." },
              { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />, title: "Ratio", value: "2.5g / 200ml", desc: "A perfectly balanced ratio ensures the liquor is neither too astringent nor too weak." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6 text-brand-gold">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {step.icon}
                  </svg>
                </div>
                <h3 className="font-serif text-2xl mb-2">{step.title}</h3>
                <div className="font-bold font-sans tracking-widest text-brand-gold mb-4">{step.value}</div>
                <p className="font-light text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: The Invitation */}
      <section className="py-40 bg-brand-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-green/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-medium mb-10"
          >
            Curate Your Collection.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light text-white/80 mb-12"
          >
            Looking to serve world-class Himalayan tea in your hotel, restaurant, or boutique?
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/contact" className="inline-block px-12 py-5 bg-brand-gold text-brand-dark-green font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors shadow-2xl hover:shadow-brand-gold/20">
              Request Wholesale Catalog
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Teas;
