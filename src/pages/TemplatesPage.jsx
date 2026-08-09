import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MarketplaceHeader from '../components/marketplace/MarketplaceHeader.jsx';
import MarketplaceFooter from '../components/marketplace/MarketplaceFooter.jsx';
import CategoryNav from '../components/marketplace/CategoryNav.jsx';
import TemplateCard from '../components/marketplace/TemplateCard.jsx';
import { templates } from '../data/templates.js';
import { getCategoryBySlug } from '../data/categories.js';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function TemplatesPage() {
  const { categorySlug } = useParams();
  const [activeCategory, setActiveCategory] = useState(categorySlug || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = templates.filter(t => {
    const matchCategory = activeCategory === 'all' || t.category === activeCategory;
    const matchSearch = searchQuery === '' ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const activeCat = getCategoryBySlug(activeCategory);

  return (
    <div className="min-h-screen bg-platform-bg">
      <MarketplaceHeader />

      {/* Page Header */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-platform-surface border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold font-outfit text-white mb-3">
              {activeCat && activeCat.id !== 'all'
                ? `${activeCat.emoji} ${activeCat.label} Templates`
                : 'All School Templates'}
            </h1>
            <p className="text-platform-muted text-lg max-w-2xl mx-auto">
              {activeCat?.description || 'Browse our complete collection of premium school website templates.'}
            </p>
          </motion.div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-platform-muted" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                id="template-search"
                className="w-full pl-11 pr-4 py-3 bg-platform-card border border-white/10 rounded-xl text-white placeholder-platform-muted focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
              />
            </div>
          </div>

          {/* Category Nav */}
          <div className="overflow-x-auto no-scrollbar">
            <div className="pb-2">
              <CategoryNav activeCategory={activeCategory} onSelect={setActiveCategory} />
            </div>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-platform-muted text-sm">
              Showing <span className="text-white font-semibold">{filtered.length}</span> template{filtered.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-2 text-platform-muted text-sm">
              <SlidersHorizontal size={14} />
              All Styles
            </div>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
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
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-white text-xl font-semibold mb-2">No templates found</p>
                <p className="text-platform-muted">Try a different search term or category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <MarketplaceFooter />
    </div>
  );
}
