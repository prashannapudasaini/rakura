import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  { year: '1973', title: 'Foundation', desc: 'The seeds of a legacy were planted in the fertile soils of Jhapa.' },
  { year: '1995', title: 'Growth', desc: 'Expanding our gardens and deepening our commitment to organic farming.' },
  { year: '2010', title: 'Factory Expansion', desc: 'State-of-the-art facilities merging tradition with modern processing.' },
  { year: '2018', title: 'Modern Manufacturing', desc: 'Achieving export-grade quality through technological innovation.' },
  { year: '2024', title: 'Global Presence', desc: 'Serving premium Nepalese tea to connoisseurs around the world.' }
];

const About = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(scrollRef.current, {
        x: () => -(scrollRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollRef.current.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="bg-brand-cream text-brand-black min-h-screen flex items-center overflow-hidden">
      <div className="w-full flex items-center h-screen">
        <div ref={scrollRef} className="flex px-6 md:px-12 lg:px-32 items-center gap-12 md:gap-32 h-full w-max">
          <div className="min-w-[80vw] md:min-w-[40vw] flex-shrink-0">
            <h2 className="font-serif text-5xl md:text-7xl font-medium mb-6 text-brand-dark-green leading-tight">
              Our <br/> Heritage
            </h2>
            <p className="text-xl font-light text-brand-black/70 max-w-lg leading-relaxed">
              A journey of passion, precision, and the relentless pursuit of tea perfection. From our first leaf to global excellence.
            </p>
          </div>
          
          {timelineEvents.map((event, idx) => (
            <div key={idx} className="min-w-[80vw] sm:min-w-[300px] md:min-w-[400px] flex-shrink-0 relative group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-dark-green/20 mb-8" />
              <div className="w-4 h-4 rounded-full bg-brand-dark-green absolute -top-[7.5px] left-0 group-hover:scale-150 transition-transform duration-300" />
              <div className="pt-12">
                <span className="font-mono text-brand-gold text-2xl mb-4 block tracking-widest">{event.year}</span>
                <h3 className="font-serif text-3xl font-medium mb-4">{event.title}</h3>
                <p className="font-light text-brand-black/70 leading-relaxed text-lg">{event.desc}</p>
              </div>
            </div>
          ))}
          
          {/* Extra space at the end */}
          <div className="min-w-[10vw] flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
