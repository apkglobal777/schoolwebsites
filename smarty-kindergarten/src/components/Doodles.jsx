import React from 'react';

// Simple monoline outline icons, drawn to read as playful "kids theme" doodles.
const Star = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <path d="M12 2l2.6 6.6L21 10l-5.2 4.3L17.4 21 12 17.3 6.6 21l1.6-6.7L3 10l6.4-1.4L12 2z" />
  </svg>
);

const Flower = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <circle cx="12" cy="12" r="2.3" />
    <circle cx="12" cy="5.5" r="3" />
    <circle cx="18.5" cy="12" r="3" />
    <circle cx="12" cy="18.5" r="3" />
    <circle cx="5.5" cy="12" r="3" />
  </svg>
);

const Pencil = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <path d="M4 20l1-5L16 4l4 4L9 19l-5 1z" />
    <path d="M13.5 6.5l4 4" />
  </svg>
);

const PaperPlane = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <path d="M21 3L3 10.5l7 2.5L21 3z" />
    <path d="M21 3l-8.5 16-2.5-6L21 3z" />
  </svg>
);

const Balloon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <ellipse cx="12" cy="9" rx="6" ry="7" />
    <path d="M12 16l-1.2 2.2 1.6.8-1.4 1.6" />
  </svg>
);

const Candy = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <path d="M9 9l-4-2v10l4-2" />
    <path d="M15 9l4-2v10l-4-2" />
    <rect x="9" y="8" width="6" height="8" rx="2" />
  </svg>
);

const ShootingStar = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
    <path d="M2 14c6-2 10 2 12-4" strokeLinecap="round" />
    <path d="M20 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
  </svg>
);

const ICONS = [Star, Flower, Pencil, PaperPlane, Balloon, Candy, ShootingStar];

/**
 * A fixed, hand-placed layout of doodles per section variant so results are
 * stable across renders (rather than random on every mount).
 */
const LAYOUTS = {
  hero: [
    { Icon: Pencil, top: '8%', left: '3%', size: 46, rotate: -20 },
    { Icon: Star, top: '55%', left: '2%', size: 30, rotate: 0 },
    { Icon: PaperPlane, top: '82%', left: '6%', size: 36, rotate: -10 },
    { Icon: Flower, top: '18%', left: '13%', size: 34, rotate: 0 },
    { Icon: Star, top: '10%', left: '32%', size: 40, rotate: 8 },
    { Icon: Candy, top: '32%', left: '58%', size: 38, rotate: 15 },
    { Icon: ShootingStar, top: '78%', left: '40%', size: 48, rotate: 0 },
    { Icon: Balloon, top: '70%', left: '90%', size: 40, rotate: 0 },
    { Icon: Pencil, top: '85%', left: '95%', size: 40, rotate: 30 },
    { Icon: Star, top: '10%', left: '95%', size: 32, rotate: 0 },
  ],
  events: [
    { Icon: Candy, top: '6%', left: '2%', size: 44, rotate: -10 },
    { Icon: Pencil, top: '18%', left: '20%', size: 34, rotate: -25 },
    { Icon: ShootingStar, top: '10%', left: '46%', size: 42, rotate: 0 },
    { Icon: Flower, top: '4%', left: '75%', size: 30, rotate: 0 },
    { Icon: Candy, top: '18%', left: '92%', size: 40, rotate: 10 },
    { Icon: Flower, top: '48%', left: '8%', size: 30, rotate: 0 },
    { Icon: Balloon, top: '58%', left: '48%', size: 40, rotate: 0 },
    { Icon: PaperPlane, top: '68%', left: '3%', size: 34, rotate: -10 },
    { Icon: Pencil, top: '78%', left: '95%', size: 40, rotate: 25 },
    { Icon: Flower, top: '85%', left: '70%', size: 28, rotate: 0 },
  ],
  news: [
    { Icon: Pencil, top: '5%', left: '20%', size: 34, rotate: -20 },
    { Icon: Star, top: '18%', left: '38%', size: 30, rotate: 0 },
    { Icon: Candy, top: '3%', left: '2%', size: 40, rotate: -8 },
    { Icon: Flower, top: '4%', left: '73%', size: 30, rotate: 0 },
    { Icon: PaperPlane, top: '55%', left: '93%', size: 40, rotate: 20 },
    { Icon: Pencil, top: '78%', left: '92%', size: 38, rotate: 20 },
  ],
  signup: [
    { Icon: Flower, top: '10%', left: '14%', size: 28, rotate: 0 },
    { Icon: Balloon, top: '20%', left: '55%', size: 30, rotate: 0 },
    { Icon: Candy, top: '55%', left: '22%', size: 30, rotate: -10 },
    { Icon: PaperPlane, top: '65%', left: '4%', size: 30, rotate: -10 },
    { Icon: Pencil, top: '15%', left: '85%', size: 34, rotate: 25 },
    { Icon: Star, top: '55%', left: '75%', size: 26, rotate: 0 },
  ],
};

export default function Doodles({ variant = 'hero', className = '' }) {
  const layout = LAYOUTS[variant] || LAYOUTS.hero;
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden text-white/25 ${className}`} aria-hidden="true">
      {layout.map(({ Icon, top, left, size, rotate }, i) => (
        <Icon
          key={i}
          style={{
            position: 'absolute',
            top,
            left,
            width: size,
            height: size,
            transform: `rotate(${rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
