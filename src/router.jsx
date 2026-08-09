import { Routes, Route, Navigate } from 'react-router-dom';
import MarketplaceHomePage from './pages/MarketplaceHomePage.jsx';
import TemplatesPage from './pages/TemplatesPage.jsx';
import TemplateDetailPage from './pages/TemplateDetailPage.jsx';
import HappyKidsTemplate from './templates/play-school/HappyKids/index.jsx';
import LittleStarsTemplate from './templates/play-school/LittleStars/index.jsx';
import ModernAcademyTemplate from './templates/secondary-school/ModernAcademy/index.jsx';
import EliteSchoolTemplate from './templates/secondary-school/EliteSchool/index.jsx';
import TemplateNotFound from './pages/TemplateNotFound.jsx';

export default function AppRouter() {
  return (
    <Routes>
      {/* Marketplace */}
      <Route path="/" element={<MarketplaceHomePage />} />
      <Route path="/templates" element={<TemplatesPage />} />
      <Route path="/category/:categorySlug" element={<TemplatesPage />} />
      <Route path="/template/:templateSlug" element={<TemplateDetailPage />} />

      {/* Template Previews */}
      <Route path="/preview/play-school/happy-kids" element={<HappyKidsTemplate />} />
      <Route path="/preview/play-school/little-stars" element={<LittleStarsTemplate />} />
      <Route path="/preview/secondary-school/modern-academy" element={<ModernAcademyTemplate />} />
      <Route path="/preview/secondary-school/elite-school" element={<EliteSchoolTemplate />} />

      {/* Coming Soon */}
      <Route path="/preview/*" element={<TemplateNotFound />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
