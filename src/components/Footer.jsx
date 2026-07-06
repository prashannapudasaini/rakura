import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a291e] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-4xl font-bold tracking-widest uppercase text-brand-gold mb-8 block hover:text-white transition-colors">
              Rakura
            </Link>
            <p className="text-white/70 font-light text-sm leading-relaxed mb-8">
              Pioneering Nepal's tea industry since 1973. Sustainably sourced, ethically produced, and globally loved.
            </p>
            <div className="flex gap-3 mb-10 flex-wrap">
              <div className="border border-white/20 rounded-md px-3 py-1.5 text-[10px] font-bold tracking-widest text-white/60 uppercase hover:bg-white/5 transition-colors cursor-default">ISO 22000</div>
              <div className="border border-white/20 rounded-md px-3 py-1.5 text-[10px] font-bold tracking-widest text-white/60 uppercase hover:bg-white/5 transition-colors cursor-default">USDA Organic</div>
              <div className="border border-white/20 rounded-md px-3 py-1.5 text-[10px] font-bold tracking-widest text-white/60 uppercase hover:bg-white/5 transition-colors cursor-default">HACCP Certified</div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-sans font-bold tracking-widest text-xs uppercase text-white/50">Join our newsletter</span>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/50 transition-colors rounded-l-lg w-full"
                />
                <button className="bg-brand-gold text-brand-dark-green px-6 py-3 text-sm font-bold tracking-wider uppercase rounded-r-lg hover:bg-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-8 text-brand-gold">Discover</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-white/70">
              <li><Link to="/story" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
              <li><Link to="/teas" className="hover:text-brand-gold transition-colors">Our Teas</Link></li>
              <li><Link to="/sustainability" className="hover:text-brand-gold transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Global Exports</Link></li>
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-8 text-brand-gold">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm font-light text-white/70">
              <li>Himal Tea Industries Pvt. Ltd.</li>
              <li>Kathmandu, Nepal</li>
              <li><a href="mailto:info@rakura.com.np" className="hover:text-brand-gold transition-colors">info@rakura.com.np</a></li>
              <li><a href="tel:+97712345678" className="hover:text-brand-gold transition-colors">+977 1 234 5678</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-8 text-brand-gold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark-green transition-colors border border-white/10">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark-green transition-colors border border-white/10">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark-green transition-colors border border-white/10">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm font-light">
          <div>
            &copy; {new Date().getFullYear()} Himal Tea Industries Pvt. Ltd. (Rakura). All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
