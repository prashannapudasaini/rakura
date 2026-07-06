import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Factory = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      
      {/* SECTION 1: Cinematic Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-50">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center grayscale mix-blend-multiply opacity-40"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1581452934444-e209804e1eec?q=80&w=2000&auto=format&fit=crop')",
            y: yParallax
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/80 to-white"></div>
        
        <div className="relative z-10 text-center px-6 mt-20 max-w-5xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-sans font-bold tracking-widest text-sm text-gray-500 uppercase mb-8 block"
          >
            The Apex of Himalayan Manufacturing
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-brand-dark-green leading-tight drop-shadow-sm"
          >
            Precision in Every Leaf.<br/>
            <span className="text-gray-400 font-light italic">Perfection in Every Cup.</span>
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2: The Philosophy */}
      <section className="py-32 bg-white relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 w-full"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative bg-gray-100">
                <img src="https://images.unsplash.com/photo-1558169123-d34e9e03d42b?q=80&w=1200&auto=format&fit=crop" alt="Precision" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-gold/10 mix-blend-color"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <span className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-6 block">Where Tradition Meets Technology</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 text-gray-900 leading-tight">
                Architecting the Future of Tea
              </h2>
              <div className="space-y-6 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  While our terroir and plucking methods remain deeply rooted in century-old traditions, our manufacturing is unapologetically futuristic. 
                </p>
                <p>
                  We have engineered a state-of-the-art facility in Haldibari, Jhapa, designed to bridge the gap between the organic chaos of nature and the exacting standards of global food safety. Here, the romance of the Himalayas is processed with surgical precision.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Scale of Excellence */}
      <section className="py-32 bg-brand-black text-brand-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">The Scale of Excellence</h2>
            <p className="font-light text-xl text-white/60 max-w-2xl mx-auto">Engineered to deliver uncompromising quality at a global scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "Zero", label: "Human Touch", desc: "Fully automated processing lines ensure absolute hygiene from withering to packaging." },
              { value: "5M+", label: "KGs Annually", desc: "Our massive processing capacity is designed to fulfill the demands of the global market." },
              { value: "100%", label: "Traceability", desc: "Every batch can be traced back to the exact garden, elevation, and day it was plucked." }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors"
              >
                <div className="font-serif text-6xl text-brand-gold mb-4">{stat.value}</div>
                <h3 className="font-sans font-bold tracking-widest uppercase text-sm mb-4">{stat.label}</h3>
                <p className="font-light text-white/60 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 & 5: Orthodox vs CTC Processing */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <span className="font-sans font-bold tracking-widest text-sm text-gray-500 uppercase mb-4 block">Manufacturing Capabilities</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900">Mastery Over Method</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Orthodox */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
            >
              <div className="aspect-video bg-gray-200 rounded-2xl mb-8 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1629840428984-27bc8059868c?q=80&w=800&auto=format&fit=crop" alt="Orthodox" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-3xl font-medium mb-4 text-brand-dark-green">Orthodox Processing</h3>
              <p className="font-light text-gray-600 leading-relaxed mb-6">
                Preserving the integrity of the whole leaf. Our orthodox machinery gently rolls and oxidizes the tea to coax out delicate, nuanced flavor profiles—perfect for our premium black and green teas.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div> Complex Flavor Profiles</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div> Whole Leaf Preservation</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div> Traditional Rolling</li>
              </ul>
            </motion.div>

            {/* CTC */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
            >
              <div className="aspect-video bg-gray-200 rounded-2xl mb-8 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1596547609652-9cb5d8d11c76?q=80&w=800&auto=format&fit=crop" alt="CTC" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
              </div>
              <h3 className="font-serif text-3xl font-medium mb-4 text-brand-dark-green">Precision CTC</h3>
              <p className="font-light text-gray-600 leading-relaxed mb-6">
                Engineered for strength. Our Crush, Tear, Curl (CTC) lines operate with micro-millimeter precision, ensuring a perfectly uniform cut for a quicker, stronger infusion ideal for robust blends.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-dark-green"></div> Robust, Strong Infusion</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-dark-green"></div> Uniform Granulation</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-dark-green"></div> High-Speed Automation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6: The Transformation (Vertical Timeline) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 mb-6">The Transformation</h2>
            <p className="font-light text-xl text-gray-500">The meticulous journey from raw leaf to refined tea.</p>
          </div>

          <div className="relative border-l border-gray-200 ml-4 md:ml-1/2 md:-translate-x-1/2">
            {[
              { title: "Withering", desc: "Fresh leaves are climate-controlled to reduce moisture by 70%, becoming pliable." },
              { title: "Rolling & Cutting", desc: "Depending on the method (Orthodox or CTC), leaves are shaped or granulated to release oils." },
              { title: "Oxidation", desc: "Leaves rest in highly controlled humid environments, developing their color and character." },
              { title: "Firing", desc: "High-temperature drying halts oxidation, locking in the flavor profile instantly." },
              { title: "Sorting", desc: "Optical sorters and grading machines perfectly categorize leaves by size and weight." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative pl-8 md:pl-0 py-8 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:-left-px' : 'md:pl-12 md:ml-0 md:left-1/2'}`}
              >
                <div className={`absolute top-10 left-[-5px] md:top-10 w-3 h-3 bg-brand-gold rounded-full ring-4 ring-white ${idx % 2 === 0 ? 'md:left-auto md:-right-[6px]' : 'md:-left-[6px]'}`}></div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <span className="text-brand-gold font-sans font-bold tracking-widest text-xs uppercase mb-2 block">Stage 0{idx + 1}</span>
                  <h3 className="font-serif text-2xl font-medium mb-3 text-gray-900">{step.title}</h3>
                  <p className="font-light text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Uncompromising Quality */}
      <section className="py-32 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2"
            >
              <h2 className="font-serif text-4xl md:text-6xl font-medium mb-8 leading-tight">
                Uncompromising Quality Control.
              </h2>
              <p className="text-xl font-light text-gray-400 leading-relaxed mb-12">
                Our in-house laboratories test every single batch for flavor consistency, moisture content, and chemical residue. We guarantee that the purity of the Himalayas reaches you completely uncompromised.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                 {['ISO 22000', 'HACCP Certified', 'FDA Approved', 'USDA Organic'].map((cert, i) => (
                   <div key={i} className="flex items-center gap-4 border border-gray-700 rounded-xl p-4 bg-gray-800/50">
                     <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                       <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                     </div>
                     <span className="font-sans font-bold tracking-wider text-xs uppercase text-gray-300">{cert}</span>
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <div className="aspect-[4/3] bg-gray-800 rounded-3xl overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1574682782782-96515814594c?q=80&w=1200&auto=format&fit=crop" alt="Laboratory" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 8: The Invitation */}
      <section className="py-40 bg-brand-dark-green text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-medium mb-10"
          >
            Ready to Scale Your Tea Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light text-white/80 mb-12"
          >
            Partner with a world-class manufacturing facility capable of meeting the highest international standards.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/contact" className="inline-block px-12 py-5 bg-brand-gold text-brand-dark-green font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors shadow-2xl hover:shadow-brand-gold/20">
              Request Wholesale Quote
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Factory;
