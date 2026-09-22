import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Sparkles, Heart } from 'lucide-react';

export default function Footer({ onOpenJoinModal, onOpenDonateModal }) {
  return (
    <footer className="bg-nurah-berry-dark text-nurah-bg pt-16 pb-12 border-t border-nurah-rose/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-nurah-bg/10">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-nurah-bg p-0.5 shadow-sm">
                <img
                  src="/nurah-logo.png"
                  alt="Nurah Initiative Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-nurah-bg">
                  Nurah Initiative
                </h3>
                <span className="text-[10px] font-mono tracking-widest text-nurah-rose uppercase">
                  Youth-Led Movement
                </span>
              </div>
            </div>

            <p className="text-sm text-nurah-bg/80 leading-relaxed max-w-md font-sans">
              A youth-led movement focused on community support, social awareness, and youth empowerment. Turning individual actions into a collective movement for positive change.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenJoinModal}
                className="px-5 py-2.5 rounded-full bg-nurah-rose text-nurah-berry-dark text-xs font-mono font-bold uppercase hover:bg-nurah-peach transition-colors shadow-sm inline-flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join the Movement</span>
              </button>

              <button
                onClick={onOpenDonateModal}
                className="px-4 py-2.5 rounded-full bg-nurah-bg/10 text-nurah-rose hover:bg-nurah-bg/20 text-xs font-mono font-bold uppercase transition-colors inline-flex items-center gap-1.5 border border-nurah-rose/30"
              >
                <Heart className="w-3.5 h-3.5 fill-nurah-rose/40" />
                <span>Donate</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-nurah-rose font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-nurah-bg/80">
              <li>
                <Link to="/" className="hover:text-nurah-rose transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-nurah-rose transition-colors">
                  About & Core Belief
                </Link>
              </li>
              <li>
                <Link to="/mission" className="hover:text-nurah-rose transition-colors">
                  Mission & Pillars
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-nurah-rose transition-colors">
                  Impact Projects
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-nurah-rose transition-colors">
                  Research & Articles
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-nurah-rose transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="hover:text-nurah-rose transition-colors">
                  Volunteer Opportunities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-nurah-rose transition-colors">
                  Contact & Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Verified Channels */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-nurah-rose font-bold mb-4">
              Verified Channels
            </h4>
            <div className="space-y-3">
              <a
                href="https://linktr.ee/Nurah_initiative"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-nurah-bg/5 hover:bg-nurah-bg/15 border border-nurah-bg/10 text-sm text-nurah-bg transition-colors"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-nurah-rose" />
                  <span>Linktree Hub</span>
                </div>
                <span className="text-[10px] font-mono text-nurah-rose">Official</span>
              </a>

              <a
                href="https://www.instagram.com/nurah_initiative/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-nurah-bg/5 hover:bg-nurah-bg/15 border border-nurah-bg/10 text-sm text-nurah-bg transition-colors"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-nurah-rose" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </div>
                <span className="text-[10px] font-mono text-nurah-rose">@nurah_initiative</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-nurah-bg/60 gap-4 font-mono">
          <div>
            © {new Date().getFullYear()} Nurah Initiative. All rights reserved.
          </div>
          <div>
            Developed by{' '}
            <a
              href="https://yawarabbass.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nurah-rose font-bold hover:underline transition-colors"
            >
              Yawar Abbas
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
