import React from 'react';
import { Sparkles, HeartHandshake } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Iman Irfan',
      role: 'Founder',
      bio: 'Iman Irfan is the Founder of Nurah Initiative, driven by a vision to bring light to overlooked issues through awareness, research and meaningful action. She leads Nurah’s overall vision and works to turn small acts of service into lasting impact.',
      photo: '/team/iman-irfan.jpg',
      color: 'border-nurah-rose/40',
      pillBg: 'bg-nurah-rose-light text-nurah-berry',
    },
    {
      id: 2,
      name: 'Aayan Usman',
      role: 'Founder',
      bio: 'Aayan Usman is the Founder of Nurah Initiative and plays a key role in shaping its vision, direction and projects. With a focus on creating meaningful change he works alongside the team to turn ideas into initiatives that make a difference.',
      photo: '/team/aayan-usman.jpg',
      color: 'border-nurah-peach/40',
      pillBg: 'bg-nurah-peach-light text-nurah-berry-dark',
    },
    {
      id: 3,
      name: 'Ayesha Atif',
      role: 'Co-Founder',
      bio: 'Ayesha Atif is the Co Founder of Nurah Initiative, contributing to the development of its projects, ideas and growing team. She works closely with the leadership to help turn Nurah’s vision into action.',
      photo: '/team/ayesha-atif.jpg',
      color: 'border-nurah-sky/40',
      pillBg: 'bg-nurah-sky-light text-nurah-berry-dark',
    },
    {
      id: 4,
      name: 'Faraz',
      role: 'Operations Director',
      bio: 'Faraz serves as Nurah’s Operations Director, overseeing coordination, organisation and the smooth functioning of teams across the initiative. He works closely with different departments to ensure projects are planned and carried out effectively.',
      photo: '/team/faraz.jpg',
      color: 'border-nurah-sage/40',
      pillBg: 'bg-nurah-sage-light text-nurah-berry-dark',
    },
  ];

  return (
    <section id="team" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-nurah-bg relative overflow-hidden">
      
      {/* Background Soft Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-gradient-to-r from-nurah-rose-light/20 via-nurah-peach-light/20 to-nurah-sky-light/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-nurah-berry font-bold mb-3 px-3.5 py-1.5 rounded-full bg-nurah-bg-alt border border-nurah-berry/15">
            LEADERSHIP & TEAM
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-nurah-berry-dark tracking-tight">
            Meet the Team
          </h2>
          <p className="mt-4 text-base text-nurah-berry-dark/80 font-sans">
            The visionary leaders and dedicated coordinators driving Nurah Initiative’s mission forward.
          </p>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`bg-nurah-card rounded-3xl p-6 border ${member.color} shadow-md nurah-card-hover flex flex-col justify-between group overflow-hidden relative`}
            >
              <div>
                {/* Member Photo Container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl mb-6 overflow-hidden bg-nurah-bg-alt border border-nurah-berry/10 shadow-sm">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nurah-berry-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Role Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold ${member.pillBg} mb-3 shadow-xs`}>
                  {member.role}
                </span>

                {/* Name */}
                <h3 className="font-serif text-2xl font-bold text-nurah-berry-dark mb-3">
                  {member.name}
                </h3>

                {/* Bio */}
                <p className="text-xs text-nurah-berry-dark/85 leading-relaxed font-sans mb-4">
                  {member.bio}
                </p>
              </div>

              {/* Card Footer Line */}
              <div className="pt-4 border-t border-nurah-berry/10 flex items-center justify-between text-[11px] font-mono text-nurah-berry font-semibold">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-nurah-berry" />
                  <span>Nurah Initiative</span>
                </span>
                <span className="text-nurah-berry-muted">{member.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
