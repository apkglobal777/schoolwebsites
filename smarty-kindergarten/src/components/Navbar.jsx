import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';

const menuItems = [
  {
    title: 'About Us',
    path: '/about',
    dropdown: [
      { label: 'Meals', path: '/about#meals' },
      { label: 'Staff', path: '/about#staff' }
    ]
  },
  {
    title: 'Programs',
    path: '/programs',
    dropdown: [
      { label: 'Programs – Single', path: '/programs' }
    ]
  },
  {
    title: 'Classes',
    path: '/classes',
    dropdown: [
      { label: 'Classes – Single', path: '/classes' }
    ]
  },
  { title: 'News', path: '/', dropdown: [] },
  {
    title: 'Events',
    path: '/events',
    dropdown: [
      { label: 'Events – Single', path: '/events' },
      { label: 'Academic Calendar', path: '/events' },
      { label: 'Timetable', path: '/events' }
    ]
  },
  {
    title: 'Pages',
    path: '/',
    dropdown: [
      { label: 'Shop', path: '/' },
      { label: 'Price Table', path: '/' },
      { label: 'Donations', path: '/' },
      { label: 'FAQ', path: '/' },
      { label: 'Gallery', path: '/' },
      { label: 'Testimonials', path: '/' },
      { label: 'Typography', path: '/' },
      { label: 'Shortcodes', path: '/' },
      { label: 'Page 404', path: '*' }
    ]
  },
  { title: 'Contacts', path: '/contact', dropdown: [] }
];

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#ff9b26] px-6 py-4 relative z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-3xl text-white leading-none">✿</span>
          <div className="flex flex-col leading-tight">
            <span className="font-sans font-bold text-white text-xl tracking-tight">smarty</span>
            <span className="text-[10px] text-white/90 font-semibold tracking-widest uppercase -mt-0.5">
              kindergarten
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 font-sans">
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group py-2">
              <Link
                to={item.path}
                className="text-white font-semibold text-sm hover:text-blue-900 transition-colors"
              >
                {item.title}
              </Link>

              {item.dropdown.length > 0 && (
                <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-xl py-2 w-48 border border-gray-100 transition-all duration-200">
                  {item.dropdown.map((sub, sIdx) => (
                    <li key={sIdx}>
                      <Link
                        to={sub.path}
                        className="block px-4 py-2 text-xs font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0088ff] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right side: persistent search + cart */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center bg-white rounded-full pl-4 pr-1 py-1 shadow-sm">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-xs text-gray-700 outline-none w-24 md:w-32 font-sans"
            />
            <button
              className="w-7 h-7 bg-[#0088ff] text-white rounded-full flex items-center justify-center shrink-0 hover:bg-blue-600 transition-colors"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            className="w-9 h-9 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden text-white text-2xl ml-1 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#ff9b26] border-t border-white/20 mt-3 pt-3 pb-4 space-y-2 font-sans">
          {menuItems.map((item, idx) => (
            <div key={idx} className="px-2">
              <Link
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white font-bold text-sm py-1"
              >
                {item.title}
              </Link>
              {item.dropdown.length > 0 && (
                <div className="pl-4 space-y-1">
                  {item.dropdown.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      to={sub.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white/80 text-xs py-1 hover:text-white"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}