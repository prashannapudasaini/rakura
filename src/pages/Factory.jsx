import React from 'react';
import { motion } from 'framer-motion';

const Factory = () => {
  return (
    <main className="bg-brand-black pt-24 min-h-screen text-brand-white">
      {/* Factory Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-dark-green/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <motion.span 
            className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-6 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Innovation Meets Tradition
          </motion.span>
          <motion.h1 
            className="font-serif text-5xl md:text-7xl font-medium mb-8 text-brand-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            State-of-the-Art Processing
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl font-light max-w-3xl mx-auto text-brand-white/70 leading-relaxed mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Step into our modern facilities where cutting-edge technology and century-old orthodox methods intertwine to preserve the delicate flavor profiles of Himalayan tea.
          </motion.p>
        </div>

        {/* Bento Box Layout */}
        <div className="container mx-auto max-w-6xl pb-24">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Box 1: Large Image */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group aspect-square md:aspect-auto min-h-[400px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629840428984-27bc8059868c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <h3 className="font-serif text-3xl md:text-4xl font-medium mb-3">The Orthodox Method</h3>
                <p className="font-light text-white/80 max-w-md">Preserving the integrity of the whole leaf through traditional rolling and controlled oxidation.</p>
              </div>
            </div>

            {/* Box 2: Stat */}
            <div className="bg-brand-white/5 backdrop-blur-md border border-brand-white/10 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center group hover:bg-brand-white/10 transition-colors">
              <span className="font-serif text-6xl text-brand-gold mb-2 group-hover:scale-110 transition-transform duration-300">5M+</span>
              <span className="font-sans text-sm tracking-widest uppercase text-brand-white/60">KGs Processed Annually</span>
            </div>

            {/* Box 3: Detail */}
            <div className="bg-brand-dark-green rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558169123-d34e9e03d42b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <h3 className="font-serif text-2xl font-medium mb-3 text-white">Quality Control</h3>
                <p className="font-light text-white/70 text-sm leading-relaxed">Every batch undergoes rigorous lab testing to ensure zero chemical residue and perfect flavor consistency.</p>
              </div>
            </div>

            {/* Box 4: Wide feature */}
            <div className="md:col-span-3 bg-brand-cream text-brand-black rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 group">
              <div className="md:w-1/2">
                <span className="font-sans font-bold tracking-widest text-xs text-brand-gold uppercase mb-3 block">Technology</span>
                <h3 className="font-serif text-4xl font-medium mb-4">Precision CTC Manufacturing</h3>
                <p className="font-light text-brand-black/70 leading-relaxed mb-6">
                  For our robust blends, our state-of-the-art Crush, Tear, Curl (CTC) machines ensure a uniform cut, allowing for a quicker, stronger infusion perfectly suited for milk teas and spiced chais.
                </p>
                <div className="text-brand-dark-green font-medium uppercase tracking-wider text-sm flex items-center gap-2 cursor-pointer group-hover:gap-4 transition-all">
                  Explore Processing
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
              <div className="md:w-1/2 w-full aspect-video rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581452934444-e209804e1eec?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="py-24 bg-brand-white text-brand-black w-[100vw] relative left-1/2 -translate-x-1/2 -mb-24">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <span className="font-sans font-bold tracking-widest text-xs text-brand-gold uppercase mb-3 block">Our Process</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-brand-dark-green">From Leaf to Cup</h2>
              <p className="text-lg font-light text-brand-black/70 max-w-2xl mx-auto">
                Discover the meticulous steps we take to transform freshly plucked green leaves into the world's finest tea.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Withering", desc: "Freshly plucked leaves are spread out in climate-controlled troughs to reduce moisture content by up to 70%, making them pliable for rolling." },
                { step: "02", title: "Rolling", desc: "The withered leaves are gently rolled in traditional orthodox rollers to break their cell walls, releasing the natural essential oils." },
                { step: "03", title: "Oxidation", desc: "The rolled leaves are spread in cool, humid rooms where they absorb oxygen, turning from green to copper and developing their complex flavors." },
                { step: "04", title: "Firing", desc: "Finally, the leaves are passed through hot air dryers to halt oxidation, sealing in the flavor and extending their shelf life." }
              ].map((item, index) => (
                <motion.div 
                  key={item.step}
                  className="bg-brand-cream p-8 rounded-[2rem] hover:-translate-y-4 transition-transform duration-500 shadow-sm hover:shadow-xl relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <span className="absolute -top-4 -right-4 text-8xl font-serif text-brand-gold/10 font-bold group-hover:text-brand-gold/20 transition-colors">{item.step}</span>
                  <h3 className="font-serif text-2xl font-medium mb-4 text-brand-dark-green relative z-10">{item.title}</h3>
                  <p className="font-light text-brand-black/70 leading-relaxed text-sm relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Factory;
