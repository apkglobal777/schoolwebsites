import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, MapPin, Menu, X, Star, ArrowRight, ChevronRight,
  ChevronLeft, Award, Users, BookOpen, Clock, GraduationCap,
  Facebook, Instagram, Youtube, Twitter, Linkedin,
  CheckCircle, ExternalLink, Newspaper, Calendar
} from 'lucide-react';
import { modernAcademyConfig as c } from './config.js';
import { useCounter } from '../../../hooks/useCounter.js';
import { useScrollReveal } from '../../../hooks/useScrollReveal.js';

// ── Animated Stat Counter ───────────────────────────────
function StatCounter({ value, suffix, label, icon, inView, index }) {
  const count = useCounter(value, 2000, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="text-center py-8 px-6 relative"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-4xl sm:text-5xl font-bold font-playfair text-[#C9A84C] mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[#64748B] font-medium text-sm uppercase tracking-widest">{label}</div>
    </motion.div>
  );
}

// ── Main Template Component ──────────────────────────────
export default function ModernAcademyTemplate() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroImage, setHeroImage] = useState(0);
  const [activeStream, setActiveStream] = useState('science');
  const [activeFacility, setActiveFacility] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState('Alumni');
  const [lightboxImg, setLightboxImg] = useState(null);

  const [statsRef, statsInView] = useScrollReveal({ threshold: 0.3 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance hero
  useEffect(() => {
    const t = setInterval(() => {
      setHeroImage(p => (p + 1) % c.heroImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeAcademic = c.academics.find(a => a.id === activeStream) || c.academics[0];
  const filteredTestimonials = c.testimonials.filter(t => t.type === activeTab);

  return (
    <div className="font-sans bg-[#F8FAFC] min-h-screen overflow-x-hidden light-theme">

      {/* ══════════════════════════════════════════
          TOP ANNOUNCEMENT BAR
      ══════════════════════════════════════════ */}
      <div className="bg-[#1E3A5F] text-white py-2 px-4 text-center text-sm">
        <span className="text-[#C9A84C] font-bold">📢 Admissions Open 2025–26</span>
        {' — '}Classes VI to XII. Limited seats.
        <button onClick={() => scrollTo('#admission')} className="ml-3 text-[#C9A84C] underline font-semibold hover:no-underline">
          Apply Now →
        </button>
      </div>

      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md border-b border-[#E2E8F0]'
            : 'bg-white border-b border-[#E2E8F0]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" onClick={() => scrollTo('#home')} className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-[#1E3A5F] rounded-xl flex items-center justify-center text-2xl shadow-lg">
                {c.logo}
              </div>
              <div>
                <span className="text-[#1E3A5F] font-bold text-lg font-playfair leading-none">{c.schoolName}</span>
                <p className="text-[#64748B] text-[10px] font-semibold tracking-wider uppercase mt-0.5">
                  {c.board} Affiliated | Est. {c.estYear}
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 text-[#1E293B] font-medium text-sm hover:text-[#2563EB] hover:bg-[#EFF6FF] rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${c.mobile}`} className="flex items-center gap-1.5 text-[#64748B] text-sm hover:text-[#1E3A5F] transition-colors font-medium">
                <Phone size={13} /> {c.mobile}
              </a>
              <button
                onClick={() => scrollTo('#admission')}
                id="ma-admission-cta"
                className="ma-btn-gold text-sm px-5 py-2.5"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              id="ma-mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#1E3A5F] hover:bg-[#EFF6FF] rounded-xl transition-colors"
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
              className="lg:hidden bg-white border-t border-[#E2E8F0] shadow-xl"
            >
              <nav className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="px-4 py-3 text-left text-[#1E293B] font-medium text-sm hover:bg-[#EFF6FF] hover:text-[#2563EB] rounded-xl transition-all"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-3 border-t border-[#E2E8F0] mt-2">
                  <button
                    onClick={() => scrollTo('#admission')}
                    className="ma-btn-primary w-full justify-center"
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
      <section id="home" className="relative h-[85vh] lg:h-screen flex items-center overflow-hidden">
        {/* Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={heroImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={c.heroImages[heroImage]}
              alt={`Modern Academy campus view ${heroImage + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#1E3A5F]/70 to-[#1E3A5F]/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-[#C9A84C]/20 text-[#C9A84C] border border-[#C9A84C]/40 px-4 py-2 rounded-md text-sm font-bold mb-6 backdrop-blur-sm"
            >
              <Award size={14} />
              {c.board} Affiliated | {c.affiliation}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="ma-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 text-balance"
            >
              {c.heroTitle}
              <br />
              <span className="text-[#C9A84C]">{c.heroTitleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl"
            >
              {c.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollTo('#admission')}
                id="ma-hero-apply"
                className="ma-btn-gold text-base"
              >
                {c.heroCTA} <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo('#gallery')}
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold border-2 border-white/40 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                {c.heroSecondaryCTA} <ExternalLink size={16} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero image dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {c.heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroImage(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === heroImage ? 'w-8 bg-[#C9A84C]' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Quick contact bar at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-0 left-0 right-0 bg-[#1E3A5F]/90 backdrop-blur-md border-t border-white/10 hidden lg:block"
        >
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            {[
              { icon: <Phone size={15} />, label: 'Admissions', value: c.mobile },
              { icon: <Mail size={15} />, label: 'Email', value: c.admissionsEmail },
              { icon: <MapPin size={15} />, label: 'Location', value: 'Sector 18, Noida, UP' },
              { icon: <Clock size={15} />, label: 'School Hours', value: c.timings },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-white/80">
                <div className="text-[#C9A84C]">{item.icon}</div>
                <div>
                  <p className="text-white/50 text-[9px] uppercase tracking-wider">{item.label}</p>
                  <p className="text-white text-xs font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          STATS SECTION
      ══════════════════════════════════════════ */}
      <section className="py-4 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10"
          >
            {c.stats.map((stat, i) => (
              <StatCounter key={stat.label} {...stat} inView={statsInView} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════════ */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="ma-section-label mb-4">About Modern Academy</span>
              <h2 className="ma-heading text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mt-4 mb-6">
                A Legacy of{' '}
                <span className="text-[#C9A84C]">Excellence</span>{' '}
                Since {c.estYear}
              </h2>
              <p className="text-[#64748B] text-lg leading-relaxed mb-6">
                {c.about.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Board', value: c.board },
                  { label: 'Established', value: c.estYear },
                  { label: 'Classes', value: 'VI – XII' },
                  { label: 'Campus', value: '15 Acres' },
                ].map(item => (
                  <div key={item.label} className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                    <p className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-[#1E3A5F] font-bold text-lg">{item.value}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo('#admission')}
                className="ma-btn-primary"
              >
                Explore More <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Principal's Message */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="bg-[#1E3A5F] rounded-2xl p-8 text-white relative overflow-hidden">
                  {/* Decorative quote */}
                  <div className="absolute top-4 right-6 text-[#C9A84C]/10 font-serif text-[120px] leading-none select-none">"</div>

                  <div className="relative z-10">
                    <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-4 block">Principal's Message</span>
                    <p className="text-white/85 leading-relaxed text-base mb-6 italic">
                      "{c.about.principalMessage}"
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                      <img
                        src={c.about.principalImage}
                        alt={c.about.principalName}
                        className="w-14 h-14 rounded-full object-cover ring-3 ring-[#C9A84C]/50"
                      />
                      <div>
                        <p className="font-bold text-white">{c.about.principalName}</p>
                        <p className="text-white/60 text-sm">{c.about.principalDesignation}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vision card */}
                <div className="mt-4 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl p-5">
                  <p className="text-[#1E3A5F] font-bold text-sm mb-1">Our Vision</p>
                  <p className="text-[#64748B] text-sm leading-relaxed">{c.about.vision}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="ma-section-label mb-4">Why Choose Us</span>
            <h2 className="ma-heading text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mt-4">
              More Than Just a School
            </h2>
            <p className="text-[#64748B] text-lg mt-3 max-w-2xl mx-auto">
              We go beyond textbooks to develop leaders, thinkers, and changemakers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="ma-card p-6 group"
              >
                <div className="w-14 h-14 bg-[#EFF6FF] rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#1E293B] text-lg mb-2 font-playfair">{item.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ACADEMICS SECTION
      ══════════════════════════════════════════ */}
      <section id="academics" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="ma-section-label mb-4">Academics</span>
            <h2 className="ma-heading text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mt-4">
              Programs & Streams
            </h2>
            <p className="text-[#64748B] text-lg mt-3 max-w-2xl mx-auto">
              From middle school to senior secondary — comprehensive, rigorous, and inspiring academic programs.
            </p>
          </motion.div>

          {/* Stream Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {c.academics.map(stream => (
              <button
                key={stream.id}
                onClick={() => setActiveStream(stream.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeStream === stream.id
                    ? 'text-white shadow-md'
                    : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#2563EB] border border-[#E2E8F0]'
                }`}
                style={activeStream === stream.id ? { backgroundColor: stream.color } : {}}
              >
                {stream.icon} {stream.name}
              </button>
            ))}
          </div>

          {/* Active Stream Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStream}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-1">
                <div
                  className="rounded-2xl p-8 text-white h-full"
                  style={{ backgroundColor: activeAcademic.color }}
                >
                  <div className="text-5xl mb-4">{activeAcademic.icon}</div>
                  <h3 className="ma-heading text-2xl mb-1">{activeAcademic.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{activeAcademic.classes}</p>
                  <p className="text-white/85 leading-relaxed text-sm">{activeAcademic.description}</p>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="ma-card p-6">
                  <h4 className="font-bold text-[#1E3A5F] mb-4 font-playfair">Core Subjects</h4>
                  <ul className="space-y-2">
                    {activeAcademic.subjects.map(s => (
                      <li key={s} className="flex items-center gap-2 text-[#64748B] text-sm">
                        <CheckCircle size={13} style={{ color: activeAcademic.color }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ma-card p-6">
                  <h4 className="font-bold text-[#1E3A5F] mb-4 font-playfair">Highlights</h4>
                  <ul className="space-y-3">
                    {activeAcademic.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-[#64748B] text-sm">
                        <div
                          className="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: `${activeAcademic.color}20` }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeAcademic.color }} />
                        </div>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FACILITIES SECTION
      ══════════════════════════════════════════ */}
      <section id="facilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="ma-section-label mb-4">Infrastructure</span>
            <h2 className="ma-heading text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mt-4">
              World-Class Facilities
            </h2>
            <p className="text-[#64748B] text-lg mt-3 max-w-2xl mx-auto">
              A 15-acre campus equipped with cutting-edge infrastructure designed for 21st-century learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Facility List */}
            <div className="space-y-3">
              {c.facilities.map((fac, i) => (
                <motion.button
                  key={fac.name}
                  onClick={() => setActiveFacility(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 ${
                    activeFacility === i
                      ? 'bg-[#1E3A5F] text-white shadow-lg'
                      : 'bg-white border border-[#E2E8F0] text-[#1E293B] hover:border-[#1E3A5F]/30'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    activeFacility === i ? 'bg-white/20' : 'bg-[#F8FAFC]'
                  }`}>
                    {fac.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{fac.name}</p>
                    <p className={`text-sm ${activeFacility === i ? 'text-white/70' : 'text-[#64748B]'}`}>
                      {fac.desc}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`ml-auto flex-shrink-0 ${activeFacility === i ? 'text-[#C9A84C]' : 'text-[#CBD5E1]'}`}
                  />
                </motion.button>
              ))}
            </div>

            {/* Facility Image */}
            <motion.div
              key={activeFacility}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="sticky top-24"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={c.facilities[activeFacility].image}
                  alt={c.facilities[activeFacility].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 bg-[#1E3A5F] text-white rounded-xl p-5">
                <h4 className="font-bold font-playfair text-lg mb-1">
                  {c.facilities[activeFacility].icon} {c.facilities[activeFacility].name}
                </h4>
                <p className="text-white/70 text-sm">{c.facilities[activeFacility].desc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ACHIEVEMENTS SECTION
      ══════════════════════════════════════════ */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1E3A5F] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest bg-[#C9A84C]/20 text-[#C9A84C] border border-[#C9A84C]/30 mb-4">
              <Award size={12} /> Achievements & Awards
            </span>
            <h2 className="ma-heading text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
              Pride of Modern Academy
            </h2>
            <p className="text-white/60 text-lg mt-3 max-w-2xl mx-auto">
              Recognition that reflects our commitment to excellence in every sphere.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${ach.color}25` }}
                >
                  {ach.icon}
                </div>
                <h3 className="font-bold text-white font-playfair mb-2">{ach.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{ach.desc}</p>
                <div className="mt-3 h-0.5 w-10 rounded-full" style={{ backgroundColor: ach.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GALLERY SECTION
      ══════════════════════════════════════════ */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="ma-section-label mb-4">Campus Gallery</span>
            <h2 className="ma-heading text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mt-4">
              Life at Modern Academy
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {c.gallery.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setLightboxImg(img)}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1E3A5F]/0 group-hover:bg-[#1E3A5F]/50 transition-all duration-300 flex items-end p-4">
                  <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-sm">{img.alt}</p>
                    <p className="text-[#C9A84C] text-xs">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightboxImg && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                onClick={() => setLightboxImg(null)}
              >
                <button className="absolute top-4 right-4 text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                  <X size={20} />
                </button>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  onClick={e => e.stopPropagation()}
                  className="max-w-5xl w-full"
                >
                  <img
                    src={lightboxImg.src}
                    alt={lightboxImg.alt}
                    className="w-full max-h-[80vh] object-contain rounded-xl"
                  />
                  <div className="mt-4 text-center">
                    <p className="text-white font-semibold">{lightboxImg.alt}</p>
                    <p className="text-[#C9A84C] text-sm">{lightboxImg.category}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="ma-section-label mb-4">Testimonials</span>
            <h2 className="ma-heading text-3xl sm:text-4xl text-[#0F172A] mt-4">
              What Our Community Says
            </h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-2 justify-center mb-8">
            {['Alumni', 'Parent', 'Student'].map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setActiveTestimonial(0); }}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-[#1E3A5F] text-white'
                    : 'bg-white border border-[#E2E8F0] text-[#64748B] hover:border-[#1E3A5F]'
                }`}
              >
                {tab}s
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {filteredTestimonials.length > 0 && (
              <motion.div
                key={activeTab + activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-8 sm:p-12 shadow-sm"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(filteredTestimonials[0].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>

                <blockquote className="text-[#1E293B] text-lg sm:text-xl leading-relaxed text-center mb-8 font-playfair italic">
                  "{filteredTestimonials[0].quote}"
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={filteredTestimonials[0].avatar}
                    alt={filteredTestimonials[0].name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-[#C9A84C]/30"
                  />
                  <div>
                    <p className="font-bold text-[#1E293B]">{filteredTestimonials[0].name}</p>
                    <p className="text-[#64748B] text-sm">{filteredTestimonials[0].role}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EVENTS & NEWS
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Events */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="ma-section-label mb-3">Upcoming Events</span>
                <h2 className="ma-heading text-3xl text-[#0F172A] mt-3">Events Calendar</h2>
              </motion.div>

              <div className="space-y-4">
                {c.events.map((ev, i) => (
                  <motion.div
                    key={ev.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] hover:border-[#1E3A5F]/30 transition-all group"
                  >
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-xl">
                      <img src={ev.image} alt={ev.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-[#1E3A5F]/10 text-[#1E3A5F] rounded-md">{ev.category}</span>
                        <span className="text-[#64748B] text-xs flex items-center gap-1"><Calendar size={10} /> {ev.date}</span>
                      </div>
                      <h4 className="font-semibold text-[#1E293B] text-sm mb-1">{ev.title}</h4>
                      <p className="text-[#64748B] text-xs leading-relaxed line-clamp-2">{ev.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* News */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="ma-section-label mb-3">Latest News</span>
                <h2 className="ma-heading text-3xl text-[#0F172A] mt-3">News & Updates</h2>
              </motion.div>

              <div className="space-y-4">
                {c.news.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] hover:border-[#C9A84C]/50 transition-all cursor-pointer group"
                  >
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-xl">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-[#C9A84C]/15 text-[#92640C] rounded-md">{item.category}</span>
                        <span className="text-[#64748B] text-xs flex items-center gap-1"><Newspaper size={10} /> {item.date}</span>
                      </div>
                      <h4 className="font-semibold text-[#1E293B] text-sm mb-1">{item.title}</h4>
                      <p className="text-[#64748B] text-xs leading-relaxed line-clamp-2">{item.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ADMISSION CTA
      ══════════════════════════════════════════ */}
      <section id="admission" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1E3A5F] to-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C9A84C]/20 text-[#C9A84C] border border-[#C9A84C]/40 rounded-md text-xs font-bold uppercase tracking-widest mb-4">
              <GraduationCap size={12} /> Admissions 2025–26
            </span>
            <h2 className="ma-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              {c.admission.title}
            </h2>
            <p className="text-white/70 text-lg mb-4">{c.admission.subtitle}</p>
            <p className="text-[#C9A84C] font-semibold">
              📚 Open for {c.admission.classes}
            </p>
          </motion.div>

          {/* Admission Steps */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-12">
            {c.admission.steps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="flex items-center gap-2 bg-white/10 text-white px-4 py-2.5 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/10">
                  <span className="w-6 h-6 bg-[#C9A84C] text-[#1E3A5F] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </div>
                {i < c.admission.steps.length - 1 && (
                  <ChevronRight className="text-white/30 hidden sm:block flex-shrink-0" size={14} />
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              id="ma-apply-now-btn"
              className="ma-btn-gold text-base"
            >
              Apply Now <ArrowRight size={18} />
            </button>
            <a
              href={`tel:${c.mobile}`}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all"
            >
              <Phone size={18} /> Talk to Admissions
            </a>
            <a
              href={`mailto:${c.admissionsEmail}`}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all"
            >
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT SECTION
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="ma-section-label mb-4">Contact & Location</span>
              <h2 className="ma-heading text-3xl sm:text-4xl text-[#0F172A] mt-4 mb-6">
                Get in Touch
              </h2>
              <p className="text-[#64748B] text-lg leading-relaxed mb-8">
                We're here to answer all your queries about admissions, academics, and campus life. Reach out to us — we'd love to welcome you to the Modern Academy family.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Phone size={18} className="text-[#2563EB]" />, label: 'Main Office', value: c.phone },
                  { icon: <Phone size={18} className="text-[#C9A84C]" />, label: 'Admissions', value: c.mobile },
                  { icon: <Mail size={18} className="text-[#059669]" />, label: 'Email', value: c.email },
                  { icon: <MapPin size={18} className="text-[#DC2626]" />, label: 'Address', value: c.address },
                  { icon: <Clock size={18} className="text-[#7C3AED]" />, label: 'School Hours', value: c.timings },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E2E8F0]">
                    <div className="w-10 h-10 bg-[#F8FAFC] rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-[#1E293B] font-semibold text-sm">{item.value}</p>
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
              className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm"
            >
              <h3 className="ma-heading text-2xl text-[#0F172A] mb-6">Admission Enquiry</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#64748B] text-sm font-medium mb-1.5 block">Parent's Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#1E293B] focus:outline-none focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/10 transition-all text-sm"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="text-[#64748B] text-sm font-medium mb-1.5 block">Student's Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#1E293B] focus:outline-none focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/10 transition-all text-sm"
                      placeholder="Child's name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#64748B] text-sm font-medium mb-1.5 block">Phone *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#1E293B] focus:outline-none focus:border-[#1E3A5F] transition-all text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="text-[#64748B] text-sm font-medium mb-1.5 block">Class Applying For *</label>
                    <select className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#1E293B] focus:outline-none focus:border-[#1E3A5F] transition-all text-sm">
                      <option>Select class</option>
                      {['VI', 'VII', 'VIII', 'IX', 'X', 'XI (Science)', 'XI (Commerce)', 'XI (Humanities)', 'XII'].map(c => (
                        <option key={c}>Class {c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[#64748B] text-sm font-medium mb-1.5 block">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#1E293B] focus:outline-none focus:border-[#1E3A5F] transition-all text-sm"
                    placeholder="parent@email.com"
                  />
                </div>
                <div>
                  <label className="text-[#64748B] text-sm font-medium mb-1.5 block">Message</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-[#1E293B] focus:outline-none focus:border-[#1E3A5F] transition-all resize-none text-sm"
                    placeholder="Any specific query about admissions or academics..."
                  />
                </div>
                <button
                  type="submit"
                  id="ma-contact-submit"
                  className="ma-btn-primary w-full justify-center"
                >
                  Submit Enquiry <ArrowRight size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-[#0F172A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1E3A5F] rounded-xl flex items-center justify-center text-2xl">
                  {c.logo}
                </div>
                <div>
                  <p className="font-bold font-playfair text-lg">{c.schoolName}</p>
                  <p className="text-[#C9A84C] text-xs font-medium">{c.board} | Est. {c.estYear}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{c.schoolDescription}</p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Youtube, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 bg-white/5 hover:bg-[#C9A84C] rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#C9A84C] font-semibold font-playfair mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Principal\'s Message', 'Academics', 'Admissions', 'Faculty', 'Results', 'Gallery', 'Contact'].map(l => (
                  <li key={l}>
                    <button className="text-gray-400 text-sm hover:text-white transition-colors">
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academics */}
            <div>
              <h4 className="text-[#C9A84C] font-semibold font-playfair mb-4">Academics</h4>
              <ul className="space-y-2">
                {['Middle School (VI–VIII)', 'Secondary (IX–X)', 'Science Stream', 'Commerce Stream', 'Humanities Stream', 'Co-Curricular', 'Sports Academy', 'Clubs & Activities'].map(l => (
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
              <h4 className="text-[#C9A84C] font-semibold font-playfair mb-4">Contact</h4>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm flex items-start gap-2">
                  <MapPin size={13} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                  {c.address}
                </p>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <Phone size={13} className="text-[#C9A84C]" /> {c.phone}
                </p>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <Mail size={13} className="text-[#C9A84C]" /> {c.email}
                </p>
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <Clock size={13} className="text-[#C9A84C]" /> {c.timings}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {c.schoolFullName}. All rights reserved.</p>
            <p className="text-gray-500 text-sm">{c.affiliation}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
