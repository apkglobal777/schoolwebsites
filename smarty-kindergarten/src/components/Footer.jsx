import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Smartphone, Mail, Clock } from 'lucide-react';

const quickLinksLeft = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Program', path: '/programs' },
  { label: 'Classes', path: '/programs' },
  { label: 'News', path: '/' },
];

const quickLinksRight = [
  { label: 'Events', path: '/events' },
  { label: 'Typography', path: '/' },
  { label: 'Contacts', path: '/contact' },
  { label: 'Page 404', path: '*' },
  { label: 'Shortcodes', path: '/' },
];

const infoLeft = [
  { label: 'Donations', path: '/' },
  { label: 'Gallery', path: '/' },
  { label: 'Program', path: '/programs' },
];

const infoRight = [
  { label: 'FAQ', path: '/' },
  { label: 'Price Table', path: '/' },
  { label: 'Timetable', path: '/events' },
];

function LinkList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="w-1 h-1 rounded-full bg-brandOrange mt-2 shrink-0" />
          <Link to={item.path} className="hover:text-brandOrange transition-colors">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 text-sm text-gray-500 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl text-brandOrange leading-none">✿</span>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl text-brandOrange">smarty</span>
              <span className="text-[10px] text-brandOrange/80 font-semibold tracking-widest uppercase -mt-0.5">
                kindergarten
              </span>
            </div>
          </div>
          <p className="leading-relaxed text-gray-400 text-sm">
            Etsy sartorial godard wolf pok pok swag kale chips chia normcore, tbh tousled four loko
            woke. Ethical stumptown man braid franzen.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-gray-800 tracking-wider uppercase mb-4 text-xs">
            Contact Info
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brandOrange shrink-0 mt-0.5" />
              <span>1644 Platte Street, Palo Alto, CA 90202, USA</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brandOrange shrink-0" />
              <span>Call Free: +1 376-236-2336</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Smartphone className="w-4 h-4 text-brandOrange shrink-0" />
              <span>+1 998 71 150 30 30</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brandOrange shrink-0" />
              <a href="mailto:info@stylemixthemes.com" className="text-brandOrange hover:underline">
                info@stylemixthemes.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-brandOrange shrink-0" />
              <span>Mon – Fri: 8:00 AM – 18:00</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-gray-800 tracking-wider uppercase mb-4 text-xs">
            Quick Links
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <LinkList items={quickLinksLeft} />
            <LinkList items={quickLinksRight} />
          </div>
        </div>

        {/* Information For */}
        <div>
          <h4 className="font-bold text-gray-800 tracking-wider uppercase mb-4 text-xs">
            Information For
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <LinkList items={infoLeft} />
            <LinkList items={infoRight} />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-100 pt-6 text-center text-gray-400 text-xs">
        Copyright © Secondary Kindergarten Theme by Stylemix Themes
      </div>
    </footer>
  );
}
