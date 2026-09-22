import React, { useState } from 'react';
import { BookOpen, Search, ArrowUpRight, Sparkles, Tag, Clock } from 'lucide-react';

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Youth Advocacy', 'Social Policy', 'Community Welfare', 'Research Briefs'];

  const articles = [
    {
      id: 1,
      title: 'From Individual Deed to Collective Movement: The Dynamics of Youth Action',
      category: 'Youth Advocacy',
      summary: 'A deep-dive research briefing exploring how small individual acts of caring and serving catalyze larger societal movements.',
      readTime: '6 min read',
      date: 'September 2026',
      author: 'Nurah Initiative Research Team',
      accentColor: 'border-nurah-rose/40',
      tagBg: 'bg-nurah-rose-light text-nurah-berry',
    },
    {
      id: 2,
      title: 'Dignity and Hope: Addressing Community Need Through Empowerment Rather Than Pity',
      category: 'Community Welfare',
      summary: 'Analyzing human-centered approaches to social welfare that uphold dignity, self-respect, and long-term community resilience.',
      readTime: '8 min read',
      date: 'August 2026',
      author: 'Nurah Initiative Research Team',
      accentColor: 'border-nurah-peach/40',
      tagBg: 'bg-nurah-peach-light text-nurah-berry-dark',
    },
    {
      id: 3,
      title: 'Amplifying Quiet Voices: Strategic Advocacy for Youth in Social Reform',
      category: 'Youth Advocacy',
      summary: 'Guidelines for young advocates on spreading social awareness, constructing impactful dialogues, and engaging local communities.',
      readTime: '5 min read',
      date: 'July 2026',
      author: 'Nurah Initiative Research Team',
      accentColor: 'border-nurah-sky/40',
      tagBg: 'bg-nurah-sky-light text-nurah-berry-dark',
    },
    {
      id: 4,
      title: 'Social Awareness Brief: Understanding Youth Engagement Trends in 2026',
      category: 'Research Briefs',
      summary: 'Statistical trends and qualitative insights showing how youth prioritize volunteering, skill-building, and social responsibility.',
      readTime: '10 min read',
      date: 'June 2026',
      author: 'Nurah Initiative Research Team',
      accentColor: 'border-nurah-sage/40',
      tagBg: 'bg-nurah-sage-light text-nurah-berry-dark',
    },
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-nurah-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-nurah-berry font-bold mb-3 px-3.5 py-1.5 rounded-full bg-nurah-bg-alt border border-nurah-berry/15">
            KNOWLEDGE & RESEARCH HUB
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-nurah-berry-dark tracking-tight leading-tight">
            Research Articles & Insights
          </h1>
          <p className="mt-4 text-base sm:text-lg text-nurah-berry-dark/80 font-sans">
            Explore Nurah Initiative’s research publications, social briefs, and advocacy guides driving informed community change.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-nurah-berry-muted" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search research topics, articles, or keywords..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-nurah-card border border-nurah-berry/20 text-sm text-nurah-berry-dark focus:outline-none focus:border-nurah-berry shadow-sm"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                  activeCategory === cat
                    ? 'bg-nurah-berry text-nurah-bg shadow-sm'
                    : 'bg-nurah-card border border-nurah-berry/15 text-nurah-berry-dark hover:bg-nurah-bg-alt'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Articles List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <article
                key={article.id}
                className={`bg-nurah-card rounded-3xl p-8 border ${article.accentColor} shadow-md nurah-card-hover flex flex-col md:flex-row md:items-center justify-between gap-6`}
              >
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className={`px-3 py-1 rounded-full font-bold ${article.tagBg}`}>
                      {article.category}
                    </span>
                    <span className="text-nurah-berry-muted font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-nurah-berry-dark leading-tight hover:text-nurah-berry transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-sm text-nurah-berry-dark/80 leading-relaxed font-sans">
                    {article.summary}
                  </p>

                  <div className="pt-2 text-xs font-mono text-nurah-berry-muted font-medium">
                    Published: {article.date} • {article.author}
                  </div>
                </div>

                <div className="shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-nurah-berry/10">
                  <button className="px-5 py-2.5 rounded-full bg-nurah-bg border border-nurah-berry/20 text-nurah-berry font-mono font-bold text-xs hover:bg-nurah-berry hover:text-nurah-bg transition-all flex items-center gap-1.5 shadow-sm">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-12 bg-nurah-card rounded-3xl border border-nurah-berry/10 p-8">
              <BookOpen className="w-12 h-12 text-nurah-berry-muted mx-auto mb-3" />
              <p className="font-serif text-lg font-bold text-nurah-berry-dark">No research articles match your query.</p>
              <p className="text-xs text-nurah-berry-dark/70 mt-1">Try resetting search filters or keywords.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
