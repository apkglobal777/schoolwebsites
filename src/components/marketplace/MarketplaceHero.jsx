import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Eye, Layout, Sparkles } from 'lucide-react';

export default function MarketplaceHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-platform-bg bg-animated-gradient">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl" />

      {/* Floating badge elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-32 left-8 lg:left-24 hidden lg:flex items-center gap-2 glass-card px-4 py-2.5 float-shape-2"
      >
        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
          <Star size={14} className="text-green-400 fill-green-400" />
        </div>
        <div>
          <p className="text-white text-xs font-semibold">5.0 Rating</p>
          <p className="text-platform-muted text-[10px]">2,400+ downloads</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute top-48 right-8 lg:right-24 hidden lg:flex items-center gap-2 glass-card px-4 py-2.5 float-shape-3"
      >
        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
          <Eye size={14} className="text-blue-400" />
        </div>
        <div>
          <p className="text-white text-xs font-semibold">Live Preview</p>
          <p className="text-platform-muted text-[10px]">Every template</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-40 left-8 lg:left-20 hidden lg:flex items-center gap-2 glass-card px-4 py-2.5 float-shape-4"
      >
        <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
          <Layout size={14} className="text-purple-400" />
        </div>
        <div>
          <p className="text-white text-xs font-semibold">10+ Templates</p>
          <p className="text-platform-muted text-[10px]">Multiple categories</p>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="section-label bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Sparkles size={12} />
            Premium School Website Templates
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-outfit text-white leading-[1.1] mb-6 text-balance"
        >
          Build a School Website{' '}
          <span className="gradient-text">That Inspires Learning</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-platform-muted text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Modern, responsive and professionally designed school website templates for{' '}
          <span className="text-white font-medium">every type of educational institution</span>.
          From playschools to international academies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/templates" className="btn-primary text-base px-8 py-4">
            Explore Templates
            <ArrowRight size={18} />
          </Link>
          <Link to="/templates" className="btn-secondary text-base px-8 py-4">
            View Categories
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12"
        >
          {[
            { value: '10+', label: 'Templates' },
            { value: '9', label: 'Categories' },
            { value: '100%', label: 'Responsive' },
            { value: 'Free', label: 'Forever' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">{stat.value}</p>
              <p className="text-platform-muted text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-1 text-platform-subtle animate-bounce-slow">
            <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
