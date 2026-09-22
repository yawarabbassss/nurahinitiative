import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BeliefStatement() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.belief-line',
        { opacity: 0.15, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 50%',
            scrub: 0.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="belief"
      ref={sectionRef}
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-nurah-bg-alt/70 border-y border-nurah-berry/10 overflow-hidden"
    >
      {/* Background Subtle Sparkle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-nurah-rose-light/20 via-nurah-peach-light/20 to-nurah-sky-light/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Section Label */}
        <span className="inline-block text-xs font-mono tracking-[0.3em] uppercase text-nurah-berry font-bold mb-8 px-4 py-1.5 rounded-full bg-nurah-card border border-nurah-berry/15">
          OUR CORE BELIEF
        </span>

        {/* Editorial Core Belief Statement */}
        <blockquote className="space-y-4">
          <p className="belief-line font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-nurah-berry-dark leading-tight tracking-tight">
            Every person deserves
          </p>
          <p className="belief-line font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-nurah-berry leading-tight tracking-tight">
            the opportunity to live
          </p>
          <p className="belief-line font-serif text-4xl sm:text-6xl md:text-7xl font-bold italic text-nurah-berry-dark leading-tight tracking-tight">
            with dignity, hope, and purpose.
          </p>
        </blockquote>

        {/* Decorative Divider */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="w-12 h-px bg-nurah-berry/20" />
          <div className="w-2 h-2 rounded-full bg-nurah-berry" />
          <div className="w-12 h-px bg-nurah-berry/20" />
        </div>

      </div>
    </section>
  );
}
