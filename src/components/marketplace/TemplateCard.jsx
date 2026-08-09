import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, ArrowRight, Star, FileText, Zap, Lock } from 'lucide-react';

export default function TemplateCard({ template, index = 0 }) {
  const {
    name, category, categoryLabel, tagline, description,
    previewImage, previewRoute, pages, tech, badges, primaryColor,
    accentColor, isAvailable, isFeatured, rating, downloads,
  } = template;

  const badgeStyle = {
    Popular: 'bg-green-500/15 text-green-400 border-green-500/20',
    New: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
    Featured: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
    'Coming Soon': 'bg-gray-500/15 text-gray-400 border-gray-500/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative bg-platform-card rounded-2xl border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden bg-platform-surface">
        <img
          src={previewImage}
          alt={`${name} template preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
          {isAvailable ? (
            <Link
              to={previewRoute}
              id={`preview-btn-${template.slug}`}
              className="flex items-center gap-1.5 px-4 py-2 bg-white text-gray-900 font-semibold text-sm rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Eye size={14} />
              Live Preview
            </Link>
          ) : (
            <div className="flex items-center gap-1.5 px-4 py-2 bg-white/20 text-white font-semibold text-sm rounded-lg cursor-not-allowed">
              <Lock size={14} />
              Coming Soon
            </div>
          )}
        </div>

        {/* Badges on image */}
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          {badges.map((badge) => (
            <span
              key={badge}
              className={`text-[10px] font-bold px-2 py-1 rounded-md border ${badgeStyle[badge] || 'bg-gray-500/20 text-gray-400 border-gray-500/20'}`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Color dot */}
        <div
          className="absolute top-3 right-3 w-6 h-6 rounded-full border-2 border-white/30 shadow-lg"
          style={{ backgroundColor: primaryColor }}
        />
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Category + Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-platform-accent uppercase tracking-wider">
            {categoryLabel}
          </span>
          {isAvailable && (
            <div className="flex items-center gap-1">
              <Star size={12} className="text-amber-400 fill-amber-400" />
              <span className="text-xs text-platform-muted font-medium">{rating}</span>
            </div>
          )}
        </div>

        {/* Name */}
        <h3 className="text-white font-bold text-lg font-outfit mb-1 group-hover:text-indigo-300 transition-colors">
          {name}
        </h3>

        {/* Tagline */}
        <p className="text-platform-accent text-xs font-medium italic mb-2">{tagline}</p>

        {/* Description */}
        <p className="text-platform-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 mb-4 text-xs text-platform-subtle">
          <span className="flex items-center gap-1">
            <FileText size={11} />
            {pages} pages
          </span>
          <span className="flex items-center gap-1">
            <Zap size={11} />
            Responsive
          </span>
          {isAvailable && (
            <span className="text-green-500 font-medium">● Live</span>
          )}
        </div>

        {/* Tech Badges */}
        <div className="flex gap-1.5 flex-wrap mb-4">
          {tech.map((t) => (
            <span key={t} className="text-[10px] font-medium px-2 py-0.5 bg-white/5 text-platform-muted rounded-md border border-white/5">
              {t}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          {isAvailable ? (
            <>
              <Link
                to={previewRoute}
                id={`view-template-${template.slug}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-glow-indigo hover:scale-[1.02] transition-all duration-200"
              >
                <Eye size={14} />
                Preview
              </Link>
              <Link
                to={`/template/${template.slug}`}
                id={`details-${template.slug}`}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white/5 text-platform-muted text-sm font-semibold rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                <ArrowRight size={14} />
              </Link>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white/5 text-platform-subtle text-sm font-semibold rounded-lg cursor-not-allowed">
              <Lock size={14} />
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
