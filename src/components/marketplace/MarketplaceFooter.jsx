import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const links = {
  Templates: [
    { label: 'Play School', href: '/category/play-school' },
    { label: 'Primary School', href: '/category/primary-school' },
    { label: 'Secondary School', href: '/category/secondary-school' },
    { label: 'International School', href: '/category/international-school' },
    { label: 'Boarding School', href: '/category/boarding-school' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

export default function MarketplaceFooter() {
  return (
    <footer className="bg-platform-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <span className="text-white font-bold text-xl font-outfit">
                School<span className="gradient-text">Craft</span>
              </span>
            </Link>
            <p className="text-platform-muted text-sm leading-relaxed max-w-sm mb-6">
              Premium, responsive school website templates for every type of educational institution. 
              Built with React.js, Tailwind CSS, and Framer Motion.
            </p>
            <div className="flex gap-3">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 glass-card flex items-center justify-center text-platform-muted hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white font-semibold font-outfit mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-platform-muted text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-platform-subtle text-sm">
            © {new Date().getFullYear()} SchoolCraft. All rights reserved.
          </p>
          <p className="text-platform-subtle text-sm">
            Built with ❤️ for modern education
          </p>
        </div>
      </div>
    </footer>
  );
}
