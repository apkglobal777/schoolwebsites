import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Eye, FileText, Zap, Star, CheckCircle,
  Layers, Globe, Code2, ArrowRight, Lock
} from 'lucide-react';
import MarketplaceHeader from '../components/marketplace/MarketplaceHeader.jsx';
import MarketplaceFooter from '../components/marketplace/MarketplaceFooter.jsx';
import { getTemplateBySlug, templates } from '../data/templates.js';
import TemplateCard from '../components/marketplace/TemplateCard.jsx';

export default function TemplateDetailPage() {
  const { templateSlug } = useParams();
  const template = getTemplateBySlug(templateSlug);

  if (!template) {
    return (
      <div className="min-h-screen bg-platform-bg flex flex-col">
        <MarketplaceHeader />
        <div className="flex-1 flex items-center justify-center text-white text-2xl">
          Template not found.
        </div>
        <MarketplaceFooter />
      </div>
    );
  }

  const related = templates
    .filter(t => t.category === template.category && t.id !== template.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-platform-bg">
      <MarketplaceHeader />

      {/* Breadcrumb */}
      <div className="pt-24 pb-0 px-4 sm:px-6 lg:px-8 bg-platform-surface border-b border-white/5">
        <div className="max-w-7xl mx-auto py-4">
          <div className="flex items-center gap-2 text-sm text-platform-muted">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/templates" className="hover:text-white transition-colors">Templates</Link>
            <span>/</span>
            <Link to={`/category/${template.category}`} className="hover:text-white transition-colors capitalize">
              {template.categoryLabel}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{template.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* LEFT: Preview + Info */}
            <div className="lg:col-span-3">
              {/* Back */}
              <Link
                to="/templates"
                className="inline-flex items-center gap-2 text-platform-muted hover:text-white text-sm mb-6 transition-colors"
              >
                <ArrowLeft size={14} /> Back to Templates
              </Link>

              {/* Preview Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 mb-8 group"
              >
                <img
                  src={template.previewImage}
                  alt={`${template.name} template preview`}
                  className="w-full aspect-video object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  {template.isAvailable ? (
                    <Link
                      to={template.previewRoute}
                      id={`detail-preview-${template.slug}`}
                      className="btn-primary"
                    >
                      <Eye size={16} /> Open Live Preview
                    </Link>
                  ) : (
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm">
                      <Lock size={16} /> Coming Soon
                    </div>
                  )}
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {template.badges.map(b => (
                    <span key={b} className="text-xs font-bold px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-white border border-white/20">
                      {b}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-platform-accent uppercase tracking-widest">
                    {template.categoryLabel}
                  </span>
                  {template.isAvailable && (
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      <span className="text-xs text-platform-muted">{template.rating} rating</span>
                    </div>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold font-outfit text-white mb-2">
                  {template.name}
                </h1>
                <p className="text-platform-accent italic mb-4">{template.tagline}</p>
                <p className="text-platform-muted text-lg leading-relaxed mb-6">
                  {template.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {template.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-white/5 text-platform-muted text-sm rounded-lg border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features Included */}
                <div className="glass-card p-6">
                  <h3 className="text-white font-bold font-outfit mb-4 text-lg">✅ What's Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {template.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-platform-muted text-sm">
                        <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Action Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-24">
                {/* Main action card */}
                <div className="glass-card p-6 mb-4">
                  {/* Color preview */}
                  <div className="flex gap-2 mb-5">
                    <div
                      className="h-10 flex-1 rounded-lg"
                      style={{ backgroundColor: template.primaryColor }}
                    />
                    <div
                      className="h-10 w-20 rounded-lg"
                      style={{ backgroundColor: template.accentColor }}
                    />
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-platform-muted flex items-center gap-2">
                        <FileText size={13} /> Pages
                      </span>
                      <span className="text-white font-semibold">{template.pages}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-platform-muted flex items-center gap-2">
                        <Zap size={13} /> Responsive
                      </span>
                      <span className="text-emerald-400 font-semibold">✓ Yes</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-platform-muted flex items-center gap-2">
                        <Globe size={13} /> SEO Ready
                      </span>
                      <span className="text-emerald-400 font-semibold">✓ Yes</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-platform-muted flex items-center gap-2">
                        <Layers size={13} /> Animations
                      </span>
                      <span className="text-emerald-400 font-semibold">Framer Motion</span>
                    </div>
                    <div className="flex items-center justify-between text-sm border-t border-white/5 pt-3 mt-1">
                      <span className="text-platform-muted flex items-center gap-2">
                        <Code2 size={13} /> Tech Stack
                      </span>
                      <div className="flex gap-1 flex-wrap justify-end">
                        {template.tech.map(t => (
                          <span key={t} className="text-[10px] px-1.5 py-0.5 bg-white/5 text-platform-muted rounded border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {template.isAvailable ? (
                    <div className="space-y-3">
                      <Link
                        to={template.previewRoute}
                        id={`detail-live-preview-${template.slug}`}
                        className="btn-primary w-full justify-center"
                      >
                        <Eye size={16} /> Live Preview
                      </Link>
                      <button
                        id={`detail-use-template-${template.slug}`}
                        className="w-full py-3 bg-emerald-500/10 text-emerald-400 font-semibold rounded-xl border border-emerald-500/20 hover:bg-emerald-500/20 transition-all text-sm flex items-center justify-center gap-2"
                        onClick={() => alert('Get Started feature coming soon! Contact us for template access.')}
                      >
                        Use This Template <ArrowRight size={14} />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <div className="text-3xl mb-2">🏗️</div>
                      <p className="text-platform-muted text-sm">This template is coming soon</p>
                    </div>
                  )}
                </div>

                {/* Trust indicators */}
                <div className="glass-card p-5">
                  <h4 className="text-white font-semibold text-sm mb-3">🔒 Why SchoolCraft</h4>
                  <ul className="space-y-2">
                    {[
                      'Production-ready React + Tailwind code',
                      'Mobile-first, fully responsive',
                      'Framer Motion animations included',
                      'Data-driven, easy to customize',
                      'SEO optimized structure',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2 text-platform-muted text-xs">
                        <CheckCircle size={12} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related Templates */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-extrabold font-outfit text-white mb-8">
                More {template.categoryLabel} Templates
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((t, i) => (
                  <TemplateCard key={t.id} template={t} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <MarketplaceFooter />
    </div>
  );
}
