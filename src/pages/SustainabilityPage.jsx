import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SustainabilityPage = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <main className="bg-brand-sage/10 text-brand-dark-green overflow-hidden">
      
      {/* SECTION 1: Cinematic Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark-green">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')",
            y: yParallax
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-green/60 via-transparent to-brand-sage/10"></div>
        
        <div className="relative z-10 text-center px-6 mt-20 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-white leading-tight drop-shadow-2xl"
          >
            Nature First.<br/>
            <span className="italic font-light opacity-90 text-brand-gold text-5xl md:text-7xl block mt-4">Always.</span>
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2: The Manifesto */}
      <section className="py-32 md:py-48 bg-brand-sage/10 relative z-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <span className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-8 block">Our Promise to the Earth</span>
            <p className="font-serif text-3xl md:text-5xl font-light text-brand-dark-green leading-snug md:leading-snug mb-12">
              Exceptional tea is not manufactured; it is yielded by an exceptional environment. We believe that true luxury cannot exist at the expense of the earth.
            </p>
            <p className="font-light text-xl text-brand-dark-green/70 leading-relaxed max-w-2xl mx-auto">
              Our commitment to sustainability is not a corporate initiative—it is the very foundation of our quality. From preserving the delicate microbiology of the Himalayan soil to ensuring the prosperity of our farmers, every decision we make is rooted in respect for the natural world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: The Three Pillars of Impact */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl md:text-6xl font-medium text-brand-dark-green mb-6">Pillars of Impact</h2>
            <p className="font-light text-xl text-brand-dark-green/60 max-w-2xl mx-auto">Holistic sustainability that nurtures the land and empowers the people.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Carbon Neutral", 
                subtitle: "Protecting the Atmosphere",
                desc: "We offset 100% of our carbon footprint from plantation to cup through localized afforestation projects and renewable energy investments at our factory.",
                img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
              },
              { 
                title: "Circular Economy", 
                subtitle: "Zero Landfill Commitment",
                desc: "Our packaging utilizes 100% compostable and biodegradable materials. We continuously innovate to ensure our footprint dissolves back into the earth seamlessly.",
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
              },
              { 
                title: "Community First", 
                subtitle: "Empowering the Artisans",
                desc: "Sustainability means human prosperity. Fair wages, comprehensive healthcare, and education for all our farmers and their families are non-negotiable pillars of Rakura.",
                img: "https://images.unsplash.com/photo-1532454174312-30cbbaaf12d9?q=80&w=800&auto=format&fit=crop"
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-brand-cream aspect-[4/5] cursor-pointer"
              >
                <div className="absolute inset-0 bg-brand-dark-green/80 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img src={pillar.img} alt={pillar.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-1000" />
                
                {/* Default State */}
                <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="font-serif text-3xl font-medium text-brand-dark-green">{pillar.title}</h3>
                </div>

                {/* Hover State */}
                <div className="absolute inset-0 z-30 p-10 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 translate-y-8 group-hover:translate-y-0">
                  <span className="font-sans font-bold tracking-widest text-xs uppercase text-brand-gold mb-4 block">{pillar.subtitle}</span>
                  <h3 className="font-serif text-3xl font-medium text-white mb-6">{pillar.title}</h3>
                  <p className="font-light text-white/80 leading-relaxed text-sm md:text-base">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Organic by Design */}
      <section className="py-32 bg-brand-cream">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 w-full"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1596547609652-9cb5d8d11c76?q=80&w=1200&auto=format&fit=crop" alt="Organic Soil" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <span className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-6 block">Terroir & Taste</span>
              <h2 className="font-serif text-4xl md:text-6xl font-medium mb-8 text-brand-dark-green leading-tight">
                Organic by Design.
              </h2>
              <div className="space-y-6 text-lg font-light text-brand-black/70 leading-relaxed">
                <p>
                  We don't practice organic farming simply for a certification; we do it because it produces better tea.
                </p>
                <p>
                  By relying on natural predators instead of synthetic pesticides, and organic compost instead of chemical fertilizers, we nurture a rich, living soil microbiome. This vibrant ecology forces the tea bush to root deeper, drawing up complex minerals that directly translate into richer, more nuanced flavor profiles in your cup.
                </p>
                <p className="font-medium text-brand-dark-green pt-4">
                  When you drink Rakura, you are tasting the pure, untainted essence of the Himalayas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Measurable Impact */}
      <section className="py-40 bg-brand-dark-green text-white relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl md:text-6xl font-medium mb-6">Measurable Impact</h2>
            <p className="font-light text-xl text-white/60 max-w-2xl mx-auto">Transparency and accountability in our mission to protect the earth.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 text-center">
            {[
              { value: "100%", label: "Organic Certified", desc: "Across all our high-altitude estates." },
              { value: "Zero", label: "Synthetic Chemicals", desc: "No artificial pesticides or fertilizers." },
              { value: "50k+", label: "Trees Planted", desc: "Restoring local Himalayan biodiversity." },
              { value: "10k+", label: "Lives Improved", desc: "Through fair trade and community funds." }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className="font-serif text-6xl md:text-7xl text-brand-gold mb-6 drop-shadow-lg">{stat.value}</div>
                <h3 className="font-sans font-bold tracking-widest uppercase text-sm mb-3">{stat.label}</h3>
                <p className="font-light text-white/50 text-sm max-w-[200px] leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: The Invitation */}
      <section className="py-40 bg-brand-sage/20 text-brand-dark-green text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596547609652-9cb5d8d11c76?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-medium mb-10 leading-tight"
          >
            Source Responsibly.<br/>Partner with Rakura.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-light text-brand-dark-green/70 mb-12"
          >
            Align your business with a brand that refuses to compromise on quality or the environment.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/contact" className="inline-block px-12 py-5 bg-brand-dark-green text-white font-bold tracking-widest uppercase rounded-full hover:bg-brand-gold hover:text-brand-dark-green transition-colors shadow-xl">
              Request Wholesale Catalog
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default SustainabilityPage;
