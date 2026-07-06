import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const factoryStages = [
  { title: 'Tea Leaf Collection', desc: 'Hand-plucked tender leaves from the misty hills.' },
  { title: 'Withering', desc: 'Removing moisture to make the leaves pliable.' },
  { title: 'Rolling', desc: 'Breaking the cellular structure to initiate oxidation.' },
  { title: 'Oxidation', desc: 'Developing the characteristic color and flavor profile.' },
  { title: 'Drying', desc: 'Arresting oxidation to lock in the freshness.' },
  { title: 'Sorting', desc: 'Grading the tea leaves by size and quality.' },
  { title: 'Packaging', desc: 'Sealing the flavor in premium, eco-friendly packs.' },
  { title: 'Quality Testing', desc: 'Rigorous checks to ensure export-grade standards.' },
  { title: 'Distribution', desc: 'Shipping the finest Nepalese tea globally.' }
];

const FactoryExperience = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${(scrollRef.current.scrollWidth - window.innerWidth) * 1.5}`, // Make scroll longer for slower documentary feel
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      tl.to(scrollRef.current, {
        x: () => -(scrollRef.current.scrollWidth - window.innerWidth),
        ease: "none"
      }, 0);

      // Animate the connecting line drawing across
      tl.to(lineRef.current, {
        scaleX: 1,
        ease: "none"
      }, 0);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="factory" className="bg-brand-dark-green text-brand-white min-h-screen overflow-hidden relative">
      {/* Background Particles/Noise overlay could go here */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>
      
      <div className="w-full flex items-center h-screen">
        <div ref={scrollRef} className="flex px-6 md:px-12 lg:px-32 items-center h-full relative w-max">
          
          <div className="min-w-[80vw] md:min-w-[50vw] flex-shrink-0 z-10">
            <h2 className="font-serif text-5xl md:text-7xl font-medium mb-6 text-brand-gold leading-tight">
              The Factory <br/> Experience
            </h2>
            <p className="text-xl font-light text-brand-cream/80 max-w-lg leading-relaxed">
              Step inside our state-of-the-art facility where heritage meets innovation. Follow the journey of a tea leaf.
            </p>
          </div>
          
          {/* Continuous Line Track */}
          <div className="absolute top-1/2 left-[50vw] right-0 h-[2px] bg-white/10 -translate-y-1/2 z-0" style={{ width: `${factoryStages.length * 40}vw` }}></div>
          <div ref={lineRef} className="absolute top-1/2 left-[50vw] h-[2px] bg-brand-gold -translate-y-1/2 z-0 origin-left scale-x-0" style={{ width: `${factoryStages.length * 40}vw` }}></div>

          {factoryStages.map((stage, idx) => (
            <div key={idx} className="min-w-[80vw] md:min-w-[40vw] flex-shrink-0 flex flex-col justify-center relative z-10">
              <div className="w-6 h-6 rounded-full border-4 border-brand-dark-green bg-brand-gold mx-auto mb-12 shadow-[0_0_20px_rgba(200,164,93,0.5)] z-10"></div>
              <div className="text-center px-8">
                <span className="font-mono text-brand-sage text-lg mb-4 block tracking-widest">Stage {String(idx + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-4xl font-medium mb-4">{stage.title}</h3>
                <p className="font-light text-brand-cream/70 leading-relaxed text-lg max-w-md mx-auto">{stage.desc}</p>
              </div>
            </div>
          ))}
          
          <div className="min-w-[20vw] flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default FactoryExperience;
