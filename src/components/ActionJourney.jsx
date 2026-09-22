import React, { useState } from 'react';
import { Heart, HandHeart, Megaphone, Users, Sparkles, ArrowRight, Check } from 'lucide-react';

export default function ActionJourney() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Care',
      subtitle: 'Empathy & Compassion',
      description: 'It begins with an individual heart that notices a need, feels empathy, and refuses to remain indifferent.',
      icon: Heart,
      color: 'bg-nurah-rose-light text-nurah-berry',
      badge: 'Step 01',
    },
    {
      title: 'Serve',
      subtitle: 'Direct Action & Effort',
      description: 'Empathy transforms into action — stepping forward to support communities and lend a helping hand.',
      icon: HandHeart,
      color: 'bg-nurah-peach-light text-nurah-berry-dark',
      badge: 'Step 02',
    },
    {
      title: 'Speak Up',
      subtitle: 'Advocacy & Awareness',
      description: 'Using voice and platform to raise awareness about important social issues and inspire others to listen.',
      icon: Megaphone,
      color: 'bg-nurah-sky-light text-nurah-berry-dark',
      badge: 'Step 03',
    },
    {
      title: 'Collective Movement',
      subtitle: 'Youth Synergy',
      description: 'Individual acts of caring, serving, and speaking up merge into a unified, energetic youth movement.',
      icon: Users,
      color: 'bg-nurah-sage-light text-nurah-berry-dark',
      badge: 'Step 04',
    },
    {
      title: 'Positive Change',
      subtitle: 'Enduring Impact',
      description: 'The ultimate culmination — creating real, visible, lasting hope and dignity for communities.',
      icon: Sparkles,
      color: 'bg-nurah-berry text-nurah-bg',
      badge: 'Final Outcome',
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-nurah-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-nurah-berry font-bold mb-3 px-3.5 py-1.5 rounded-full bg-nurah-bg-alt border border-nurah-berry/15">
            OUR PHILOSOPHY IN MOTION
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-nurah-berry-dark tracking-tight">
            What Your Action Can Become
          </h2>
          <p className="mt-4 text-base text-nurah-berry-dark/80">
            See how small individual deeds evolve into a transformative social movement.
          </p>
        </div>

        {/* Desktop Step Flow Bar */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-12 relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-nurah-berry/15 -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-0 h-1 bg-nurah-berry transition-all duration-500 -translate-y-1/2 z-0"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isPassed = activeStep > index;

            return (
              <button
                key={step.title}
                onClick={() => setActiveStep(index)}
                className="relative z-10 flex flex-col items-center text-center group focus:outline-none"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                    isActive
                      ? 'bg-nurah-berry text-nurah-bg scale-110 ring-4 ring-nurah-rose/40'
                      : isPassed
                      ? 'bg-nurah-berry-dark text-nurah-bg'
                      : 'bg-nurah-card text-nurah-berry-dark border border-nurah-berry/20 group-hover:border-nurah-berry'
                  }`}
                >
                  {isPassed ? <Check className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-nurah-berry-muted font-bold mt-3">
                  {step.badge}
                </span>
                <span
                  className={`font-serif text-sm font-bold mt-1 transition-colors ${
                    isActive ? 'text-nurah-berry font-extrabold' : 'text-nurah-berry-dark'
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Step Card Showcase */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-nurah-card via-nurah-card-subtle to-nurah-bg-alt rounded-3xl p-8 sm:p-10 border border-nurah-berry/20 shadow-xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-nurah-berry/10">
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl ${steps[activeStep].color} shadow-sm`}>
                {React.createElement(steps[activeStep].icon, { className: 'w-8 h-8' })}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-nurah-berry uppercase tracking-widest">
                  {steps[activeStep].badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-nurah-berry-dark">
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-nurah-card border border-nurah-berry/15 text-xs font-mono text-nurah-berry font-semibold">
              {steps[activeStep].subtitle}
            </span>
          </div>

          <p className="text-base sm:text-lg text-nurah-berry-dark/90 leading-relaxed font-sans mb-8">
            {steps[activeStep].description}
          </p>

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center justify-between pt-4">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                activeStep === 0
                  ? 'opacity-40 cursor-not-allowed bg-nurah-card'
                  : 'bg-nurah-card hover:bg-nurah-berry/10 border border-nurah-berry/20 text-nurah-berry-dark'
              }`}
            >
              ← Previous Step
            </button>

            <div className="text-xs font-mono text-nurah-berry-muted font-bold">
              {activeStep + 1} / {steps.length}
            </div>

            <button
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all flex items-center gap-1 ${
                activeStep === steps.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-nurah-card'
                  : 'bg-nurah-berry text-nurah-bg hover:bg-nurah-berry-dark shadow-sm'
              }`}
            >
              <span>Next Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
