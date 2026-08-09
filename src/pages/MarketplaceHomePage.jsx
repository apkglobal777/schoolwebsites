import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Sparkles, Layers, Shield, Zap, Globe, Star } from 'lucide-react';

import MarketplaceHeader from '../components/marketplace/MarketplaceHeader.jsx';
import MarketplaceHero from '../components/marketplace/MarketplaceHero.jsx';
import CategoryNav from '../components/marketplace/CategoryNav.jsx';
import TemplateCard from '../components/marketplace/TemplateCard.jsx';
import MarketplaceFooter from '../components/marketplace/MarketplaceFooter.jsx';
import { templates, getFeaturedTemplates } from '../data/templates.js';
import { categories, getFeaturedCategories } from '../data/categories.js';

const features = [
  {
    icon: <Zap size={22} className="text-indigo-400" />,
    title: 'React + Tailwind CSS',
    desc: 'Built with modern React.js and Tailwind CSS for maximum performance and flexibility.',
  },
  {
    icon: <Globe size={22} className="text-emerald-400" />,
    title: 'Fully Responsive',
    desc: 'Every template is mobile-first and tested across all screen sizes.',
  },
  {
    icon: <Sparkles size={22} className="text-purple-400" />,
    title: 'Framer Motion Animations',
    desc: 'Smooth, professional animations that make your school website stand out.',
  },
  {
    icon: <Shield size={22} className="text-blue-400" />,
    title: 'SEO Optimized',
    desc: 'Semantic HTML, meta tags, and structured content for search visibility.',
  },
  {
    icon: <Layers size={22} className="text-amber-400" />,
    title: 'Data-Driven Templates',
    desc: 'JSON config-powered templates — change content without touching code.',
  },
  {
    icon: <TrendingUp size={22} className="text-pink-400" />,
    title: 'Premium Design Quality',
    desc: 'Designed to wow — comparable to premium institutional websites.',
  },
];

export default function MarketplaceHomePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? templates
    : templates.filter(t => t.category === activeCategory);

  const featuredCats = getFeaturedCategories();

  return (
    <div className="min-h-screen bg-platform-bg">
      <MarketplaceHeader />
      <MarketplaceHero />

      {/* ─── Featured Categories ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-platform-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
              <Layers size={12} />
              School Categories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white mt-4">
              Templates for Every School
            </h2>
            <p className="text-platform-muted text-lg mt-3 max-w-2xl mx-auto">
              Choose from our curated collection of school website templates across multiple categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCats.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link
                  to={`/category/${cat.slug}`}
                  id={`category-card-${cat.id}`}
                  className="block glass-card-hover p-6 rounded-2xl relative overflow-hidden"
                >
                  {/* Background accent */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl transition-all duration-300 group-hover:opacity-20"
                    style={{ backgroundColor: cat.color }}
                  />

                  <div className="flex items-start gap-4 relative">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: `${cat.color}20` }}
                    >
                      {cat.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold font-outfit">{cat.label}</h3>
                        {!cat.comingSoon && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/10 text-platform-muted">
                            {cat.count}
                          </span>
                        )}
                        {cat.comingSoon && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20">
                            Soon
                          </span>
                        )}
                      </div>
                      <p className="text-platform-muted text-sm leading-relaxed">{cat.description}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-indigo-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    Browse templates <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── All Templates Gallery ─── */}
      <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
              <Star size={12} />
              Template Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white mt-4">
              Pick Your Perfect Template
            </h2>
            <p className="text-platform-muted text-lg mt-3 max-w-2xl mx-auto">
              Browse, preview and customize professional school website templates.
            </p>
          </div>

          {/* Category filter */}
          <div className="mb-10 overflow-x-auto no-scrollbar">
            <div className="pb-2">
              <CategoryNav activeCategory={activeCategory} onSelect={setActiveCategory} />
            </div>
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((template, i) => (
                <TemplateCard key={template.id} template={template} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-platform-muted">
              <p className="text-5xl mb-4">🏗️</p>
              <p className="text-xl font-semibold text-white">Coming Soon</p>
              <p className="mt-2">Templates for this category are in development.</p>
            </div>
          )}
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-platform-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
              <Zap size={12} />
              Why SchoolCraft
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white mt-4">
              Built for Modern Education
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 hover:bg-white/[0.07] transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold font-outfit mb-2">{f.title}</h3>
                <p className="text-platform-muted text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-90" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative p-10 sm:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit text-white mb-4">
                Ready to Build Your School Website?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Choose from our premium templates and have a professional school website live in hours, not weeks.
              </p>
              <Link
                to="/templates"
                id="cta-explore-templates"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold text-lg rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Explore Templates
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <MarketplaceFooter />
    </div>
  );
}
