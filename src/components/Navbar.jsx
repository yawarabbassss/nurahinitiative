import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X, Heart } from 'lucide-react';

export default function Navbar({ onOpenJoinModal, onOpenDonateModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Mission', path: '/mission' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resources', path: '/resources' },
    { name: 'Team', path: '/team' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-nurah-bg/90 backdrop-blur-md border-b border-nurah-berry/15 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-nurah-berry rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-nurah-rose-light via-nurah-peach-light to-nurah-sky-light p-0.5 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img
                src="/nurah-logo.png"
                alt="Nurah Initiative Logo"
                className="w-full h-full object-contain rounded-full bg-nurah-bg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-nurah-berry-dark group-hover:text-nurah-berry transition-colors leading-none">
                Nurah Initiative
              </span>
              <span className="text-[9px] tracking-widest uppercase font-mono text-nurah-berry-muted font-semibold mt-0.5">
                Youth-Led Movement
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-nurah-bg-alt/70 p-1.5 rounded-full border border-nurah-berry/10 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-nurah-card text-nurah-berry shadow-sm'
                      : 'text-nurah-berry-dark hover:text-nurah-berry hover:bg-nurah-card/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Donate + Join */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenDonateModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-nurah-rose/40 text-nurah-berry-dark border border-nurah-rose font-mono font-bold text-xs hover:bg-nurah-rose hover:text-nurah-berry-dark transition-all duration-300 shadow-sm"
            >
              <Heart className="w-3.5 h-3.5 text-nurah-berry fill-nurah-berry/30" />
              <span>Donate Now</span>
            </button>

            <button
              onClick={onOpenJoinModal}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-nurah-berry text-nurah-bg font-medium text-xs hover:bg-nurah-berry-dark transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-nurah-peach-light" />
              <span>Join the Initiative</span>
            </button>
          </div>

          {/* Mobile Actions & Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenDonateModal}
              className="px-3 py-1.5 rounded-full bg-nurah-rose text-nurah-berry-dark text-xs font-mono font-bold"
            >
              Donate
            </button>
            <button
              onClick={onOpenJoinModal}
              className="px-3 py-1.5 rounded-full bg-nurah-berry text-nurah-bg text-xs font-medium"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-nurah-berry-dark hover:bg-nurah-berry/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-nurah-bg/95 backdrop-blur-xl border-b border-nurah-berry/15 px-4 pt-4 pb-6 mt-2 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-nurah-rose-light/50 font-bold text-nurah-berry'
                    : 'text-nurah-berry-dark hover:bg-nurah-rose-light/30'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-nurah-berry/10 mt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonateModal();
                }}
                className="w-full py-3 rounded-full bg-nurah-rose text-nurah-berry-dark text-center font-mono font-bold text-xs shadow-sm flex items-center justify-center gap-1.5"
              >
                <Heart className="w-4 h-4 fill-nurah-berry/30 text-nurah-berry" />
                <span>Donate</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3 rounded-full bg-nurah-berry text-nurah-bg text-center font-medium text-xs shadow-md flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Join</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
