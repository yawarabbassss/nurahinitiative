import React, { useState } from 'react';
import { UserCheck, Briefcase, Award, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export default function VolunteerBenefits({ onOpenJoinModal }) {
  const [activeStage, setActiveStage] = useState(0);

  const growthStages = [
    { label: 'You', note: 'Start where you are with your passion and time.' },
    { label: 'Experience', note: 'Gain hands-on experience in youth initiative projects.' },
    { label: 'Confidence', note: 'Evolve into a stronger, more confident leader.' },
    { label: 'Portfolio', note: 'Build authentic achievements for CVs and applications.' },
    { label: 'Advocacy', note: 'Speak up and advocate on key societal issues.' },
    { label: 'Impact', note: 'Create meaningful positive change in lives.' },
  ];

  const benefits = [
    {
      id: 'growth',
      title: 'Personal Growth',
      icon: UserCheck,
      color: 'bg-nurah-rose-light text-nurah-berry',
      border: 'border-nurah-rose',
      description: 'Becoming part of a broader movement while evolving into a stronger, more confident individual.',
      highlights: [
        'Evolve into a stronger, confident individual',
        'Become part of a purposeful broader movement',
        'Develop leadership and interpersonal skills',
      ]
    },
    {
      id: 'career',
      title: 'Portfolio & Career Building',
      icon: Briefcase,
      color: 'bg-nurah-peach-light text-nurah-berry-dark',
      border: 'border-nurah-peach',
      description: 'Gaining hands-on experience and achievements to showcase in university applications, CVs, and future career opportunities.',
      highlights: [
        'Gain practical hands-on initiative experience',
        'Enhance university applications and CVs',
        'Build tangible achievements for future opportunities',
      ]
    },
    {
      id: 'advocacy',
      title: 'Advocacy & Impact',
      icon: Award,
      color: 'bg-nurah-sky-light text-nurah-berry-dark',
      border: 'border-nurah-sky',
      description: 'Using personal time and abilities to create meaningful change in the lives of others — speaking up on key issues, spreading awareness, and acting as an advocate for positive social reform.',
      highlights: [
        'Use personal time & abilities for meaningful change',
        'Speak up on vital social reform issues',
        'Spread awareness across local and wider communities',
      ]
    },
  ];

  return (
    <section id="volunteer" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-nurah-bg-alt/70 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-nurah-berry font-bold mb-3 px-3.5 py-1.5 rounded-full bg-nurah-card border border-nurah-berry/15">
            WHY JOIN NURAH
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-nurah-berry-dark tracking-tight">
            Your Growth Journey With Us
          </h2>
          <p className="mt-4 text-base text-nurah-berry-dark/80 font-sans">
            Volunteering with Nurah Initiative is both a contribution to society and a transformative personal path.
          </p>
        </div>

        {/* Interactive Growth Journey Selector */}
        <div className="bg-nurah-card rounded-3xl p-6 sm:p-8 border border-nurah-berry/15 shadow-lg mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-nurah-berry font-bold mb-6 text-center">
            Interactive Volunteer Growth Progression
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {growthStages.map((stage, idx) => (
              <button
                key={stage.label}
                onClick={() => setActiveStage(idx)}
                className={`p-3 rounded-2xl text-center transition-all duration-300 border flex flex-col items-center justify-center gap-1 ${
                  activeStage === idx
                    ? 'bg-nurah-berry text-nurah-bg border-nurah-berry shadow-md scale-105'
                    : 'bg-nurah-bg/60 hover:bg-nurah-bg border-nurah-berry/10 text-nurah-berry-dark'
                }`}
              >
                <span className="text-[10px] font-mono opacity-80">0{idx + 1}</span>
                <span className="font-serif font-bold text-sm">{stage.label}</span>
              </button>
            ))}
          </div>

          {/* Active Stage Callout Box */}
          <div className="p-4 rounded-2xl bg-nurah-bg-alt/90 border border-nurah-berry/15 flex items-center gap-3 text-sm text-nurah-berry-dark">
            <TrendingUp className="w-5 h-5 text-nurah-berry shrink-0" />
            <div>
              <span className="font-bold text-nurah-berry font-serif mr-2">
                Stage {activeStage + 1} ({growthStages[activeStage].label}):
              </span>
              <span>{growthStages[activeStage].note}</span>
            </div>
          </div>
        </div>

        {/* 3 Core Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className={`bg-nurah-card rounded-3xl p-8 border ${benefit.border} shadow-md nurah-card-hover flex flex-col justify-between`}
              >
                <div>
                  <div className={`p-4 rounded-2xl ${benefit.color} inline-block mb-6 shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-nurah-berry-dark mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-nurah-berry-dark/85 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-nurah-berry/10">
                    {benefit.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-medium text-nurah-berry-dark">
                        <CheckCircle2 className="w-4 h-4 text-nurah-berry shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="text-center">
          <button
            onClick={onOpenJoinModal}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-nurah-berry text-nurah-bg font-medium text-base hover:bg-nurah-berry-dark shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 text-nurah-peach-light" />
            <span>Become a Volunteer</span>
          </button>
        </div>

      </div>
    </section>
  );
}
