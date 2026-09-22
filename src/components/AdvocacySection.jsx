import React, { useEffect, useRef } from 'react';
import { Megaphone, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AdvocacySection({ onOpenJoinModal }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.advocacy-word',
        { opacity: 0.2, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 40%',
            scrub: 0.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-nurah-berry-dark via-nurah-berry-deep to-nurah-berry-dark text-nurah-bg relative overflow-hidden text-center"
    >
      {/* Background Soft Glow Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-nurah-rose/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nurah-bg/10 border border-nurah-rose/30 text-nurah-rose text-xs font-mono tracking-widest uppercase mb-10">
          <Megaphone className="w-3.5 h-3.5" />
          <span>ADVOCACY & VOICE</span>
        </div>

        {/* Typography-Led 3 Word Progression */}
        <div className="space-y-6 sm:space-y-8 mb-12">
          <div className="advocacy-word font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-nurah-rose-light">
            Speak up.
          </div>
          <div className="advocacy-word font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-nurah-peach-light">
            Spread awareness.
          </div>
          <div className="advocacy-word font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-nurah-sky-light">
            Act for positive change.
          </div>
        </div>

        {/* Narrative Callout */}
        <p className="text-base sm:text-xl text-nurah-bg/85 font-light max-w-3xl mx-auto leading-relaxed mb-10">
          Nurah Initiative gives youth a platform to dedicate personal time, voice, and unique abilities to advocate for positive social reform and bring hope to communities.
        </p>

        {/* Action Button */}
        <button
          onClick={onOpenJoinModal}
          className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-nurah-rose text-nurah-berry-dark font-semibold text-base hover:bg-nurah-peach transition-all duration-300 shadow-xl hover:scale-105"
        >
          <Sparkles className="w-5 h-5" />
          <span>Lend Your Voice</span>
        </button>

      </div>
    </section>
  );
}
