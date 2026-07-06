import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { year: "1973", title: "The Beginning", description: "A vision to bring authentic Himalayan tea to the world was born in the pristine high altitudes of Nepal." },
  { year: "1995", title: "Mastering Orthodox", description: "Perfecting the century-old orthodox tea-making traditions, focusing on hand-plucked quality." },
  { year: "2010", title: "Global Reach", description: "Rakura teas start reaching international markets, gaining recognition for unparalleled flavor profiles." },
  { year: "2023", title: "Sustainable Future", description: "Committing to 100% organic farming and achieving carbon-neutral packaging for all product lines." }
];

const Story = () => {
  return (
    <main className="bg-brand-white pt-24 min-h-screen">
      {/* Hero Section for Story */}
      <section className="relative py-32 bg-brand-cream text-brand-dark-green px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.span 
            className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-6 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Heritage
          </motion.span>
          <motion.h1 
            className="font-serif text-5xl md:text-7xl font-medium mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Rooted in the Himalayas. <br className="hidden md:block" />
            <span className="italic font-light text-brand-dark-green/80">Crafted for the World.</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl font-light max-w-3xl mx-auto text-brand-dark-green/70 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Since 1973, Rakura has been synonymous with the finest Himalayan tea. Our story is one of passion, tradition, and an unwavering commitment to quality.
          </motion.p>
        </div>
      </section>

      {/* Editorial Split Section */}
      <section className="py-24 px-6 md:px-12 container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] bg-brand-cream rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594910243452-1a48c1eb4196?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-brand-dark-green/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-black">The Art of Plucking</h2>
            <p className="text-lg font-light text-brand-black/70 leading-relaxed">
              Every great tea begins with the perfect leaf. At Rakura, we believe in the philosophy of "two leaves and a bud." Our experienced tea pluckers carefully hand-select only the youngest, most tender leaves from our high-altitude estates.
            </p>
            <p className="text-lg font-light text-brand-black/70 leading-relaxed">
              This meticulous attention to detail ensures that the delicate essential oils and nuanced flavor profiles of the Himalayan terroir are perfectly captured in every harvest.
            </p>
            <div className="pt-4 border-t border-brand-black/10">
              <p className="font-serif text-xl italic text-brand-gold">"Quality cannot be rushed; it must be nurtured."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-brand-black text-brand-cream px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">Our Journey</h2>
            <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
          </div>
          
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-brand-cream/20">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-brand-black border-2 border-brand-gold shadow">
                  <div className="h-3 w-3 rounded-full bg-brand-gold group-hover:scale-150 transition-transform duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] pl-4 md:pl-0">
                  <div className={`p-8 bg-brand-white/5 backdrop-blur-sm rounded-3xl border border-brand-white/10 hover:bg-brand-white/10 transition-colors duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="font-sans font-bold text-brand-gold tracking-widest text-sm mb-2 block">{milestone.year}</span>
                    <h3 className="font-serif text-2xl font-medium mb-3">{milestone.title}</h3>
                    <p className="font-light text-brand-cream/70 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Story;
