import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Story = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <main className="bg-brand-white text-brand-black overflow-hidden">
      
      {/* SECTION 1: Cinematic Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')",
            y: yParallax
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-dark-green/90"></div>
        
        <div className="relative z-10 text-center px-6 mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-tight drop-shadow-2xl"
          >
            Rooted in the Himalayas.<br/>
            <span className="italic font-light opacity-90">Crafted for the World.</span>
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2: The Origin Story */}
      <section className="py-32 md:py-48 bg-brand-cream relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="lg:w-5/12 w-full"
            >
              <div className="aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1594910243452-1a48c1eb4196?q=80&w=1200&auto=format&fit=crop" alt="Rakura Heritage" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-7/12 w-full"
            >
              <span className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-6 block">A Vision Born in the Clouds</span>
              <h2 className="font-serif text-4xl md:text-6xl font-medium mb-8 text-brand-dark-green leading-tight">
                Pioneering Nepalese Tea Since 1973
              </h2>
              <div className="space-y-6 text-lg md:text-xl font-light text-brand-black/70 leading-relaxed">
                <p>
                  Our journey began with a singular, audacious belief: that the high-altitude, mist-shrouded valleys of Nepal could produce the finest tea on Earth.
                </p>
                <p>
                  Before Rakura, the true potential of Himalayan tea was a well-kept secret. We set out to change that, marrying century-old orthodox traditions with an unrelenting pursuit of perfection. Today, that legacy is poured into every cup.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-brand-black/10">
                <p className="font-serif text-2xl italic text-brand-black/50">"Generations of knowledge in every hand."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Terroir */}
      <section className="relative py-48 overflow-hidden bg-brand-dark-green text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1596547609652-9cb5d8d11c76?q=80&w=2000&auto=format&fit=crop" alt="Tea Garden" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <span className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-6 block">The Terroir</span>
            <h2 className="font-serif text-5xl md:text-7xl font-medium mb-10 leading-tight">The Land That Shapes Every Leaf</h2>
            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed">
              Elevations exceeding 6,000 feet. Crisp mountain air. Mineral-rich earth. The extreme Himalayan climate forces the tea bush to grow slowly, concentrating essential oils and yielding a complex, vibrant flavor profile found nowhere else in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: From Garden to Global Cup */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-medium text-brand-dark-green mb-6">From Garden to Global Cup</h2>
            <p className="font-light text-xl text-brand-black/60 max-w-2xl mx-auto">A meticulous journey of craftsmanship, preserving the soul of the leaf.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Two Leaves & A Bud", desc: "Hand-plucked at dawn by expert artisans to ensure only the tenderest leaves are selected." },
              { title: "Orthodox Withering", desc: "Gently air-dried to perfection, concentrating natural aromas and preparing the leaf for rolling." },
              { title: "Master Blending", desc: "Generational tea masters balance aroma, body, and taste into perfect harmony." },
              { title: "Luxury Packaging", desc: "Sealed in zero-oxygen environments to lock in freshness for its journey across the globe." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 bg-brand-cream/30 rounded-3xl border border-brand-black/5 hover:bg-brand-cream transition-colors duration-300"
              >
                <div className="text-brand-gold font-serif text-6xl opacity-30 mb-6">0{idx + 1}</div>
                <h3 className="font-serif text-2xl font-medium mb-4">{step.title}</h3>
                <p className="font-light text-brand-black/70">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: The Artisans */}
      <section className="py-32 bg-brand-black text-brand-cream overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-medium mb-6">Meet the Masters</h2>
            <p className="font-light text-xl text-brand-cream/60 max-w-2xl mx-auto">The soul of Rakura lies in the hands of our people.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sita Rai", role: "Master Plucker", quote: "I know a good leaf just by the way it feels between my fingers.", img: "https://images.unsplash.com/photo-1532454174312-30cbbaaf12d9?q=80&w=800&auto=format&fit=crop" },
              { name: "Ramesh Gurung", role: "Tea Taster", quote: "Every batch tells a story of the soil, the rain, and the sun.", img: "https://images.unsplash.com/photo-1541706697486-53d9f2a96996?q=80&w=800&auto=format&fit=crop" },
              { name: "Anita Tamang", role: "Quality Control", quote: "Perfection is not an accident; it is a rigorous habit.", img: "https://images.unsplash.com/photo-1517627043994-b991cb62fdf4?q=80&w=800&auto=format&fit=crop" }
            ].map((person, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative group aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-3xl mb-1 text-white">{person.name}</h3>
                  <p className="text-brand-gold font-sans uppercase tracking-widest text-xs mb-4">{person.role}</p>
                  <p className="font-light text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">"{person.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: World-Class Factory */}
      <section className="py-32 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 w-full"
            >
              <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1581452934444-e209804e1eec?q=80&w=1200&auto=format&fit=crop" alt="Modern Factory" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
                <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 w-full space-y-6"
            >
              <span className="font-sans font-bold tracking-widest text-sm text-gray-500 uppercase block">Infrastructure</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
                World-Class Precision.<br/>International Standards.
              </h2>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                Our state-of-the-art facility in Nepal represents the pinnacle of modern tea manufacturing. Designed for absolute hygiene and precision, we utilize automated, zero-human-touch processing and packaging lines.
              </p>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                Fully compliant with global food safety standards, our factory guarantees that the purity of the Himalayas reaches you completely uncompromised.
              </p>
              
              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="border-l-2 border-brand-gold pl-4 py-1"><div className="font-bold text-gray-900">Zero</div><div className="text-xs uppercase text-gray-500">Human Touch</div></div>
                <div className="border-l-2 border-brand-gold pl-4 py-1"><div className="font-bold text-gray-900">ISO 22000</div><div className="text-xs uppercase text-gray-500">Certified</div></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Sustainability & Impact */}
      <section className="py-40 bg-brand-dark-green text-white relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl font-medium mb-16"
          >
            A Commitment to the Earth
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { value: "100%", label: "Organic Farming", desc: "No synthetic pesticides or fertilizers, ever." },
              { value: "50k+", label: "Trees Planted", desc: "Reforestation programs to protect local biodiversity." },
              { value: "10k+", label: "Farmers Empowered", desc: "Fair trade practices and community investment." }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="font-serif text-6xl text-brand-gold mb-4">{stat.value}</div>
                <h3 className="font-bold text-xl mb-2">{stat.label}</h3>
                <p className="font-light text-white/60 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 & 9: Global Reach & Recognition */}
      <section className="py-32 bg-brand-cream text-brand-black">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-6 block"
          >
            Global Presence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl font-medium mb-20"
          >
            Exporting Excellence Worldwide
          </motion.h2>
          
          <div className="mb-24 relative h-64 md:h-96 w-full flex items-center justify-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-center bg-no-repeat opacity-40">
            {/* Map Placeholder for actual interactive dots */}
            <div className="absolute text-brand-dark-green font-bold text-xl">Serving Connoisseurs in 15+ Countries</div>
          </div>

          <div className="pt-16 border-t border-brand-black/10">
             <h3 className="font-sans text-sm tracking-widest text-brand-black/40 uppercase font-bold mb-10">Trusted & Certified By</h3>
             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {['ISO 9001:2015', 'USDA Organic', 'EU Organic', 'HACCP Certified', 'FDA Approved'].map((cert, i) => (
                 <div key={i} className="flex items-center justify-center h-16 px-6 border-2 border-brand-black/20 rounded-xl font-serif text-xl text-brand-black/80 hover:border-brand-gold hover:text-brand-dark-green transition-colors cursor-default">
                   {cert}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 & 11: The Future & The Invitation */}
      <section className="relative py-48 bg-black text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1541706697486-53d9f2a96996?q=80&w=2000&auto=format&fit=crop" alt="Closing Tea" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-green/90 via-brand-dark-green/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl md:text-7xl font-medium mb-10 leading-tight"
          >
            Taste the Himalayan Legacy.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <a href="/teas" className="px-10 py-4 bg-brand-gold text-brand-dark-green font-medium tracking-wide uppercase rounded-full hover:bg-white transition-colors">
              Explore Our Blends
            </a>
            <a href="/contact" className="px-10 py-4 border border-white/50 text-white font-medium tracking-wide uppercase rounded-full hover:bg-white hover:text-brand-dark-green transition-colors">
              Become a Global Partner
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Story;
