import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import gsap from 'gsap';

export default function Hero({ onOpenJoinModal }) {
  const heroRef = useRef(null);
  const archRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.fromTo(
        '.hero-animate',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );

      gsap.fromTo(
        archRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out', delay: 0.2 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Subtle interactive parallax on mouse move
  const handleMouseMove = (e) => {
    if (!archRef.current) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 15;
    const y = (clientY / window.innerHeight - 0.5) * 15;
    
    gsap.to(archRef.current, {
      x,
      y,
      duration: 1,
      ease: 'power1.out',
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden nurah-hero-gradient"
    >
      {/* Ambient Watercolor Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-nurah-rose/30 via-nurah-peach/30 to-nurah-sky/25 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column — Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
          
          {/* Eyebrow badge */}
          <div className="hero-animate inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nurah-card/90 border border-nurah-berry/15 text-nurah-berry-dark text-xs font-mono tracking-widest uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-nurah-berry" />
            <span>NURAH INITIATIVE — YOUTH-LED MOVEMENT</span>
          </div>

          {/* Headline */}
          <h1 className="hero-animate font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-nurah-berry-dark leading-[1.08] mb-6">
            Small acts. <br />
            <span className="italic font-normal text-nurah-berry relative">
              Collective change.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-nurah-rose/60" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M0 9C50 3 150 3 200 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-animate text-lg sm:text-xl text-nurah-berry-dark/85 font-normal max-w-2xl leading-relaxed mb-8">
            Believing that caring, serving, and speaking up can turn individual actions into a powerful movement for positive social impact.
          </p>

          {/* CTAs */}
          <div className="hero-animate flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenJoinModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-nurah-berry text-nurah-bg font-medium text-base hover:bg-nurah-berry-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Join the Initiative</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              to="/mission"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-nurah-card/80 border border-nurah-berry/20 text-nurah-berry-dark font-medium text-base hover:bg-nurah-card hover:border-nurah-berry/40 transition-all duration-300"
            >
              <Compass className="w-5 h-5 text-nurah-berry" />
              <span>Explore Our Mission</span>
            </Link>
          </div>

          {/* Pillar Quick Badges */}
          <div className="hero-animate mt-12 pt-8 border-t border-nurah-berry/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link to="/mission" className="flex items-center gap-2 text-xs font-medium text-nurah-berry-dark/80 hover:text-nurah-berry">
              <span className="w-2 h-2 rounded-full bg-nurah-rose" />
              <span>Community Support</span>
            </Link>
            <Link to="/mission" className="flex items-center gap-2 text-xs font-medium text-nurah-berry-dark/80 hover:text-nurah-berry">
              <span className="w-2 h-2 rounded-full bg-nurah-peach" />
              <span>Social Awareness</span>
            </Link>
            <Link to="/mission" className="flex items-center gap-2 text-xs font-medium text-nurah-berry-dark/80 hover:text-nurah-berry">
              <span className="w-2 h-2 rounded-full bg-nurah-sky" />
              <span>Youth Empowerment</span>
            </Link>
            <Link to="/mission" className="flex items-center gap-2 text-xs font-medium text-nurah-berry-dark/80 hover:text-nurah-berry">
              <span className="w-2 h-2 rounded-full bg-nurah-sage" />
              <span>Collective Action</span>
            </Link>
          </div>

        </div>

        {/* Right Column — Signature Arch Visual & Logo Display */}
        <div className="lg:col-span-5 flex justify-center relative z-10">
          
          {/* Logo Arch Container */}
          <div
            ref={archRef}
            className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] nurah-arch p-6 sm:p-8 bg-gradient-to-b from-nurah-rose-light/40 via-nurah-peach-light/40 to-nurah-sky-light/40 border-2 border-nurah-berry/20 shadow-2xl backdrop-blur-md flex flex-col items-center justify-center text-center overflow-hidden"
          >
            {/* Sparkle Icons around the Arch */}
            <Sparkles className="absolute top-6 left-6 w-5 h-5 text-nurah-berry animate-bounce" />
            <Sparkles className="absolute top-12 right-8 w-4 h-4 text-nurah-berry/70" />
            <Sparkles className="absolute bottom-16 left-8 w-4 h-4 text-nurah-berry/70" />

            {/* Logo Image */}
            <div className="relative z-10 w-44 h-44 sm:w-56 sm:h-56 mb-4 group cursor-pointer">
              <div className="absolute inset-0 bg-nurah-rose/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
              <img
                src="/nurah-logo.png"
                alt="Nurah Initiative Lily Logo"
                className="w-full h-full object-contain relative z-10 filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Typography under Arch */}
            <div className="relative z-10">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-nurah-berry-dark">
                NURAH
              </h2>
              <p className="text-xs font-mono tracking-[0.25em] text-nurah-berry uppercase font-medium mt-1">
                — INITIATIVE —
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-nurah-berry-dark/80 font-serif italic">
                <Sparkles className="w-3 h-3 text-nurah-berry" />
                <span>Light & Hope for Communities</span>
              </div>
            </div>

            {/* Soft decorative background arch frame inside */}
            <div className="absolute inset-3 nurah-arch border border-nurah-berry/10 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}
