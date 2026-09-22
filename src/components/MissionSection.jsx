import React, { useState } from 'react';
import { Heart, Megaphone, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export default function MissionSection() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'support',
      number: '01',
      title: 'Supporting Communities',
      short: 'Community Support',
      desc: 'Dedicated to supporting communities in need through direct service and compassionate collective action.',
      icon: Heart,
      color: 'bg-nurah-rose-light text-nurah-berry',
      border: 'border-nurah-rose',
      action: 'Caring'
    },
    {
      id: 'awareness',
      number: '02',
      title: 'Raising Awareness',
      short: 'Social Awareness',
      desc: 'Amplifying vital social issues to educate, inform, and spark meaningful dialogue across society.',
      icon: Megaphone,
      color: 'bg-nurah-peach-light text-nurah-berry-dark',
      border: 'border-nurah-peach',
      action: 'Speaking Up'
    },
    {
      id: 'youth',
      number: '03',
      title: 'Empowering Youth',
      short: 'Youth Empowerment',
      desc: 'Equipping young people to become active, confident, and influential societal contributors.',
      icon: Users,
      color: 'bg-nurah-sky-light text-nurah-berry-dark',
      border: 'border-nurah-sky',
      action: 'Serving'
    },
    {
      id: 'collective',
      number: '04',
      title: 'Creating Collective Change',
      short: 'Collective Movement',
      desc: 'Uniting individual efforts — caring, serving, and speaking up — into an impactful movement for positive change.',
      icon: Sparkles,
      color: 'bg-nurah-sage-light text-nurah-berry-dark',
      border: 'border-nurah-sage',
      action: 'Uniting'
    },
  ];

  return (
    <section id="mission" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-nurah-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-nurah-berry font-bold mb-3 px-3.5 py-1.5 rounded-full bg-nurah-bg-alt border border-nurah-berry/15">
            OUR MISSION
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-nurah-berry-dark tracking-tight leading-tight">
            From individual action to <br />
            <span className="italic font-normal text-nurah-berry">collective change.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-nurah-berry-dark/80 font-sans">
            Nurah Initiative brings together youth to support communities, raise awareness, and empower society.
          </p>
        </div>

        {/* Interactive 4 Connected Mission Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Pillar Buttons Selection Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = activePillar === index;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-start gap-4 ${
                    isActive
                      ? `bg-nurah-card shadow-lg ${pillar.border} scale-[1.02]`
                      : 'bg-nurah-card/60 hover:bg-nurah-card border-nurah-berry/10 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${pillar.color} shrink-0 mt-0.5`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-nurah-berry-muted">
                        {pillar.number}
                      </span>
                      {isActive && (
                        <span className="text-xs font-mono uppercase px-2 py-0.5 rounded-full bg-nurah-berry/10 text-nurah-berry font-medium">
                          Active Focus
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-nurah-berry-dark mt-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-nurah-berry-dark/75 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Central Connecting Visual Column */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square bg-gradient-to-br from-nurah-card via-nurah-card-subtle to-nurah-bg-alt rounded-3xl p-8 border border-nurah-berry/15 shadow-xl flex flex-col justify-between items-center text-center overflow-hidden">
              
              {/* Background Connective Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 rounded-full border border-dashed border-nurah-berry/20 animate-spin-slow" />
                <div className="w-56 h-56 rounded-full border border-nurah-berry/15" />
              </div>

              {/* Top Banner */}
              <div className="relative z-10 text-xs font-mono uppercase tracking-widest text-nurah-berry font-medium">
                Pillar Integration Metaphor
              </div>

              {/* Central Core Concept Node */}
              <div className="relative z-10 my-auto flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-nurah-rose via-nurah-peach to-nurah-sky p-1 shadow-xl animate-pulse-subtle">
                  <div className="w-full h-full rounded-full bg-nurah-card flex flex-col items-center justify-center p-3 text-center">
                    <Sparkles className="w-6 h-6 text-nurah-berry mb-1" />
                    <span className="font-serif text-xs font-bold text-nurah-berry-dark leading-tight">
                      POSITIVE CHANGE
                    </span>
                  </div>
                </div>

                <div className="mt-6 px-4 py-2 rounded-full bg-nurah-card border border-nurah-berry/15 shadow-sm text-xs font-medium text-nurah-berry-dark flex items-center gap-2">
                  <span>Action:</span>
                  <span className="font-bold text-nurah-berry uppercase">
                    {pillars[activePillar].action}
                  </span>
                </div>
              </div>

              {/* Dynamic Active Description Box */}
              <div className="relative z-10 w-full p-4 rounded-2xl bg-nurah-bg/90 border border-nurah-berry/15 text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-nurah-berry">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{pillars[activePillar].title}</span>
                </div>
                <p className="text-xs text-nurah-berry-dark/85 mt-1 leading-relaxed">
                  {pillars[activePillar].desc}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
