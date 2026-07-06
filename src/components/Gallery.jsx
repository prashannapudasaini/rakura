import React from 'react';

import blackImg from '../assets/black_tea.webp';
import greenImg from '../assets/green_tea.webp';
import orthodoxImg from '../assets/orthodox.webp';
import ctcImg from '../assets/allproducts.png';

const galleryImages = [
  {
    src: blackImg,
    alt: "Premium Black Tea",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    src: greenImg,
    alt: "Organic Green Tea",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: orthodoxImg,
    alt: "Orthodox Tea Leaves",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    src: ctcImg,
    alt: "CTC Tea",
    className: "md:col-span-2 md:row-span-1"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-brand-black text-brand-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-sans font-bold tracking-widest text-sm text-brand-gold uppercase mb-4 block">Visual Journey</span>
          <h2 className="font-serif text-5xl md:text-6xl font-medium mb-6">The Rakura Experience</h2>
          <p className="font-sans text-brand-white/70 max-w-2xl mx-auto text-lg">
            Immerse yourself in the world of premium Himalayan teas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px] max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden group ${image.className}`}
            >
              <div className="absolute inset-0 bg-brand-dark-green/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
