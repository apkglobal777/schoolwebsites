import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, Menu, X, ChevronRight, ArrowRight,
  Search, Facebook, Instagram, Youtube, Linkedin, Twitter,
  Star, Users, GraduationCap, BarChart2, Heart, Info, Edit3,
  CheckCircle, Play, Eye, Calendar, Newspaper, Trophy, ChevronLeft,
  ChevronDown
} from 'lucide-react';
import { eliteSchoolConfig as c } from './config.js';
import { useCounter } from '../../../hooks/useCounter.js';
import { useScrollReveal } from '../../../hooks/useScrollReveal.js';

/* ═══════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════ */
function AnimatedCount({ value, suffix, inView }) {
  const count = useCounter(value, 2000, inView);
  return <span>{count.toLocaleString()}{suffix}</span>;
}

/* ═══════════════════════════════════════
   SECTION TITLE
═══════════════════════════════════════ */
function SectionTitle({ title, light = false, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <h2 className={`text-3xl lg:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-[#1a2e4a]'}`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
        {title}
      </h2>
      <div className={`flex ${center ? 'justify-center' : ''} gap-1 mb-6`}>
        <div className="h-1 w-10 bg-[#8dc63f] rounded-full" />
        <div className="h-1 w-4 bg-[#8dc63f]/50 rounded-full" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   STAT ICON
═══════════════════════════════════════ */
function StatIcon({ type }) {
  const cls = 'w-8 h-8 text-[#8dc63f]';
  if (type === 'users') return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
  if (type === 'graduation') return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
  if (type === 'chart') return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
  return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

/* ═══════════════════════════════════════
   MAIN TEMPLATE
═══════════════════════════════════════ */
export default function EliteSchoolTemplate() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Featured News');
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [statsRef, statsInView] = useScrollReveal({ threshold: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredMedia = activeFilter === 'All'
    ? c.media.items
    : c.media.items.filter(i => i.category === activeFilter);

  const prevTestimonial = () =>
    setTestimonialIdx(p => (p - 1 + c.testimonials.items.length) % c.testimonials.items.length);
  const nextTestimonial = () =>
    setTestimonialIdx(p => (p + 1) % c.testimonials.items.length);

  return (
    <div className="font-sans bg-white min-h-screen overflow-x-hidden light-theme" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ══════════════════════════════════
          TOP CONTACT BAR
      ══════════════════════════════════ */}
      <div className="bg-[#1a2e4a] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <a href={`tel:${c.phone}`} className="flex items-center gap-1.5 hover:text-[#8dc63f] transition-colors">
                <Phone size={11} /> {c.phone}
              </a>
              <a href={`mailto:${c.email}`} className="flex items-center gap-1.5 hover:text-[#8dc63f] transition-colors">
                <Mail size={11} /> {c.email}
              </a>
              <span className="flex items-center gap-1.5 text-white/70">
                <MapPin size={11} /> {c.address}
              </span>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              {[
                { Icon: Facebook, href: c.social.facebook },
                { Icon: Instagram, href: c.social.instagram },
                { Icon: Youtube, href: c.social.youtube },
                { Icon: Linkedin, href: c.social.linkedin },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="hover:text-[#8dc63f] transition-colors">
                  <Icon size={13} />
                </a>
              ))}
              <button className="hover:text-white transition-colors">
                <Search size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          MAIN HEADER
      ══════════════════════════════════ */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'top-0 bg-[#1a2e4a]/95 backdrop-blur-md shadow-xl'
            : 'top-0 md:top-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" onClick={() => scrollTo('#home')} className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-[#8dc63f] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="text-white font-black text-[10px] leading-none">ELITE</div>
                    <div className="text-[#1a2e4a] font-black text-[9px] leading-none mt-0.5">SCHOOL</div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-black text-lg leading-none tracking-wide"
                     style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  ELITE <span className="text-[#8dc63f]">SCHOOL</span>
                </div>
                <div className="text-white/60 text-[9px] tracking-widest uppercase mt-0.5">{c.schoolMotto}</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0">
              {c.navLinks.map((link, i) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative group ${
                    i === 0 ? 'text-[#8dc63f]' : 'text-white hover:text-[#8dc63f]'
                  }`}
                >
                  {link.label}
                  {i === 0 && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8dc63f]" />
                  )}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8dc63f] scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </button>
              ))}
            </nav>

            {/* Admission CTA */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => scrollTo('#admission')}
                className="bg-[#8dc63f] hover:bg-[#7ab330] text-white text-sm font-bold px-5 py-2.5 rounded transition-colors duration-200"
              >
                Admissions Open
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              id="elite-mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white w-10 h-10 flex items-center justify-center rounded hover:bg-white/10 transition-colors"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#1a2e4a] border-t border-white/10"
            >
              <nav className="px-4 py-3 space-y-1">
                {c.navLinks.map(link => (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 hover:text-[#8dc63f] rounded text-sm font-medium transition-all"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2 pb-1">
                  <button className="w-full bg-[#8dc63f] text-white font-bold py-3 rounded text-sm">
                    Admissions Open
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ══════════════════════════════════
          HERO SECTION
      ══════════════════════════════════ */}
      <section id="home" className="relative h-[85vh] lg:h-screen flex items-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0">
          <img
            src={c.hero.image}
            alt="Elite School campus"
            className="w-full h-full object-cover scale-105"
          />
          {/* Gradient overlay — matches reference: left-heavy dark */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2e]/85 via-[#1a2e4a]/60 to-[#1a2e4a]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/40 via-transparent to-transparent" />
        </div>

        {/* Content — left-aligned like reference */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-px w-8 bg-[#8dc63f]" />
              <span className="text-[#8dc63f] text-xs font-bold uppercase tracking-[0.2em]">
                {c.hero.superText}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {c.hero.headline}
              <br />
              <span className="text-[#8dc63f]">{c.hero.headlineAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              {c.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button
                onClick={() => scrollTo('#about')}
                id="elite-hero-explore"
                className="px-7 py-3 bg-[#8dc63f] hover:bg-[#7ab330] text-white font-bold text-sm rounded transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                {c.hero.cta1}
              </button>
              <button
                onClick={() => scrollTo('#admission')}
                id="elite-hero-apply"
                className="px-7 py-3 border-2 border-white text-white font-bold text-sm rounded hover:bg-white hover:text-[#1a2e4a] transition-all duration-200"
              >
                {c.hero.cta2}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#8dc63f]" />
      </section>

      {/* ══════════════════════════════════
          ADMISSION BANNER
          (Lime green, student image left)
      ══════════════════════════════════ */}
      <section className="relative bg-[#8dc63f] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-stretch">
            {/* Student image — overlapping upward like reference */}
            <div className="relative sm:w-48 lg:w-56 flex-shrink-0 -mt-8 sm:-mt-12">
              <div className="h-full min-h-[100px] sm:min-h-[120px] overflow-hidden">
                <img
                  src={c.admissionBanner.image}
                  alt="Student"
                  className="w-full h-full object-cover object-top"
                  style={{ maxHeight: 160 }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 py-4 px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg lg:text-xl leading-tight">
                  {c.admissionBanner.title}
                </h3>
                <p className="text-white/90 text-sm mt-1">{c.admissionBanner.subtitle}</p>
                <p className="text-white/75 text-xs mt-0.5">{c.admissionBanner.detail}</p>
              </div>
              <button
                onClick={() => scrollTo('#admission')}
                id="elite-banner-cta"
                className="flex-shrink-0 flex items-center gap-2 bg-[#1a2e4a] hover:bg-[#243d59] text-white font-bold px-6 py-3 rounded text-sm transition-colors duration-200 whitespace-nowrap"
              >
                {c.admissionBanner.cta} <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          DISCOVER OUR SCHOOL
          (Two-column: text left, image right)
      ══════════════════════════════════ */}
      <section id="about" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle title={c.intro.heading} />
              <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-5">
                {c.intro.body}
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {c.intro.points.map(pt => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-[#444]">
                    <ChevronRight size={14} className="text-[#8dc63f] flex-shrink-0" /> {pt}
                  </li>
                ))}
              </ul>
              <button
                className="flex items-center gap-2 text-[#8dc63f] font-bold text-sm hover:gap-3 transition-all duration-200 group"
              >
                {c.intro.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden rounded-sm shadow-xl">
                <img
                  src={c.intro.image}
                  alt="Elite School building"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#8dc63f]/20 rounded-sm -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#1a2e4a]/10 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          HIGHLIGHTS — TABBED NEWS
          (Background image section with tabs)
      ══════════════════════════════════ */}
      <section id="highlights" className="relative py-16 lg:py-20 overflow-hidden bg-[#1a2e4a]">
        {/* Background — solid fallback so text is always visible */}
        <div className="absolute inset-0">
          <img src={c.highlights.bgImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,46,74,0.82)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={c.highlights.heading} light />

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-0 mb-10 -ml-px">
            {c.highlights.tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 text-sm font-semibold transition-all duration-200 border border-white/20 ${
                  activeTab === tab
                    ? 'bg-[#8dc63f] text-white border-[#8dc63f]'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* News Cards */}
          <AnimatePresence mode="wait">
            {activeTab === 'Featured News' && (
              <motion.div
                key="news"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {c.highlights.news.map((item, i) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white group overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative overflow-hidden bg-[#c8d8e8]" style={{ minHeight: '176px', height: '176px' }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                        style={{ minHeight: '176px' }}
                        onError={e => { e.target.style.display = 'none'; }}
                      />
                      <div className="absolute top-3 left-0 bg-[#8dc63f] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider z-10">
                        {item.category}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="h-0.5 w-8 bg-[#8dc63f] mb-3" />
                      <h3 className="text-[#1a2e4a] font-bold text-sm leading-snug mb-2 group-hover:text-[#8dc63f] transition-colors line-clamp-2"
                          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        {item.title}
                      </h3>
                      <p className="text-[#777] text-xs leading-relaxed mb-3 line-clamp-2">{item.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#999] text-xs flex items-center gap-1">
                          <Calendar size={11} /> {item.date}
                        </span>
                        <button className="text-[#8dc63f] text-xs font-bold hover:gap-2 flex items-center gap-1 transition-all">
                          Read More <ArrowRight size={11} />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
            {activeTab === 'Upcoming Events' && (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {c.highlights.events.map((ev, i) => (
                  <div key={i} className="bg-white p-5 shadow-lg">
                    <div className="h-0.5 w-8 bg-[#8dc63f] mb-3" />
                    <span className="text-[#8dc63f] text-[10px] font-bold uppercase tracking-wider">{ev.category}</span>
                    <h4 className="text-[#1a2e4a] font-bold text-sm mt-1 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {ev.title}
                    </h4>
                    <p className="text-[#999] text-xs flex items-center gap-1">
                      <Calendar size={11} /> {ev.date}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
            {(activeTab === 'Achievements' || activeTab === 'Calendar') && (
              <motion.div
                key="other"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 text-white/60"
              >
                <Trophy size={40} className="mx-auto mb-3 text-[#8dc63f]" />
                <p className="text-white font-semibold">More {activeTab} content coming soon.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* View all */}
          <div className="mt-8 flex justify-end">
            <button className="flex items-center gap-2 text-[#8dc63f] text-sm font-bold hover:gap-3 transition-all">
              View All <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          OUR GOALS — STATISTICS
          (Dark navy, school bg, line icons)
      ══════════════════════════════════ */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-[#1a2e4a]">
        {/* Solid navy bg ensures text always visible even if image fails */}
        <div className="absolute inset-0">
          <img src={c.stats.bgImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13,27,46,0.88)' }} />
        </div>

        <div
          ref={statsRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle title={c.stats.heading} light />
              <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-md">
                {c.stats.subtitle}
              </p>
            </motion.div>

            {/* Right — stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {c.stats.items.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12 }}
                  className="flex flex-col items-center text-center border border-white/20 p-5 hover:border-[#8dc63f]/40 transition-colors duration-300" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                >
                  <StatIcon type={stat.icon} />
                  <div className="text-3xl sm:text-4xl font-black text-white mt-3 mb-1">
                    <AnimatedCount value={stat.value} suffix={stat.suffix} inView={statsInView} />
                  </div>
                  <div className="text-white/90 text-xs uppercase tracking-wider leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          MEDIA SECTION
          (Filtered gallery)
      ══════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={c.media.heading} />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-0 mb-8 border-b border-[#ddd]">
            {c.media.filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 text-sm font-semibold border-b-2 transition-all duration-200 -mb-px ${
                  activeFilter === filter
                    ? 'border-[#8dc63f] text-[#8dc63f] bg-white'
                    : 'border-transparent text-[#777] hover:text-[#1a2e4a]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery grid — matches reference's compact 4-wide layout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2"
            >
              {filteredMedia.map((item, i) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative group overflow-hidden cursor-pointer aspect-[4/3]"
                  onClick={() => setLightbox(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1a2e4a]/0 group-hover:bg-[#1a2e4a]/60 transition-all duration-300 flex items-center justify-center">
                    <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#8dc63f] h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Lightbox */}
          <AnimatePresence>
            {lightbox && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                onClick={() => setLightbox(null)}
              >
                <button className="absolute top-5 right-5 text-white bg-white/10 w-10 h-10 flex items-center justify-center rounded hover:bg-[#8dc63f] transition-colors">
                  <X size={20} />
                </button>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  onClick={e => e.stopPropagation()}
                  className="max-w-4xl w-full"
                >
                  <img src={lightbox.src} alt={lightbox.alt} className="w-full max-h-[80vh] object-contain rounded" />
                  <p className="text-white/70 text-center mt-3 text-sm">{lightbox.alt}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════
          ADMISSIONS PROCESS
          (White bg, large faded numbers)
      ══════════════════════════════════ */}
      <section id="admission" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTitle title={c.admissionProcess.heading} center />
            <p className="text-[#777] text-sm sm:text-base max-w-xl mx-auto -mt-2">
              {c.admissionProcess.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 relative">
            {/* Connecting line on desktop */}
            <div className="hidden sm:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-[#e0e0e0] z-0" />

            {c.admissionProcess.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative p-6 sm:p-8 border border-[#eee] hover:border-[#8dc63f]/50 hover:shadow-lg transition-all duration-300 group bg-white z-10 mx-1"
              >
                {/* Large faded number behind — matches reference */}
                <div className="absolute top-0 right-4 text-[100px] font-black text-[#f0f0f0] leading-none select-none group-hover:text-[#8dc63f]/10 transition-colors duration-300">
                  {step.number}
                </div>

                {/* Step number badge */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#1a2e4a] text-white font-black text-lg flex items-center justify-center rounded mb-4 group-hover:bg-[#8dc63f] transition-colors duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-[#1a2e4a] font-bold text-base sm:text-lg mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-[#777] text-sm leading-relaxed mb-5">{step.desc}</p>
                  <button
                    id={`elite-step-${i + 1}`}
                    className="flex items-center gap-1.5 text-[#8dc63f] text-sm font-bold hover:gap-3 transition-all duration-200 border border-[#8dc63f] px-4 py-1.5 rounded-sm hover:bg-[#8dc63f] hover:text-white"
                  >
                    {step.cta} <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ALUMNI TESTIMONIALS
          (Full-bleed campus photo, dark overlay)
      ══════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0f1e33]">
        <div className="absolute inset-0">
          <img
            src={c.testimonials.bgImage}
            alt="Elite School campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,46,74,0.85), rgba(13,27,46,0.92), rgba(26,46,74,0.85))' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle title={c.testimonials.heading} light center />

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIdx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              {/* Alumni avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={c.testimonials.items[testimonialIdx].avatar}
                    alt={c.testimonials.items[testimonialIdx].name}
                    className="w-20 h-20 rounded-full object-cover ring-3 ring-[#8dc63f] ring-offset-2 ring-offset-transparent"
                  />
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <div className="text-[#8dc63f] text-5xl font-serif leading-none mb-2">"</div>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto italic">
                  {c.testimonials.items[testimonialIdx].quote}
                </p>
                <div className="text-[#8dc63f] text-5xl font-serif leading-none mt-1 flex justify-end max-w-2xl mx-auto">"</div>
              </div>

              {/* Name & year */}
              <div>
                <p className="text-white font-bold text-base">
                  {c.testimonials.items[testimonialIdx].name}
                </p>
                <p className="text-[#8dc63f] text-sm mt-0.5">
                  {c.testimonials.items[testimonialIdx].year} • {c.testimonials.items[testimonialIdx].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-9 h-9 border border-white/30 text-white flex items-center justify-center hover:bg-[#8dc63f] hover:border-[#8dc63f] transition-all rounded-sm"
            >
              <ChevronLeft size={16} />
            </button>
            {c.testimonials.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIdx(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === testimonialIdx ? 'bg-[#8dc63f] w-6' : 'bg-white/30'
                }`}
              />
            ))}
            <button
              onClick={nextTestimonial}
              className="w-9 h-9 border border-white/30 text-white flex items-center justify-center hover:bg-[#8dc63f] hover:border-[#8dc63f] transition-all rounded-sm"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FOOTER
          (Dark bg with campus overlay, 4 columns)
      ══════════════════════════════════ */}
      <footer id="contact" className="relative overflow-hidden bg-[#0a1628]">
        {/* Solid dark background ensures full visibility regardless of image load */}
        <div className="absolute inset-0">
          <img src={c.footer.bgImage} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,22,40,0.92)' }} />
        </div>

        <div className="relative z-10">
          {/* Main footer grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

              {/* Column 1 — Brand */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-[#8dc63f] rounded flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-white font-black text-[9px] leading-none">ELITE</div>
                      <div className="text-[#1a2e4a] font-black text-[8px] leading-none">SCHOOL</div>
                    </div>
                  </div>
                  <span className="text-white font-bold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                    ELITE SCHOOL
                  </span>
                </div>
                <p className="text-white/85 text-xs leading-relaxed mb-5">
                  {c.footer.description}
                </p>
                {/* Social icons */}
                <div className="flex gap-2.5">
                  {[Facebook, Instagram, Youtube, Linkedin, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 bg-white/10 hover:bg-[#8dc63f] flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 rounded-sm"
                    >
                      <Icon size={13} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 2 — Our School */}
              <div>
                <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-white/10 pb-2">
                  Our School
                </h4>
                <ul className="space-y-2.5">
                  {c.footer.columns.ourSchool.map(item => (
                    <li key={item.label}>
                      <a href={item.href} className="text-white/85 text-xs hover:text-[#8dc63f] transition-colors flex items-center gap-1.5">
                        <ChevronRight size={11} className="text-[#8dc63f]" /> {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 — Resources */}
              <div>
                <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-white/10 pb-2">
                  Resources
                </h4>
                <ul className="space-y-2.5 mb-6">
                  {c.footer.columns.resources.map(item => (
                    <li key={item.label}>
                      <a href={item.href} className="text-white/85 text-xs hover:text-[#8dc63f] transition-colors flex items-center gap-1.5">
                        <ChevronRight size={11} className="text-[#8dc63f]" /> {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Contact inline */}
                <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-wider border-b border-white/10 pb-2">
                  Contact
                </h4>
                <div className="space-y-2">
                  {[
                    { Icon: MapPin, val: 'New Delhi, India' },
                    { Icon: Phone, val: c.phone },
                    { Icon: Mail, val: c.email },
                    { Icon: Clock, val: c.hours },
                  ].map(({ Icon, val }) => (
                    <p key={val} className="text-white/85 text-xs flex items-start gap-1.5">
                      <Icon size={11} className="text-[#8dc63f] mt-0.5 flex-shrink-0" /> {val}
                    </p>
                  ))}
                </div>
              </div>

              {/* Column 4 — Recent Posts */}
              <div>
                <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-white/10 pb-2">
                  Recent Posts
                </h4>
                <div className="space-y-4">
                  {c.footer.recentPosts.map((post, i) => (
                    <a key={i} href="#" className="flex gap-3 group">
                      <div className="w-14 h-12 flex-shrink-0 overflow-hidden rounded-sm">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <p className="text-white text-xs leading-snug group-hover:text-[#8dc63f] transition-colors line-clamp-2">
                          {post.title}
                        </p>
                        <p className="text-white/65 text-[10px] mt-1 flex items-center gap-1">
                          <Calendar size={9} /> {post.date}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="border-t border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/75">
                <p>© {new Date().getFullYear()} Elite School. All Rights Reserved.</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-[#8dc63f] transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-[#8dc63f] transition-colors">Terms & Conditions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
