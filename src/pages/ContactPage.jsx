import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <main className="bg-brand-white min-h-screen text-brand-black">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side: Info & Branding */}
        <div className="lg:w-1/2 bg-brand-dark-green text-brand-cream p-12 md:p-24 pt-32 lg:pt-24 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="relative z-10">
            <motion.span 
              className="font-sans font-bold tracking-widest text-xs text-brand-gold uppercase mb-6 block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Get in Touch
            </motion.span>
            <motion.h1 
              className="font-serif text-5xl md:text-7xl font-medium mb-8 leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Brew <br className="hidden md:block" />Something Great.
            </motion.h1>
            <motion.p 
              className="text-lg font-light text-brand-cream/70 leading-relaxed max-w-md mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Whether you're looking for wholesale partnerships, media inquiries, or simply have a question about our teas, we're here to listen.
            </motion.p>
            
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <h3 className="font-serif text-xl font-medium mb-2 text-white">Global Headquarters</h3>
                <p className="font-light text-brand-cream/70">Rakura Tea Estates<br/>Kathmandu, Nepal<br/>PO Box 1234</p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium mb-2 text-white">Contact Info</h3>
                <p className="font-light text-brand-cream/70">hello@rakura.com<br/>+977 1 4400000</p>
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 mt-24">
            <p className="font-sans text-xs tracking-widest uppercase text-brand-gold/50">© {new Date().getFullYear()} Rakura Tea. All rights reserved.</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 p-12 md:p-24 pt-16 lg:pt-24 bg-brand-white flex items-center justify-center">
          <motion.div 
            className="w-full max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" id="firstName" className="w-full bg-transparent border-b border-brand-black/20 py-3 text-brand-black focus:outline-none focus:border-brand-dark-green transition-colors peer" placeholder=" " required />
                  <label htmlFor="firstName" className="absolute left-0 top-3 text-brand-black/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-dark-green peer-valid:-top-4 peer-valid:text-xs">First Name</label>
                </div>
                <div className="relative group">
                  <input type="text" id="lastName" className="w-full bg-transparent border-b border-brand-black/20 py-3 text-brand-black focus:outline-none focus:border-brand-dark-green transition-colors peer" placeholder=" " required />
                  <label htmlFor="lastName" className="absolute left-0 top-3 text-brand-black/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-dark-green peer-valid:-top-4 peer-valid:text-xs">Last Name</label>
                </div>
              </div>
              
              <div className="relative group">
                <input type="email" id="email" className="w-full bg-transparent border-b border-brand-black/20 py-3 text-brand-black focus:outline-none focus:border-brand-dark-green transition-colors peer" placeholder=" " required />
                <label htmlFor="email" className="absolute left-0 top-3 text-brand-black/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-dark-green peer-valid:-top-4 peer-valid:text-xs">Email Address</label>
              </div>

              <div className="relative group">
                <select id="inquiryType" className="w-full bg-transparent border-b border-brand-black/20 py-3 text-brand-black focus:outline-none focus:border-brand-dark-green transition-colors appearance-none cursor-pointer" defaultValue="">
                  <option value="" disabled className="text-brand-black/50">Subject of Inquiry</option>
                  <option value="wholesale">Wholesale & Distribution</option>
                  <option value="press">Press & Media</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-0 top-4 pointer-events-none text-brand-black/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              <div className="relative group">
                <textarea id="message" rows="4" className="w-full bg-transparent border-b border-brand-black/20 py-3 text-brand-black focus:outline-none focus:border-brand-dark-green transition-colors peer resize-none" placeholder=" " required></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-brand-black/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-dark-green peer-valid:-top-4 peer-valid:text-xs">Your Message</label>
              </div>

              <button type="button" className="w-full bg-brand-dark-green text-white py-4 px-8 rounded-full font-sans tracking-widest text-sm uppercase hover:bg-brand-black transition-colors duration-300 shadow-lg hover:shadow-xl mt-8">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
