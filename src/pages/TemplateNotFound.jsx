import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import MarketplaceHeader from '../components/marketplace/MarketplaceHeader.jsx';
import MarketplaceFooter from '../components/marketplace/MarketplaceFooter.jsx';

export default function TemplateNotFound() {
  return (
    <div className="min-h-screen bg-platform-bg flex flex-col">
      <MarketplaceHeader />
      <div className="flex-1 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-lg"
        >
          <div className="text-8xl mb-6">🏗️</div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock size={16} className="text-amber-400" />
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Coming Soon</span>
          </div>
          <h1 className="text-4xl font-extrabold font-outfit text-white mb-4">
            Template in Development
          </h1>
          <p className="text-platform-muted text-lg mb-8 leading-relaxed">
            We're crafting this template with care. It will be available soon with full premium features.
          </p>
          <Link to="/templates" className="btn-primary">
            <ArrowLeft size={16} />
            Browse Available Templates
          </Link>
        </motion.div>
      </div>
      <MarketplaceFooter />
    </div>
  );
}
