import React from 'react';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

export default function CTASection({ onOpenJoinModal }) {
  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-nurah-bg-alt/90 relative overflow-hidden">
      
      {/* Background Soft Arch Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-nurah-rose-light/30 via-nurah-peach-light/30 to-nurah-sky-light/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 bg-nurah-card rounded-3xl p-8 sm:p-14 border border-nurah-berry/20 shadow-2xl">
        
        {/* Eyebrow */}
        <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-nurah-berry font-bold mb-4 px-3.5 py-1.5 rounded-full bg-nurah-bg border border-nurah-berry/15">
          TAKE THE FIRST STEP
        </span>

        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-nurah-berry-dark tracking-tight leading-tight mb-6">
          Be part of something <br />
          <span className="italic font-normal text-nurah-berry">bigger than yourself.</span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-nurah-berry-dark/85 font-normal max-w-2xl mx-auto leading-relaxed mb-10">
          Nurah Initiative exists to turn individual actions into a collective movement for community support, social awareness, and youth empowerment.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenJoinModal}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-nurah-berry text-nurah-bg font-medium text-base hover:bg-nurah-berry-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Sparkles className="w-5 h-5 text-nurah-peach-light animate-pulse" />
            <span>Join the Initiative</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="https://linktr.ee/Nurah_initiative"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-nurah-bg border border-nurah-berry/20 text-nurah-berry-dark font-medium text-base hover:bg-nurah-bg-alt transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5 text-nurah-berry" />
            <span>Connect With Nurah</span>
          </a>
        </div>

        {/* Social Badges */}
        <div className="mt-10 pt-8 border-t border-nurah-berry/10 flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/nurah_initiative/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-nurah-berry hover:text-nurah-berry-dark transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>@nurah_initiative</span>
          </a>
          <span className="text-nurah-berry/30">•</span>
          <a
            href="https://linktr.ee/Nurah_initiative"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-nurah-berry hover:text-nurah-berry-dark transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Linktree Hub</span>
          </a>
        </div>

      </div>
    </section>
  );
}
