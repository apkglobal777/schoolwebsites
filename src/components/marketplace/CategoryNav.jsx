import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../../data/categories.js';

export default function CategoryNav({ activeCategory = 'all', onSelect }) {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <motion.button
            key={cat.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect && onSelect(cat.id)}
            id={`category-${cat.id}`}
            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
              isActive
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-glow-indigo'
                : 'glass-card text-platform-muted hover:text-white hover:bg-white/10'
            } ${cat.comingSoon ? 'opacity-60' : ''}`}
          >
            <span className="text-base">{cat.emoji}</span>
            <span>{cat.label}</span>
            {cat.id !== 'all' && !cat.comingSoon && (
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-platform-muted'
              }`}>
                {cat.count}
              </span>
            )}
            {cat.comingSoon && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400">
                Soon
              </span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
