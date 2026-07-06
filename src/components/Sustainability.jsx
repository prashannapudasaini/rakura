import React from 'react';

const sustainabilityPillars = [
  {
    title: "100% Eco-Friendly Packaging",
    description: "Our signature 'Magic Knot' tea bags are completely glue-free, plastic-free, and fully compostable, ensuring your daily brew is gentle on the earth.",
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Carbon & Plastic Neutral by 2030",
    description: "We are on an ambitious journey to become a carbon and plastic-neutral company by 2030, drastically reducing our environmental footprint across all operations.",
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Empowering Local Farmers",
    description: "We proudly partner with over 1,400 smallholder farmers in the Himalayan highlands, ensuring fair trade practices, community development, and sustainable livelihoods.",
    icon: (
      <svg className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-32 bg-brand-sage/20 text-brand-dark-green relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-4 block">Our Commitment</span>
          <h2 className="font-serif text-5xl md:text-6xl font-medium mb-6">Sustainable by Nature</h2>
          <p className="max-w-2xl mx-auto text-xl font-light text-brand-dark-green/80">
            From the high altitudes of the Himalayas to your cup, we ensure every step of our journey respects both nature and the communities that nurture it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {sustainabilityPillars.map((pillar, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm p-10 rounded-3xl border border-white/40 hover:bg-white transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-dark-green flex items-center justify-center mb-8">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4">{pillar.title}</h3>
              <p className="font-sans text-brand-dark-green/70 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
