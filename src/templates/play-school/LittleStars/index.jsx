import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Star, Sparkles, Heart, Music, Shield, Trees, Puzzle,
  Users, BookOpen, Palette, Sun, Cloud, Play, ChevronLeft, ChevronRight,
  Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Menu, X,
  GraduationCap, Camera, Mic
} from 'lucide-react';
import { littleStarsConfig as c } from './config.js';
import { useCounter } from '../../../hooks/useCounter.js';
import { useScrollReveal } from '../../../hooks/useScrollReveal.js';

/* ─── Animation Variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (d = 0) => ({ opacity: 1, transition: { duration: 0.5, delay: d } }),
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (d = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.5, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

/* ─── Stat Counter ───────────────────────────────────── */
function StatCount({ value, suffix, inView }) {
  const count = useCounter(value, 2000, inView);
  return <span>{count}{suffix}</span>;
}

/* ─── Floating Nav Pill (inside hero) ───────────────── */
function FloatingNavPill({ onScrollTo }) {
  const [active, setActive] = useState('Home');
  const navItems = ['Home', 'About', 'Programs', 'Tour', 'Contact'];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex"
    >
      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-2xl px-2 py-2 rounded-full shadow-xl border border-white/60"
           style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}>
        {/* Logo dot */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: 10 }}
          className="w-9 h-9 rounded-full flex items-center justify-center mr-1 cursor-pointer flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #FFB703, #FB6F92)' }}
        >
          <span className="text-white font-bold text-base">✦</span>
        </motion.div>

        {/* Nav links */}
        {navItems.map(item => (
          <button
            key={item}
            onClick={() => { setActive(item); onScrollTo(item); }}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
              active === item
                ? 'text-[#263238]'
                : 'text-[#5F6B73] hover:text-[#263238]'
            }`}
            style={active === item ? { background: '#FFF3CD' } : {}}
          >
            {item}
          </button>
        ))}

        {/* Book Visit CTA */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onScrollTo('Contact')}
          className="flex items-center gap-1.5 ml-1 px-4 py-2 bg-[#263238] text-white rounded-full text-xs font-bold"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Book a Visit <ChevronRight size={12} />
        </motion.button>
      </div>
    </motion.nav>
  );
}

/* ─── Hero Decorations ───────────────────────────────── */
function HeroDecorations() {
  return (
    <>
      {/* Top-left cluster */}
      <div className="absolute top-16 left-8 z-20 hidden lg:block">
        <span className="text-3xl ls-float" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>⭐</span>
      </div>
      <div className="absolute top-28 left-20 z-20 hidden lg:block">
        <span className="text-lg ls-float-d2" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}>✨</span>
      </div>

      {/* Top-right cluster */}
      <div className="absolute top-14 right-12 z-20 hidden lg:block">
        <span className="text-2xl ls-float-r" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>🌟</span>
      </div>
      <div className="absolute top-32 right-24 z-20 hidden lg:block">
        <span className="text-xl ls-float-d3" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}>☁️</span>
      </div>

      {/* Mid decorations */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 z-20 hidden xl:block">
        <span className="text-2xl ls-float-d2">🎈</span>
      </div>
      <div className="absolute top-1/2 right-6 -translate-y-1/2 z-20 hidden xl:block">
        <span className="text-2xl ls-float-d3">🌈</span>
      </div>
    </>
  );
}

/* ─── Tour Card ──────────────────────────────────────── */
function TourCard({ card, index }) {
  return (
    <motion.div
      custom={index * 0.1}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="ls-tour-card group"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <motion.img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${card.color}33, transparent)` }} />
        <div
          className="absolute top-3 left-3 w-10 h-10 rounded-2xl flex items-center justify-center text-xl shadow-md"
          style={{ backgroundColor: `${card.color}22`, backdropFilter: 'blur(8px)', border: `1.5px solid ${card.color}44` }}
        >
          {card.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="h-0.5 w-8 rounded-full mb-3" style={{ backgroundColor: card.color }} />
        <h3 className="ls-heading text-lg text-[#263238] mb-2">{card.title}</h3>
        <p className="text-[#5F6B73] text-sm leading-relaxed mb-4">{card.description}</p>
        <motion.button
          className="flex items-center gap-1.5 text-sm font-bold"
          style={{ color: card.color, fontFamily: "'Outfit', sans-serif" }}
          whileHover="hover"
        >
          Explore
          <motion.span variants={{ hover: { x: 5 } }} transition={{ duration: 0.2 }}>
            <ArrowRight size={14} />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ─── Value Pill (Marquee item) ──────────────────────── */
function ValuePill({ item }) {
  return (
    <motion.div
      className="ls-value-pill"
      whileHover={{ scale: 1.03, borderColor: item.color }}
    >
      <span className="text-xl">{item.icon}</span>
      <span className="font-semibold text-[#263238]">{item.label}</span>
    </motion.div>
  );
}

/* ─── Program Card ───────────────────────────────────── */
function ProgramCard({ prog, index }) {
  return (
    <motion.div
      custom={index * 0.12}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="ls-program-card group overflow-hidden"
    >
      {/* Top image strip */}
      <div className="relative h-40 overflow-hidden">
        <motion.img
          src={prog.image}
          alt={prog.title}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${prog.color}55 0%, transparent 60%)` }} />
        {/* Icon badge */}
        <div
          className="absolute bottom-3 left-4 w-11 h-11 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
          style={{ backgroundColor: prog.bg, border: `2px solid ${prog.color}` }}
        >
          {prog.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-5" style={{ backgroundColor: prog.bg }}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="ls-heading text-xl text-[#263238]">{prog.title}</h3>
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: `${prog.color}22`, color: prog.color }}
          >
            {prog.age}
          </span>
        </div>
        <p className="text-[#5F6B73] text-sm leading-relaxed mb-4">{prog.desc}</p>
        <motion.button
          whileHover={{ gap: 8 }}
          className="flex items-center gap-1.5 text-sm font-bold"
          style={{ color: prog.color, fontFamily: "'Outfit', sans-serif" }}
        >
          Learn More <ArrowRight size={13} />
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ─── Gallery Card ───────────────────────────────────── */
function GalleryCard({ item, index }) {
  const sizes = [
    'row-span-2', '', 'row-span-2', '', '', 'row-span-2', '', ''
  ];
  return (
    <motion.div
      custom={index * 0.07}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${sizes[index] || ''}`}
      style={{ aspectRatio: sizes[index] ? '1/2' : '4/3' }}
    >
      <motion.img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-[#263238]/0 group-hover:bg-[#263238]/50 transition-all duration-300 flex items-end p-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
        >
          <span className="text-white font-bold text-sm ls-heading">{item.label}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MAIN TEMPLATE
══════════════════════════════════════════ */
export default function LittleStarsTemplate() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [statsRef, statsInView] = useScrollReveal({ threshold: 0.3 });

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const scrollToSection = (name) => {
    setMenuOpen(false);
    const map = {
      Home: '#ls-home', About: '#ls-about', Programs: '#ls-programs',
      Tour: '#ls-tour', Contact: '#ls-contact',
    };
    const el = document.querySelector(map[name] || '#ls-home');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const prevT = () => setTestimonialIdx(p => (p - 1 + c.testimonials.length) % c.testimonials.length);
  const nextT = () => setTestimonialIdx(p => (p + 1) % c.testimonials.length);

  return (
    <div
      className="min-h-screen overflow-x-hidden light-theme"
      style={{ backgroundColor: '#FFFDF8', fontFamily: "'Inter', sans-serif" }}
    >

      {/* ════════════════════════════════
          STICKY HEADER (shows on scroll)
      ════════════════════════════════ */}
      <motion.header
        animate={{ y: scrolled ? 0 : -80, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#f0ede8] shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold"
                 style={{ background: 'linear-gradient(135deg, #FFB703, #FB6F92)' }}>✦</div>
            <div>
              <div className="ls-heading text-sm text-[#263238] leading-none">Little Stars</div>
              <div className="text-[10px] text-[#5F6B73] uppercase tracking-wider">Play School</div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {['Home', 'About', 'Programs', 'Tour', 'Contact'].map(item => (
              <button key={item} onClick={() => scrollToSection(item)}
                className="px-4 py-2 text-sm font-medium text-[#5F6B73] hover:text-[#263238] hover:bg-[#FFF3CD] rounded-full transition-all duration-200">
                {item}
              </button>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('Contact')}
            className="hidden md:flex ls-btn-primary text-xs px-5 py-2.5"
          >
            Book a Visit <ArrowRight size={13} />
          </motion.button>

          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#263238] rounded-full hover:bg-[#FFF3CD] transition-colors">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && scrolled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-[#f0ede8] shadow-xl"
          >
            <nav className="px-4 py-4 space-y-1">
              {['Home', 'About', 'Programs', 'Tour', 'Contact'].map(item => (
                <button key={item} onClick={() => scrollToSection(item)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-[#263238] hover:bg-[#FFF3CD] rounded-xl transition-all">
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════
          HERO SECTION
      ════════════════════════════════ */}
      <section id="ls-home" className="relative w-full" style={{ minHeight: '680px', height: '92vh', maxHeight: '900px' }}>
        {/* Rounded hero container */}
        <div className="relative mx-4 md:mx-8 lg:mx-12 h-full rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl"
             style={{ border: '1px solid rgba(255,255,255,0.5)' }}>

          {/* BG Video / Image */}
          <div className="absolute inset-0">
            <video
              autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000"
              poster={c.hero.bgImage}
            >
              <source src={c.hero.videoSrc} type="video/mp4" />
            </video>
            {/* Fallback image shown when video fails or is loading */}
            <img
              src={c.hero.bgImage}
              alt="Little Stars Play School campus"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: -1 }}
            />
            {/* Gradient overlay — left-bottom for readability */}
            <div className="absolute inset-0"
                 style={{ background: 'linear-gradient(135deg, rgba(38,50,56,0.72) 0%, rgba(38,50,56,0.45) 50%, rgba(38,50,56,0.2) 100%)' }} />
            <div className="absolute inset-0"
                 style={{ background: 'linear-gradient(to top, rgba(38,50,56,0.55) 0%, transparent 50%)' }} />
          </div>

          {/* Floating decorations */}
          <HeroDecorations />

          {/* Hero content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-8 pb-28">
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                custom={0}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{
                  background: 'rgba(255,183,3,0.18)',
                  color: '#FFE066',
                  border: '1px solid rgba(255,183,3,0.35)',
                  backdropFilter: 'blur(8px)',
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                <Sparkles size={14} /> {c.hero.badge}
              </motion.div>

              {/* Headline */}
              <motion.h1
                custom={0.25}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="ls-heading text-[42px] sm:text-[54px] lg:text-[64px] text-white mb-4"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.25)' }}
              >
                {c.hero.headline}
                <br />
                <span style={{ color: '#FFB703' }}>{c.hero.headlineAccent}</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                custom={0.45}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              >
                {c.hero.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                custom={0.6}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('Tour')}
                  id="ls-hero-tour"
                  className="ls-btn-primary"
                  style={{ background: '#263238', fontSize: '15px', padding: '15px 30px' }}
                >
                  <Play size={16} fill="currentColor" /> {c.hero.cta1}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, borderColor: '#FFB703' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('Programs')}
                  id="ls-hero-programs"
                  className="ls-btn-secondary"
                  style={{ fontSize: '15px', padding: '14px 30px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
                >
                  {c.hero.cta2} <ArrowRight size={15} />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Floating nav pill */}
          <FloatingNavPill onScrollTo={scrollToSection} />
        </div>
      </section>

      {/* ════════════════════════════════
          SCHOOL TOUR SECTION
      ════════════════════════════════ */}
      <section id="ls-tour" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14"
          >
            <span className="ls-label mb-4">🏫 School Tour</span>
            <h2 className="ls-heading text-3xl sm:text-4xl lg:text-5xl text-[#263238] mt-4 mb-4">
              {c.tour.heading}
            </h2>
            <p className="text-[#5F6B73] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              {c.tour.subtitle}
            </p>
          </motion.div>

          {/* Tour cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.tour.cards.map((card, i) => (
              <TourCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          MARQUEE — School Values
      ════════════════════════════════ */}
      <section className="py-12 overflow-hidden" style={{ backgroundColor: '#FFFDF8' }}>
        <div className="ls-marquee-mask">
          {/* Double the items for seamless loop */}
          <div className="flex gap-4 ls-marquee-track" style={{ width: 'max-content' }}>
            {[...c.marqueeValues, ...c.marqueeValues].map((item, i) => (
              <ValuePill key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          WHY LITTLE STARS
      ════════════════════════════════ */}
      <section id="ls-about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
               style={{ backgroundColor: '#FFF8EF' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14"
          >
            <span className="ls-label mb-4">💛 Why Choose Us</span>
            <h2 className="ls-heading text-3xl sm:text-4xl lg:text-5xl text-[#263238] mt-4 mb-4">
              Why Parents Choose Little Stars
            </h2>
            <p className="text-[#5F6B73] text-base max-w-xl mx-auto">
              More than a school — a warm, joyful community where every child thrives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.whyUs.map((item, i) => (
              <motion.div
                key={item.number}
                custom={i * 0.12}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}
                className="bg-white rounded-3xl p-7 border border-[#f0ede8]"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
              >
                {/* Number */}
                <div className="text-4xl font-black mb-4 ls-heading"
                     style={{ color: `${item.color}30`, lineHeight: 1 }}>
                  {item.number}
                </div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                     style={{ backgroundColor: `${item.color}18` }}>
                  {item.icon}
                </div>
                <h3 className="ls-heading text-lg text-[#263238] mb-3">{item.title}</h3>
                <p className="text-[#5F6B73] text-sm leading-relaxed">{item.desc}</p>
                {/* Accent line */}
                <div className="mt-4 h-0.5 w-8 rounded-full" style={{ backgroundColor: item.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          PROGRAMS
      ════════════════════════════════ */}
      <section id="ls-programs" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14"
          >
            <span className="ls-label mb-4">📚 Our Programs</span>
            <h2 className="ls-heading text-3xl sm:text-4xl lg:text-5xl text-[#263238] mt-4 mb-4">
              Learning Designed for Little Minds
            </h2>
            <p className="text-[#5F6B73] text-base max-w-xl mx-auto">
              Age-appropriate programs that blend play, creativity, and structured learning — giving every child the perfect start.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.programs.map((prog, i) => (
              <ProgramCard key={prog.title} prog={prog} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SCHOOL LIFE GALLERY
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFDF8' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14"
          >
            <span className="ls-label mb-4">📸 School Life</span>
            <h2 className="ls-heading text-3xl sm:text-4xl lg:text-5xl text-[#263238] mt-4 mb-4">
              Every Day Is an Adventure
            </h2>
            <p className="text-[#5F6B73] text-base max-w-xl mx-auto">
              A glimpse into the joyful world of Little Stars — filled with learning, laughter and love.
            </p>
          </motion.div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
            {c.gallery.map((item, i) => {
              const isLarge = i === 0 || i === 4;
              return (
                <motion.div
                  key={item.src}
                  custom={i * 0.07}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className={`relative overflow-hidden rounded-2xl group cursor-pointer ${isLarge ? 'row-span-2' : ''}`}
                >
                  <motion.img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-[#263238]/0 group-hover:bg-[#263238]/45 transition-all duration-300 flex items-end p-3">
                    <span className="text-white text-xs font-bold ls-heading opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          STATISTICS
      ════════════════════════════════ */}
      <section
        className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(135deg, #263238 0%, #1a2428 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-14"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: 'rgba(255,183,3,0.15)', color: '#FFB703', border: '1px solid rgba(255,183,3,0.3)' }}
            >
              <Star size={12} /> Growing Together
            </span>
            <h2 className="ls-heading text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
              A Community of Joy & Learning
            </h2>
          </motion.div>

          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {c.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i * 0.12}
                variants={scaleIn}
                initial="hidden"
                animate={statsInView ? 'visible' : 'hidden'}
                viewport={{ once: true }}
                className="rounded-3xl p-7 text-center"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div
                  className="ls-heading text-4xl sm:text-5xl mb-2"
                  style={{ color: stat.color }}
                >
                  <StatCount value={stat.value} suffix={stat.suffix} inView={statsInView} />
                </div>
                <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          PARENT TESTIMONIALS
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFF8EF' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <span className="ls-label mb-4">💬 Testimonials</span>
            <h2 className="ls-heading text-3xl sm:text-4xl lg:text-5xl text-[#263238] mt-4">
              What Parents Say
            </h2>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl p-8 sm:p-12 text-center"
                style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.06)', border: '1px solid #f0ede8' }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#FFB703] text-[#FFB703]" />
                  ))}
                </div>

                {/* Opening quote mark */}
                <div className="text-6xl ls-heading mb-3" style={{ color: '#FFB703', lineHeight: 1 }}>"</div>

                <p className="text-[#263238] text-base sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
                   style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500 }}>
                  {c.testimonials[testimonialIdx].quote}
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={c.testimonials[testimonialIdx].avatar}
                    alt={c.testimonials[testimonialIdx].name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-offset-2"
                    style={{ ringColor: '#FFB703' }}
                  />
                  <div className="text-left">
                    <p className="ls-heading text-base text-[#263238]">
                      {c.testimonials[testimonialIdx].name}
                    </p>
                    <p className="text-sm text-[#5F6B73] mt-0.5">
                      {c.testimonials[testimonialIdx].child}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prevT}
                className="w-10 h-10 rounded-full bg-white border border-[#f0ede8] shadow flex items-center justify-center text-[#263238] hover:bg-[#FFB703] hover:border-[#FFB703] hover:text-white transition-all duration-200">
                <ChevronLeft size={16} />
              </button>
              {c.testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === testimonialIdx ? 24 : 8,
                    height: 8,
                    backgroundColor: i === testimonialIdx ? '#FFB703' : '#E0D8CE',
                  }}
                />
              ))}
              <button onClick={nextT}
                className="w-10 h-10 rounded-full bg-white border border-[#f0ede8] shadow flex items-center justify-center text-[#263238] hover:bg-[#FFB703] hover:border-[#FFB703] hover:text-white transition-all duration-200">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          VISIT CTA
      ════════════════════════════════ */}
      <section id="ls-contact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Floating bg stars */}
        <div className="absolute top-8 left-8 text-4xl ls-float select-none pointer-events-none opacity-30">⭐</div>
        <div className="absolute top-16 right-12 text-3xl ls-float-r select-none pointer-events-none opacity-20">✨</div>
        <div className="absolute bottom-12 left-20 text-3xl ls-float-d2 select-none pointer-events-none opacity-20">🌟</div>
        <div className="absolute bottom-8 right-8 text-2xl ls-float-d3 select-none pointer-events-none opacity-25">⭐</div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            {/* Central star */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 text-4xl mx-auto"
              style={{ background: 'linear-gradient(135deg, #FFB703, #FB6F92)' }}
            >
              ✦
            </motion.div>

            <span className="ls-label mb-5">🌟 Come Visit Us</span>
            <h2 className="ls-heading text-3xl sm:text-4xl lg:text-6xl text-[#263238] mt-5 mb-5">
              Come See Where
              <br />
              <span style={{ color: '#FFB703' }}>Little Stars Shine</span>
            </h2>
            <p className="text-[#5F6B73] text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Visit our campus, meet our wonderful teachers and experience the Little Stars difference — we'd love to welcome your family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                id="ls-book-visit"
                className="ls-btn-primary"
                style={{ fontSize: '16px', padding: '16px 36px' }}
              >
                Book a School Visit <ArrowRight size={16} />
              </motion.button>
              <a
                href={`tel:${c.phone}`}
                className="ls-btn-secondary"
                style={{ fontSize: '16px', padding: '15px 36px' }}
              >
                <Phone size={16} /> Call Us
              </a>
            </div>

            {/* Contact details strip */}
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#5F6B73]">
              {[
                { Icon: MapPin, value: c.address, color: '#FB6F92' },
                { Icon: Phone, value: c.phone, color: '#FFB703' },
                { Icon: Mail, value: c.email, color: '#8ECAE6' },
                { Icon: Clock, value: c.hours, color: '#72C02C' },
              ].map(({ Icon, value, color }) => (
                <div key={value} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: `${color}18` }}>
                    <Icon size={13} style={{ color }} />
                  </div>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          FOOTER
      ════════════════════════════════ */}
      <footer className="relative overflow-hidden" style={{ backgroundColor: '#1a2428' }}>
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #FFB703 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8ECAE6 0%, transparent 50%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                     style={{ background: 'linear-gradient(135deg, #FFB703, #FB6F92)' }}>✦</div>
                <div>
                  <div className="ls-heading text-white text-base leading-none">Little Stars</div>
                  <div className="text-white/50 text-[10px] uppercase tracking-wider">Play School</div>
                </div>
              </div>
              <p className="text-white/65 text-xs leading-relaxed mb-5">
                {c.subTagline}
              </p>
              {/* Social */}
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Facebook, label: 'Facebook' },
                  { Icon: Youtube, label: 'YouTube' },
                ].map(({ Icon, label }) => (
                  <a key={label} href="#"
                     aria-label={label}
                     className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                     style={{ background: 'rgba(255,255,255,0.08)' }}
                     onMouseEnter={e => e.currentTarget.style.backgroundColor = '#FFB703'}
                     onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="ls-heading text-white text-sm mb-4 pb-2 border-b border-white/10 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {c.footerLinks.school.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/65 text-xs hover:text-[#FFB703] transition-colors flex items-center gap-1.5">
                      <span style={{ color: '#FFB703' }}>›</span> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="ls-heading text-white text-sm mb-4 pb-2 border-b border-white/10 uppercase tracking-wider">
                Programs
              </h4>
              <ul className="space-y-2.5">
                {c.footerLinks.programs.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/65 text-xs hover:text-[#FFB703] transition-colors flex items-center gap-1.5">
                      <span style={{ color: '#FFB703' }}>›</span> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="ls-heading text-white text-sm mb-4 pb-2 border-b border-white/10 uppercase tracking-wider">
                Contact
              </h4>
              <div className="space-y-3">
                {[
                  { Icon: MapPin, val: c.address, color: '#FB6F92' },
                  { Icon: Phone, val: c.phone, color: '#FFB703' },
                  { Icon: Mail, val: c.email, color: '#8ECAE6' },
                  { Icon: Clock, val: c.hours, color: '#72C02C' },
                ].map(({ Icon, val, color }) => (
                  <p key={val} className="text-white/65 text-xs flex items-start gap-2">
                    <Icon size={11} className="mt-0.5 flex-shrink-0" style={{ color }} />
                    {val}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} {c.schoolName}. All Rights Reserved.
            </p>
            <div className="flex gap-5">
              {['Privacy Policy', 'Terms of Use', 'Sitemap'].map(l => (
                <a key={l} href="#" className="text-white/40 text-xs hover:text-[#FFB703] transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
