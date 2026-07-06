import React from 'react';
import { motion } from 'framer-motion';

const SustainabilityPage = () => {
  return (
    <main className="bg-brand-sage/20 min-h-screen text-brand-dark-green">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-green/90 to-brand-dark-green/40"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10 text-white">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-6 block">Our Commitment</span>
            <h1 className="font-serif text-6xl md:text-8xl font-medium mb-8 leading-tight">Nature First.</h1>
            <p className="text-xl font-light text-white/80 leading-relaxed mb-10">
              We believe that great tea shouldn't cost the earth. Discover our commitment to 100% organic farming, plastic-free packaging, and carbon neutrality.
            </p>
            <div className="flex gap-4">
              <div className="px-6 py-2 border border-brand-gold text-brand-gold rounded-full text-sm tracking-widest uppercase">100% Organic</div>
              <div className="px-6 py-2 border border-brand-gold text-brand-gold rounded-full text-sm tracking-widest uppercase">Zero Plastic</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Pillars */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 mx-auto bg-brand-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                <svg className="w-10 h-10 text-brand-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="font-serif text-3xl font-medium mb-4">Carbon Neutral</h3>
              <p className="font-light text-brand-dark-green/70 leading-relaxed">We offset 100% of our carbon footprint from plantation to your cup through localized afforestation projects.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-24 h-24 mx-auto bg-brand-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                <svg className="w-10 h-10 text-brand-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </div>
              <h3 className="font-serif text-3xl font-medium mb-4">Circular Economy</h3>
              <p className="font-light text-brand-dark-green/70 leading-relaxed">Our packaging is 100% compostable and biodegradable. We ensure nothing ends up in a landfill.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-24 h-24 mx-auto bg-brand-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                <svg className="w-10 h-10 text-brand-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="font-serif text-3xl font-medium mb-4">Community First</h3>
              <p className="font-light text-brand-dark-green/70 leading-relaxed">Fair wages, healthcare, and education for all our farmers and their families are non-negotiable pillars.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Image text */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <span className="font-sans font-bold tracking-widest text-xs text-brand-gold uppercase mb-3 block">Organic Farming</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Letting Nature Do The Work.</h2>
              <p className="text-lg font-light text-brand-black/70 leading-relaxed mb-6">
                We rely on natural predators instead of pesticides, and organic compost instead of synthetic fertilizers. By nurturing the soil microbiome, our tea bushes naturally produce richer, more complex flavor profiles.
              </p>
              <p className="text-lg font-light text-brand-black/70 leading-relaxed">
                When you drink Rakura, you are tasting the pure, untainted essence of the Himalayas.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1596547609652-9cb5d8d11c76?q=80&w=1200&auto=format&fit=crop" alt="Organic Tea Leaves" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SustainabilityPage;
