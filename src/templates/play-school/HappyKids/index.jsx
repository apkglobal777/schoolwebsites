import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MapPin, Menu, X, Star, ArrowRight, ChevronRight,
  Heart, Shield, Bus, Utensils, BookOpen, Music, Palette, Leaf,
  CheckCircle, Instagram, Facebook, Youtube, MessageCircle,
  ChevronLeft, Play, Award, Users, Clock, Sparkles
} from 'lucide-react';
import { happyKidsConfig as c } from './config.js';
import { useCounter } from '../../../hooks/useCounter.js';
import { useScrollReveal } from '../../../hooks/useScrollReveal.js';

// ── Animated Counter ────────────────────────────────────
function StatCounter({ value, suffix, label, icon, inView }) {
  const count = useCounter(value, 2200, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center px-4"
    >
      <div className="text-5xl mb-2">{icon}</div>
      <div className="text-4xl sm:text-5xl font-extrabold font-nunito text-[#FF6B6B]">
        {count}{suffix}
      </div>
      <div className="text-[#636E72] font-medium mt-1 text-sm">{label}</div>
    </motion.div>
  );
}

// ── Floating Shapes ─────────────────────────────────────
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="float-shape-1 absolute top-20 left-8 text-5xl opacity-70">⭐</div>
      <div className="float-shape-2 absolute top-32 right-12 text-4xl opacity-60">🌈</div>
      <div className="float-shape-3 absolute bottom-40 left-16 text-5xl opacity-70">🎈</div>
      <div className="float-shape-4 absolute top-1/2 right-8 text-4xl opacity-50">🦋</div>
      <div className="float-shape-5 absolute bottom-20 right-20 text-5xl opacity-60">🌸</div>
      <div className="float-shape-1 absolute top-60 left-1/4 text-3xl opacity-40">✨</div>
      <div className="float-shape-3 absolute top-16 right-1/4 text-4xl opacity-50">🎀</div>
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#FFE66D] rounded-full opacity-10" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#4ECDC4] rounded-full opacity-10" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-[#FF6B6B] rounded-full opacity-5" />
    </div>
  );
}

