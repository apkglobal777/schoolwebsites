import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Templates', href: '/templates' },
  { label: 'Play School', href: '/category/play-school' },
  { label: 'Secondary', href: '/category/secondary-school' },
  { label: 'International', href: '/category/international-school' },
];

export default function MarketplaceHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-platform-bg/90 backdrop-blur-md border-b border-white/5 shadow-premium'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-glow-indigo group-hover:scale-110 transition-transform duration-300">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-lg font-outfit tracking-tight">
                School<span className="gradient-text">Craft</span>
              </span>
              <p className="text-platform-muted text-[10px] tracking-widest uppercase -mt-0.5 hidden sm:block">
                Template Platform
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.href
                    ? 'text-white bg-white/10'
                    : 'text-platform-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/templates" className="btn-ghost text-sm py-2 px-4">
              Browse All
            </Link>
            <Link to="/templates" className="btn-primary text-sm py-2.5 px-5">
              Explore Templates
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-platform-muted hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-platform-surface/95 backdrop-blur-md border-t border-white/5"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-3 text-platform-muted hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/10 mt-2">
                <Link to="/templates" className="btn-primary w-full justify-center">
                  Explore Templates
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
