import React from 'react';

const stats = [
  { value: "15+", label: "Countries Exported To" },
  { value: "1M+", label: "Cups Served Annually" },
  { value: "50+", label: "International Awards" },
  { value: "100%", label: "Himalayan Origin" }
];

const GlobalExports = () => {
  return (
    <section id="exports" className="py-32 bg-brand-white text-brand-black relative overflow-hidden">
      {/* Abstract map background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-4 block">Global Reach</span>
            <h2 className="font-serif text-5xl md:text-6xl font-medium mb-6 leading-tight">Serving Premium Himalayan Teas to the World</h2>
            <p className="text-xl font-light text-brand-black/70 mb-12 max-w-2xl mx-auto lg:mx-0">
              From the pristine high altitudes of Nepal, Rakura has established a global footprint, bringing the authentic taste of Himalayan tea to connoisseurs across continents.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="border-l-2 border-brand-gold pl-6 py-2">
                  <div className="font-serif text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="font-sans text-sm tracking-wide text-brand-black/60 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="aspect-[4/3] relative rounded-[2.5rem] overflow-hidden bg-brand-cream border border-black/5 shadow-2xl group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526436166440-410a56828551?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <h3 className="font-serif text-3xl font-medium mb-2">Connecting Cultures</h3>
                <p className="font-light text-white/80">Every cup is a bridge between the Himalayas and the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExports;
