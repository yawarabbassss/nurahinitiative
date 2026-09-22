import React, { useState } from 'react';
import { Heart, Megaphone, Users, Sparkles, ChevronRight, Layers } from 'lucide-react';

export default function FocusAreas() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const focusAreas = [
    {
      id: 'support',
      code: 'SUPPORT',
      title: 'Supporting Communities',
      subtitle: 'Hands-on community assistance',
      description: 'Extending vital help and care to communities in need, ensuring dignity and immediate relief.',
      icon: Heart,
      accentColor: 'from-nurah-rose/40 to-nurah-rose-light/20',
      pillBg: 'bg-nurah-rose-light text-nurah-berry',
      borderHover: 'border-nurah-rose',
      keyPoint: 'Direct service & community care'
    },
    {
      id: 'awareness',
      code: 'AWARENESS',
      title: 'Raising Awareness',
      subtitle: 'Social issue advocacy',
      description: 'Shining light on essential societal issues to educate communities and drive enlightened action.',
      icon: Megaphone,
      accentColor: 'from-nurah-peach/40 to-nurah-peach-light/20',
      pillBg: 'bg-nurah-peach-light text-nurah-berry-dark',
      borderHover: 'border-nurah-peach',
      keyPoint: 'Spreading information & dialogue'
    },
    {
      id: 'youth',
      code: 'YOUTH',
      title: 'Empowering Youth',
      subtitle: 'Youth societal leadership',
      description: 'Providing platforms, confidence, and leadership pathways for young people to contribute meaningfully.',
      icon: Users,
      accentColor: 'from-nurah-sky/40 to-nurah-sky-light/20',
      pillBg: 'bg-nurah-sky-light text-nurah-berry-dark',
      borderHover: 'border-nurah-sky',
      keyPoint: 'Building future changemakers'
    },
    {
      id: 'collective-action',
      code: 'COLLECTIVE ACTION',
      title: 'Collective Movement',
      subtitle: 'Unified positive impact',
      description: 'Synthesizing individual efforts into an unstoppable collective movement for enduring social progress.',
      icon: Sparkles,
      accentColor: 'from-nurah-sage/40 to-nurah-sage-light/20',
      pillBg: 'bg-nurah-sage-light text-nurah-berry-dark',
      borderHover: 'border-nurah-sage',
      keyPoint: 'Multiplying individual impact'
    },
  ];

  return (
    <section id="focus-areas" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-nurah-bg-alt/80 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-nurah-berry font-bold mb-3 px-3.5 py-1.5 rounded-full bg-nurah-card border border-nurah-berry/15">
              FOUR PILLARS OF IMPACT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-nurah-berry-dark tracking-tight">
              Our Primary Focus Areas
            </h2>
          </div>
          <p className="text-sm sm:text-base text-nurah-berry-dark/80 max-w-md">
            Explore how Nurah channels passion and energy across four core domains of positive social transformation.
          </p>
        </div>

        {/* Desktop Expanding Panels (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-4 h-[500px] w-full">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={area.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative rounded-3xl p-8 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer border ${
                  isHovered
                    ? `flex-[2.8] bg-nurah-card shadow-2xl ${area.borderHover}`
                    : 'flex-[1] bg-nurah-card/70 border-nurah-berry/10 opacity-75 hover:opacity-90'
                }`}
              >
                {/* Background Watercolor Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${area.accentColor} transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-20'
                  }`}
                />

                {/* Top Section */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-nurah-berry-muted">
                    {area.code}
                  </span>
                  <div className={`p-3 rounded-2xl ${area.pillBg} shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative z-10">
                  <h3
                    className={`font-serif font-bold text-nurah-berry-dark transition-all duration-300 ${
                      isHovered ? 'text-3xl mb-3' : 'text-xl mb-1'
                    }`}
                  >
                    {area.title}
                  </h3>

                  {isHovered && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <p className="text-xs font-mono uppercase tracking-wider text-nurah-berry font-semibold mb-2">
                        {area.subtitle}
                      </p>
                      <p className="text-sm text-nurah-berry-dark/85 leading-relaxed mb-4">
                        {area.description}
                      </p>
                      <div className="pt-3 border-t border-nurah-berry/15 flex items-center gap-2 text-xs font-medium text-nurah-berry">
                        <Layers className="w-4 h-4" />
                        <span>{area.keyPoint}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Indicator */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-nurah-berry-dark/60">
                  <span>0{index + 1} / 04</span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isHovered ? 'translate-x-1 text-nurah-berry' : 'opacity-40'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion Stack (Visible on Mobile & Tablet) */}
        <div className="lg:hidden flex flex-col gap-4">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            const isOpen = hoveredIndex === index;

            return (
              <div
                key={area.id}
                onClick={() => setHoveredIndex(index)}
                className={`rounded-2xl p-6 transition-all duration-300 border bg-nurah-card shadow-sm ${
                  isOpen ? `${area.borderHover} ring-1 ring-nurah-berry/20` : 'border-nurah-berry/10'
                }`}
              >
                <div className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${area.pillBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-nurah-berry-muted font-bold block">
                        {area.code}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-nurah-berry-dark">
                        {area.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-nurah-berry transition-transform duration-300 ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  />
                </div>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-nurah-berry/10 text-sm text-nurah-berry-dark/85 space-y-2 animate-in fade-in duration-200">
                    <p className="font-medium text-nurah-berry text-xs uppercase tracking-wider font-mono">
                      {area.subtitle}
                    </p>
                    <p className="leading-relaxed">{area.description}</p>
                    <div className="pt-2 text-xs font-semibold text-nurah-berry flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{area.keyPoint}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
