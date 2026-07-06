import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-brand-dark-green text-brand-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="glass-dark p-12 rounded-3xl">
          <h2 className="font-serif text-5xl font-medium mb-8 text-center text-brand-gold">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-sans mb-4">Factory Location</h3>
              <p className="text-white/70 mb-8 font-light leading-relaxed">
                Rakura Tea Factory<br/>
                Haldibari, Jhapa<br/>
                Nepal
              </p>
              <h3 className="text-xl font-sans mb-2">Export Inquiries</h3>
              <p className="text-white/70 font-light">exports@rakura.com</p>
            </div>
            <div>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Name" className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand-gold" />
                <input type="email" placeholder="Email" className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand-gold" />
                <textarea placeholder="Message" rows="4" className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand-gold"></textarea>
                <button className="bg-brand-gold text-brand-dark-green font-medium py-3 rounded-lg hover:bg-white transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
