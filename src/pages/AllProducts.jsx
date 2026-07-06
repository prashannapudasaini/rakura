import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import blackImg from '../assets/black_tea.webp';
import greenImg from '../assets/green_tea.webp';
import orthodoxImg from '../assets/orthodox.webp';
import ctcImg from '../assets/ctc.webp';
import herbalImg from '../assets/herbal.webp';
import orangeImg from '../assets/orange.webp';
import allproductsImg from '../assets/allproducts.png';

const allProducts = [
  { id: 1, name: "Himalayan Golden Tips", category: "Orthodox", weight: "Loose Leaf | 100g", image: orthodoxImg, desc: "Hand-rolled whole leaf with golden buds." },
  { id: 2, name: "Ruby Oolong", category: "Orthodox", weight: "Loose Leaf | 100g", image: orthodoxImg, desc: "Semi-oxidized, complex floral notes." },
  { id: 3, name: "Silver Needle White", category: "Orthodox", weight: "Loose Leaf | 50g", image: orthodoxImg, desc: "Rare, delicate, plucking only the youngest buds." },
  
  { id: 4, name: "Premium English Breakfast", category: "Black", weight: "Tea Bags | 50 Pcs", image: blackImg, desc: "Robust and brisk, the definitive morning tea." },
  { id: 5, name: "Earl Grey Reserve", category: "Black", weight: "Tea Bags | 50 Pcs", image: blackImg, desc: "Infused with pure Mediterranean bergamot." },
  { id: 6, name: "Classic Darjeeling Style", category: "Black", weight: "Loose Leaf | 150g", image: blackImg, desc: "Muscatel notes from high-altitude estates." },
  
  { id: 7, name: "Jasmine Green", category: "Green", weight: "Tea Bags | 25 Pcs", image: greenImg, desc: "Scented naturally with fresh jasmine blossoms." },
  { id: 8, name: "Sencha Style Green", category: "Green", weight: "Loose Leaf | 200g", image: greenImg, desc: "Pan-fired for a sweet, vegetal freshness." },
  
  { id: 9, name: "Chamomile & Lemongrass", category: "Herbal", weight: "Tea Bags | 25 Pcs", image: herbalImg, desc: "Caffeine-free relaxation and wellness." },
  { id: 10, name: "Peppermint Detox", category: "Herbal", weight: "Tea Bags | 25 Pcs", image: herbalImg, desc: "Cooling, soothing, and digestive support." },
  
  { id: 11, name: "Spiced Apple Cinnamon", category: "Flavoured", weight: "Tea Bags | 25 Pcs", image: orangeImg, desc: "Warm, festive notes perfect for winter." },
  { id: 12, name: "Mango Tango Splash", category: "Flavoured", weight: "Tea Bags | 25 Pcs", image: orangeImg, desc: "Tropical fruit infusions for iced or hot tea." },
  
  { id: 13, name: "Strong Assam CTC", category: "CTC", weight: "Loose Leaf | 500g", image: ctcImg, desc: "Intense, quick-infusing strength for milk teas." },
  { id: 14, name: "Masala Chai Blend", category: "CTC", weight: "Loose Leaf | 500g", image: ctcImg, desc: "Blended with authentic cardamom, clove, and ginger." },
  { id: 15, name: "The Complete Master Collection", category: "Assorted", weight: "Gift Box | 6x50g", image: allproductsImg, desc: "The ultimate curated selection of our finest teas." }
];

const categories = ["All", "Orthodox", "Black", "Green", "Herbal", "Flavoured", "CTC", "Assorted"];

const AllProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <main className="bg-brand-cream min-h-screen text-brand-black pt-24">
      
      {/* HEADER */}
      <section className="bg-brand-dark-green text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-4 block"
          >
            The Complete Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl font-medium mb-6"
          >
            Rakura Product Catalog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg font-light text-white/70 max-w-2xl mx-auto"
          >
            Explore our comprehensive range of retail and export-ready teas. Filter by category to find the perfect blend for your business or personal collection.
          </motion.p>
        </div>
      </section>

      {/* FILTER NAVIGATION */}
      <section className="sticky top-24 z-40 bg-brand-cream/90 backdrop-blur-md border-b border-brand-black/10 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 md:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-2 rounded-full font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-brand-dark-green text-white shadow-md' 
                    : 'bg-white border border-brand-black/10 text-brand-black/60 hover:text-brand-dark-green hover:border-brand-dark-green/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden border border-brand-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
                >
                  <div className="bg-brand-sage/5 aspect-square p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-dark-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative z-10"
                    />
                    
                    {/* Hover Overlay Action */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Link to="/contact" className="w-full py-3 bg-brand-dark-green text-white text-center font-bold tracking-widest text-xs uppercase rounded-lg shadow-lg hover:bg-brand-gold transition-colors">
                        Request Pricing
                      </Link>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-sans font-bold tracking-widest text-[10px] text-brand-gold uppercase">{product.category}</span>
                      <span className="font-sans text-[10px] text-brand-black/40 font-medium">{product.weight}</span>
                    </div>
                    <h3 className="font-serif text-xl font-medium text-brand-dark-green mb-3 leading-tight">{product.name}</h3>
                    <p className="font-light text-brand-black/60 text-sm leading-relaxed mb-4 flex-grow">{product.desc}</p>
                    <div className="pt-4 border-t border-brand-black/5 mt-auto">
                       <Link to="/contact" className="text-brand-dark-green font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-brand-gold transition-colors">
                         Wholesale Inquiry <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                       </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-brand-black/50 font-light">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* WHOLESALE FOOTER */}
      <section className="py-24 bg-brand-black text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Built for Global Distribution</h2>
          <p className="text-lg font-light text-white/70 mb-12">
            Whether you are looking to stock Rakura in your retail stores, serve it in your luxury hospitality venues, or require Private Label (OEM) manufacturing, our export team is ready to deliver excellence worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="px-10 py-4 bg-brand-gold text-brand-dark-green font-bold tracking-widest uppercase rounded-full hover:bg-white transition-colors">
              Request Full Catalog
            </Link>
            <Link to="/factory" className="px-10 py-4 border border-white/30 text-white font-bold tracking-widest uppercase rounded-full hover:bg-white hover:text-brand-dark-green transition-colors">
              View Our Facilities
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AllProducts;
