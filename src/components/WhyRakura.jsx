import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Settings, Award, Sprout, Sparkles, Globe } from 'lucide-react';

const features = [
  { title: 'Premium Tea Leaves', icon: <Leaf className="w-8 h-8 text-brand-dark-green" strokeWidth={1.5} />, desc: 'Hand-plucked from high-altitude gardens where misty mornings and rich soil create the perfect terroir for exceptional tea.' },
  { title: 'State-of-the-Art Processing', icon: <Settings className="w-8 h-8 text-brand-dark-green" strokeWidth={1.5} />, desc: 'Combining century-old orthodox methods with cutting-edge technology to preserve delicate flavor profiles.' },
  { title: 'Export Quality Standards', icon: <Award className="w-8 h-8 text-brand-dark-green" strokeWidth={1.5} />, desc: 'Rigorous multi-stage quality control ensuring every batch meets the highest international luxury standards.' },
  { title: 'Sustainable Farming', icon: <Sprout className="w-8 h-8 text-brand-dark-green" strokeWidth={1.5} />, desc: '100% organic practices that enrich the earth, protect local wildlife, and support our community of farmers.' },
  { title: 'Master Blending', icon: <Sparkles className="w-8 h-8 text-brand-dark-green" strokeWidth={1.5} />, desc: 'Crafted by generational tea masters who balance aroma, body, and taste into perfect harmony.' },
  { title: 'Global Distribution', icon: <Globe className="w-8 h-8 text-brand-dark-green" strokeWidth={1.5} />, desc: 'Delivering the authentic taste of Nepal to luxury hotels, fine dining, and connoisseurs worldwide.' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const WhyRakura = () => {
  return (
    <section id="why-rakura" className="py-40 bg-brand-white text-brand-black relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl font-medium mb-6 text-brand-dark-green"
          >
            The Rakura Distinction
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light text-brand-black/60 max-w-2xl mx-auto"
          >
            What makes our tea world-class? It's our unwavering commitment to quality at every step of the journey.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-10 border border-brand-black/5 rounded-3xl bg-brand-cream/40 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-sage/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4 group-hover:text-brand-dark-green transition-colors">{feature.title}</h3>
              <p className="text-brand-black/60 font-light leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 pt-16 border-t border-brand-black/10 text-center"
        >
          <h3 className="font-sans text-sm tracking-widest text-brand-black/40 uppercase font-bold mb-10">Internationally Certified & Recognized</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['ISO 9001:2015', 'USDA Organic', 'EU Organic', 'HACCP Certified', 'FDA Approved'].map((cert, i) => (
              <div key={i} className="flex items-center justify-center h-16 px-6 border-2 border-brand-black/20 rounded-xl font-serif text-xl text-brand-black/80 hover:border-brand-gold hover:text-brand-dark-green transition-colors cursor-default">
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyRakura;
