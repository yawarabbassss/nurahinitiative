import React, { useState } from 'react';
import { Layers, Sparkles, Heart, Users, Megaphone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProjectsPage({ onOpenJoinModal }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'support',
      categoryLabel: 'Community Support',
      title: 'Community Relief & Assistance Drive',
      description: 'Mobilizing youth volunteers to deliver essential supplies, warm clothes, and food assistance to vulnerable families.',
      icon: Heart,
      status: 'Active Initiative',
      color: 'border-nurah-rose/40',
      badgeBg: 'bg-nurah-rose-light text-nurah-berry',
    },
    {
      id: 2,
      category: 'awareness',
      categoryLabel: 'Social Awareness',
      title: 'Youth Mental Wellbeing & Awareness Campaign',
      description: 'Educational workshops and digital campaigns breaking stigmas surrounding youth mental health and social pressure.',
      icon: Megaphone,
      status: 'Ongoing Campaign',
      color: 'border-nurah-peach/40',
      badgeBg: 'bg-nurah-peach-light text-nurah-berry-dark',
    },
    {
      id: 3,
      category: 'youth',
      categoryLabel: 'Youth Empowerment',
      title: 'Youth Leadership & Advocacy Fellowship',
      description: 'Training young change-makers in public advocacy, community organization, and leadership skills.',
      icon: Users,
      status: 'Enrolling Cohort',
      color: 'border-nurah-sky/40',
      badgeBg: 'bg-nurah-sky-light text-nurah-berry-dark',
    },
    {
      id: 4,
      category: 'support',
      categoryLabel: 'Community Support',
      title: 'Dignity & Hope Winter Support Drive',
      description: 'Ensuring every family lives with warmth and dignity through cold winter seasons across underserved regions.',
      icon: Heart,
      status: 'Seasonal Project',
      color: 'border-nurah-rose/40',
      badgeBg: 'bg-nurah-rose-light text-nurah-berry',
    },
    {
      id: 5,
      category: 'awareness',
      categoryLabel: 'Social Awareness',
      title: 'Civic Responsibility & Digital Literacy',
      description: 'Empowering young citizens to use digital platforms responsibly for social reform and constructive dialogue.',
      icon: Megaphone,
      status: 'Active Initiative',
      color: 'border-nurah-peach/40',
      badgeBg: 'bg-nurah-peach-light text-nurah-berry-dark',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-nurah-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-nurah-berry font-bold mb-3 px-3.5 py-1.5 rounded-full bg-nurah-bg-alt border border-nurah-berry/15">
            OUR IMPACT IN ACTION
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-nurah-berry-dark tracking-tight leading-tight">
            Nurah Initiative Projects
          </h1>
          <p className="mt-4 text-base sm:text-lg text-nurah-berry-dark/80 font-sans">
            Discover how individual actions turn into organized projects supporting communities, spreading awareness, and empowering youth.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
              filter === 'all'
                ? 'bg-nurah-berry text-nurah-bg shadow-md'
                : 'bg-nurah-card border border-nurah-berry/15 text-nurah-berry-dark hover:bg-nurah-bg-alt'
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setFilter('support')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
              filter === 'support'
                ? 'bg-nurah-rose text-nurah-berry-dark shadow-md'
                : 'bg-nurah-card border border-nurah-berry/15 text-nurah-berry-dark hover:bg-nurah-bg-alt'
            }`}
          >
            Community Support
          </button>
          <button
            onClick={() => setFilter('awareness')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
              filter === 'awareness'
                ? 'bg-nurah-peach text-nurah-berry-dark shadow-md'
                : 'bg-nurah-card border border-nurah-berry/15 text-nurah-berry-dark hover:bg-nurah-bg-alt'
            }`}
          >
            Social Awareness
          </button>
          <button
            onClick={() => setFilter('youth')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
              filter === 'youth'
                ? 'bg-nurah-sky text-nurah-berry-dark shadow-md'
                : 'bg-nurah-card border border-nurah-berry/15 text-nurah-berry-dark hover:bg-nurah-bg-alt'
            }`}
          >
            Youth Empowerment
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`bg-nurah-card rounded-3xl p-8 border ${project.color} shadow-md nurah-card-hover flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${project.badgeBg} shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-nurah-bg border border-nurah-berry/10 text-nurah-berry">
                      {project.status}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-nurah-berry uppercase tracking-widest block mb-2">
                    {project.categoryLabel}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-nurah-berry-dark mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm text-nurah-berry-dark/85 leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-nurah-berry/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-nurah-berry font-bold font-mono">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Youth-Led</span>
                  </div>

                  <button
                    onClick={onOpenJoinModal}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-nurah-berry hover:text-nurah-berry-dark transition-colors"
                  >
                    <span>Get Involved</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