// ── Main Template Component ──────────────────────────────
export default function HappyKidsTemplate() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [statsRef, statsInView] = useScrollReveal({ threshold: 0.3 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Programs', href: '#programs' },
    { label: 'Activities', href: '#activities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const galleryCategories = ['All', ...new Set(c.gallery.map(g => g.category))];
  const filteredGallery = activeGalleryFilter === 'All'
    ? c.gallery
    : c.gallery.filter(g => g.category === activeGalleryFilter);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="font-nunito bg-[#FFF9F0] min-h-screen overflow-x-hidden light-theme">

      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" onClick={() => scrollTo('#home')} className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] rounded-2xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform">
                {c.logo}
              </div>
              <div>
                <span className="text-[#2D3436] font-extrabold text-lg leading-none">{c.schoolName}</span>
                <p className="text-[#FF6B6B] text-[10px] font-semibold tracking-wider uppercase">{c.schoolTagline}</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-2 rounded-xl text-[#2D3436] font-semibold text-sm hover:bg-[#FF6B6B]/10 hover:text-[#FF6B6B] transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Admission CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${c.phone}`} className="flex items-center gap-1.5 text-[#636E72] text-sm hover:text-[#FF6B6B] transition-colors">
                <Phone size={14} /> {c.phone}
              </a>
              <button
                onClick={() => scrollTo('#admission')}
                className="pk-btn-primary text-sm px-5 py-2.5"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              id="hk-mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#2D3436] hover:bg-[#FF6B6B]/10 rounded-xl transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-[#FFE66D]/30 shadow-xl"
            >
              <nav className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="px-4 py-3 text-left text-[#2D3436] font-semibold text-sm hover:bg-[#FF6B6B]/10 hover:text-[#FF6B6B] rounded-xl transition-all"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-3 border-t border-[#FFE66D]/30 mt-2">
                  <button
                    onClick={() => scrollTo('#admission')}
                    className="pk-btn-primary w-full justify-center text-sm"
                  >
                    Apply for Admission
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <FloatingShapes />

        {/* Wavy background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F0] via-[#FFF0E8] to-[#FFF5F5]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#FFE66D]/40 text-[#2D3436] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#FFE66D]"
              >
                <Sparkles size={14} className="text-[#FF6B6B]" />
                Admissions Open 2025–26
                <span className="bg-[#FF6B6B] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">New</span>
              </motion.div>

              {/* Headline */}
              <h1 className="pk-heading text-4xl sm:text-5xl lg:text-6xl text-[#2D3436] mb-4 text-balance">
                {c.heroTitle}{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                    {c.heroTitleHighlight}
                  </span>
                  {/* Underline decoration */}
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#FFE66D" strokeWidth="4" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="text-[#636E72] text-lg leading-relaxed mb-8 max-w-lg">
                {c.heroSubtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollTo('#admission')}
                  id="hk-hero-admission-cta"
                  className="pk-btn-primary"
                >
                  {c.heroCTA} <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollTo('#programs')}
                  className="pk-btn-secondary"
                >
                  {c.heroSecondaryCTA}
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {c.affiliations.map(aff => (
                  <span key={aff} className="flex items-center gap-1.5 text-xs font-semibold text-[#636E72] bg-white px-3 py-1.5 rounded-full border border-[#E5E7EB] shadow-sm">
                    <CheckCircle size={12} className="text-[#4ECDC4]" /> {aff}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right — Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=80"
                  alt="Happy children learning at Happy Kids Academy"
                  className="w-full h-[400px] lg:h-[520px] object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B6B]/20 to-transparent" />
              </div>

              {/* Floating cards on image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 float-shape-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#4ECDC4]/15 rounded-xl flex items-center justify-center text-2xl">👧</div>
                  <div>
                    <p className="font-extrabold text-[#2D3436] text-xl">500+</p>
                    <p className="text-[#636E72] text-xs">Happy Children</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 float-shape-3"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-[#FFE66D] fill-[#FFE66D]" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-[#2D3436] text-sm">5.0 Rating</p>
                    <p className="text-[#636E72] text-xs">By 200+ Parents</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-1/2 -right-6 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] rounded-2xl shadow-xl p-4 float-shape-4"
              >
                <div className="text-center text-white">
                  <p className="font-extrabold text-2xl">{c.estYear}</p>
                  <p className="text-white/80 text-xs">Est. Year</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40 Q360 80 720 40 Q1080 0 1440 40 L1440 80 L0 80 Z" fill="white" opacity="0.6" />
            <path d="M0 60 Q360 20 720 60 Q1080 100 1440 60 L1440 80 L0 80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS SECTION
      ══════════════════════════════════════════ */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {c.stats.map((stat, i) => (
              <StatCounter key={stat.label} {...stat} inView={statsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROGRAMS SECTION
      ══════════════════════════════════════════ */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFF9F0] to-[#FFF0F8]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="pk-section-label mb-4">🎓 Our Programs</span>
            <h2 className="pk-heading text-3xl sm:text-4xl lg:text-5xl text-[#2D3436] mt-4">
              Programs Designed for{' '}
              <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
                Every Child
              </span>
            </h2>
            <p className="text-[#636E72] text-lg mt-3 max-w-2xl mx-auto">
              From our youngest Nursery learners to our UKG graduates, each program is crafted to nurture curiosity, creativity, and confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.programs.map((prog, i) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="pk-card group cursor-pointer"
              >
                {/* Color band */}
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: prog.color }}
                />
                <div className="p-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${prog.color}25` }}
                  >
                    {prog.icon}
                  </div>
                  <h3 className="pk-heading text-xl text-[#2D3436] mb-1">{prog.name}</h3>
                  <p className="text-[#FF6B6B] text-sm font-bold mb-3">📅 {prog.ageGroup}</p>
                  <p className="text-[#636E72] text-sm leading-relaxed mb-4">{prog.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5">
                    {prog.features.map(f => (
                      <span
                        key={f}
                        className="text-[11px] font-semibold px-2 py-1 rounded-full"
                        style={{ backgroundColor: `${prog.color}20`, color: prog.color }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1540479859555-17af45c78602?w=700&q=80"
                  alt="Teachers and children at Happy Kids Academy"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#FFE66D]/30 rounded-full blur-2xl" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#4ECDC4]/20 rounded-full blur-xl" />

              {/* Award badge */}
              <div className="absolute top-6 -right-4 bg-white rounded-2xl shadow-xl p-4 float-shape-2">
                <div className="text-center">
                  <div className="text-3xl mb-1">🏆</div>
                  <p className="text-[#2D3436] font-bold text-sm">Award Winning</p>
                  <p className="text-[#636E72] text-xs">Best Play School 2024</p>
                </div>
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="pk-section-label mb-4">💝 Why Choose Us</span>
              <h2 className="pk-heading text-3xl sm:text-4xl text-[#2D3436] mt-4 mb-4">
                A Place Where Children{' '}
                <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                  Truly Thrive
                </span>
              </h2>
              <p className="text-[#636E72] text-lg mb-8 leading-relaxed">
                We believe every child is unique. Our approach combines the best of Montessori, play-based, and structured learning to bring out the very best in every child.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {c.whyChooseUs.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 p-4 bg-[#FFF9F0] rounded-2xl hover:bg-[#FFF0E8] transition-colors"
                  >
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-[#2D3436] text-sm mb-1">{item.title}</h4>
                      <p className="text-[#636E72] text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ACTIVITIES SECTION
      ══════════════════════════════════════════ */}
      <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4ECDC4]/10 to-[#FFF9F0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="pk-section-label mb-4">🎮 Fun Activities</span>
            <h2 className="pk-heading text-3xl sm:text-4xl lg:text-5xl text-[#2D3436] mt-4">
              Learning Through{' '}
              <span className="bg-gradient-to-r from-[#4ECDC4] to-[#A855F7] bg-clip-text text-transparent">
                Play & Discovery
              </span>
            </h2>
            <p className="text-[#636E72] text-lg mt-3 max-w-2xl mx-auto">
              Every day is packed with exciting activities that develop the whole child — body, mind, and spirit.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {c.activities.map((act, i) => (
              <motion.div
                key={act.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white rounded-3xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="text-5xl mb-3">{act.icon}</div>
                <h3 className="font-extrabold text-[#2D3436] text-sm mb-2">{act.name}</h3>
                <p className="text-[#636E72] text-xs leading-relaxed">{act.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════ */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="pk-section-label mb-4">📸 Our Gallery</span>
            <h2 className="pk-heading text-3xl sm:text-4xl text-[#2D3436] mt-4">
              Moments That Make{' '}
              <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] bg-clip-text text-transparent">
                Memories
              </span>
            </h2>
          </motion.div>

          {/* Filter */}
          <div className="flex gap-2 flex-wrap justify-center mb-8">
            {galleryCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveGalleryFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeGalleryFilter === cat
                    ? 'bg-[#FF6B6B] text-white shadow-glow-coral'
                    : 'bg-[#FFF9F0] text-[#636E72] hover:bg-[#FF6B6B]/10 hover:text-[#FF6B6B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGalleryFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              {filteredGallery.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group"
                  style={{ aspectRatio: i === 0 || i === 5 ? '4/3' : '1/1' }}
                  onClick={() => setLightboxImg(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#FF6B6B]/0 group-hover:bg-[#FF6B6B]/30 transition-all duration-300 flex items-center justify-center">
                    <Play size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-semibold">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Lightbox */}
          <AnimatePresence>
            {lightboxImg && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
                onClick={() => setLightboxImg(null)}
              >
                <button className="absolute top-4 right-4 text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <X size={20} />
                </button>
                <motion.img
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  src={lightboxImg.src}
                  alt={lightboxImg.alt}
                  className="max-w-4xl max-h-[85vh] w-full object-contain rounded-2xl"
                  onClick={e => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFF9F0] to-[#FFF0F8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="pk-section-label mb-4">💬 Happy Parents</span>
            <h2 className="pk-heading text-3xl sm:text-4xl text-[#2D3436] mt-4">
              What Our Parents Say
            </h2>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(c.testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={22} className="text-[#FFE66D] fill-[#FFE66D]" />
                  ))}
                </div>
                <p className="text-[#2D3436] text-lg sm:text-xl leading-relaxed mb-8 italic max-w-2xl mx-auto">
                  "{c.testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={c.testimonials[activeTestimonial].avatar}
                    alt={c.testimonials[activeTestimonial].name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-[#FF6B6B]/20"
                  />
                  <div className="text-left">
                    <p className="font-extrabold text-[#2D3436]">{c.testimonials[activeTestimonial].name}</p>
                    <p className="text-[#636E72] text-sm">{c.testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {c.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeTestimonial ? 'w-8 bg-[#FF6B6B]' : 'w-2.5 bg-[#FF6B6B]/30'
                  }`}
                />
              ))}
            </div>

            {/* Arrow navigation */}
            <button
              onClick={() => setActiveTestimonial(p => (p - 1 + c.testimonials.length) % c.testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setActiveTestimonial(p => (p + 1) % c.testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EVENTS
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="pk-section-label mb-4">🎉 Upcoming Events</span>
            <h2 className="pk-heading text-3xl sm:text-4xl text-[#2D3436] mt-4">
              Fun-Filled Events Ahead
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {c.events.map((ev, i) => (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="pk-card p-6 border-t-4"
                style={{ borderTopColor: ev.color }}
              >
                <div className="text-5xl mb-4">{ev.icon}</div>
                <h3 className="pk-heading text-lg text-[#2D3436] mb-2">{ev.title}</h3>
                <div className="flex items-center gap-2 text-[#636E72] text-sm mb-1">
                  <Clock size={12} /> {ev.date}
                </div>
                <div className="flex items-center gap-2 text-[#636E72] text-sm mb-3">
                  <Clock size={12} /> {ev.time}
                </div>
                <p className="text-[#636E72] text-sm leading-relaxed">{ev.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADMISSION CTA
      ══════════════════════════════════════════ */}
      <section id="admission" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B] via-[#FF8E53] to-[#FFE66D]" />
        <FloatingShapes />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">🎒</div>
            <h2 className="pk-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              {c.admission.title}
            </h2>
            <p className="text-white/90 text-xl mb-4">{c.admission.subtitle}</p>
            <p className="text-white/80 text-base mb-10">
              📅 Accepting applications for <strong>{c.admission.ageGroup}</strong>
            </p>

            {/* Admission Steps */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              {c.admission.steps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                    <span className="w-5 h-5 bg-white text-[#FF6B6B] rounded-full flex items-center justify-center text-xs font-extrabold">
                      {i + 1}
                    </span>
                    {step}
                  </div>
                  {i < c.admission.steps.length - 1 && (
                    <ChevronRight className="text-white/60 hidden sm:block" size={16} />
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                id="hk-apply-now"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#FF6B6B] font-extrabold text-lg rounded-full hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Apply Now <ArrowRight size={20} />
              </button>
              <a
                href={`tel:${c.phone}`}
                className="inline-flex items-center gap-2 px-10 py-4 bg-white/20 text-white font-bold text-lg rounded-full hover:bg-white/30 transition-all duration-200 backdrop-blur-sm border border-white/30"
              >
                <Phone size={20} /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT SECTION
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="pk-section-label mb-4">📞 Contact Us</span>
              <h2 className="pk-heading text-3xl sm:text-4xl text-[#2D3436] mt-4 mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-[#636E72] text-lg mb-8 leading-relaxed">
                Schedule a visit to our campus, talk to our admissions team, or just say hello! We're always happy to connect with families.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Phone size={20} className="text-[#FF6B6B]" />, label: 'Phone', value: c.phone },
                  { icon: <Mail size={20} className="text-[#4ECDC4]" />, label: 'Email', value: c.email },
                  { icon: <MapPin size={20} className="text-[#A855F7]" />, label: 'Address', value: c.address },
                  { icon: <Clock size={20} className="text-[#FFE66D]" />, label: 'School Hours', value: c.timings },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-[#FFF9F0] rounded-2xl">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#636E72] text-xs font-semibold uppercase tracking-wider">{item.label}</p>
                      <p className="text-[#2D3436] font-semibold mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFF9F0] rounded-3xl p-8"
            >
              <h3 className="pk-heading text-2xl text-[#2D3436] mb-6">Schedule a School Visit</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#636E72] text-sm font-semibold mb-1.5 block">Parent's Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-[#2D3436] focus:outline-none focus:border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B]/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-[#636E72] text-sm font-semibold mb-1.5 block">Child's Age</label>
                    <select className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-[#2D3436] focus:outline-none focus:border-[#FF6B6B] transition-all">
                      <option>Select age</option>
                      <option>1.5 – 2 Years</option>
                      <option>2 – 3 Years</option>
                      <option>3 – 4 Years</option>
                      <option>4 – 5 Years</option>
                      <option>5 – 6 Years</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[#636E72] text-sm font-semibold mb-1.5 block">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-[#2D3436] focus:outline-none focus:border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B]/20 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="text-[#636E72] text-sm font-semibold mb-1.5 block">Program Interested In</label>
                  <select className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-[#2D3436] focus:outline-none focus:border-[#FF6B6B] transition-all">
                    <option>Select program</option>
                    {c.programs.map(p => <option key={p.id}>{p.name} ({p.ageGroup})</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[#636E72] text-sm font-semibold mb-1.5 block">Message (Optional)</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-[#2D3436] focus:outline-none focus:border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B]/20 transition-all resize-none"
                    placeholder="Any specific questions or requirements?"
                  />
                </div>
                <button
                  type="submit"
                  id="hk-contact-submit"
                  className="pk-btn-primary w-full justify-center"
                >
                  Schedule a Visit <ArrowRight size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-[#2D3436] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] rounded-2xl flex items-center justify-center text-2xl">
                  {c.logo}
                </div>
                <div>
                  <p className="font-extrabold text-xl font-nunito">{c.schoolName}</p>
                  <p className="text-[#FF6B6B] text-xs font-semibold">{c.schoolTagline}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-5">
                {c.schoolDescription}
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: c.social.facebook },
                  { Icon: Instagram, href: c.social.instagram },
                  { Icon: Youtube, href: c.social.youtube },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-9 h-9 bg-white/10 hover:bg-[#FF6B6B] rounded-xl flex items-center justify-center transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold font-nunito mb-4 text-[#FFE66D]">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Programs', 'Activities', 'Gallery', 'Events', 'Admissions'].map(l => (
                  <li key={l}>
                    <button className="text-gray-400 text-sm hover:text-white transition-colors">
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold font-nunito mb-4 text-[#4ECDC4]">Contact Us</h4>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm flex items-start gap-2">
                  <MapPin size={14} className="text-[#FF6B6B] mt-0.5 flex-shrink-0" />
                  {c.address}
                </p>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <Phone size={14} className="text-[#4ECDC4]" /> {c.phone}
                </p>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <Mail size={14} className="text-[#FFE66D]" /> {c.email}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {c.schoolName}. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Made with ❤️ for young learners</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
