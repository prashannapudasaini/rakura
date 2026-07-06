import React from 'react';

const testimonialsData = [
  {
    quote: "The quality of Rakura tea is unmatched. A true testament to Nepal's rich tea heritage. Every sip feels like a journey to the Himalayas.",
    author: "Global Tea Importer",
    location: "United Kingdom",
    rating: 5,
  },
  {
    quote: "We've been stocking Rakura's Himalayan Black for a year now, and our customers are absolutely in love with its rich, robust flavor and ethical sourcing.",
    author: "Boutique Cafe Owner",
    location: "Australia",
    rating: 5,
  },
  {
    quote: "The Magic Knot tea bags are a game changer. It's refreshing to see a brand so committed to sustainability without compromising on the premium experience.",
    author: "Sustainability Advocate",
    location: "Germany",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-brand-cream text-brand-dark-green relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-dark-green/20 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-medium mb-6">What the World Says</h2>
          <p className="font-sans text-lg text-brand-dark-green/70 max-w-2xl mx-auto">
            Discover why tea connoisseurs and eco-conscious consumers around the globe choose Rakura for their daily brew.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group border border-brand-dark-green/5"
            >
              <div>
                <div className="flex gap-1 mb-8 text-brand-gold">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl font-serif font-medium leading-snug mb-10 text-brand-black group-hover:text-brand-dark-green transition-colors">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div>
                <div className="h-px w-12 bg-brand-gold mb-6 transition-all duration-300 group-hover:w-full"></div>
                <div className="font-sans font-bold uppercase tracking-widest text-sm text-brand-dark-green">
                  {testimonial.author}
                </div>
                <div className="font-sans font-light text-sm text-brand-dark-green/60 mt-1">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
