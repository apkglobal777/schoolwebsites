import React from 'react';

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

// Toddler — stacking ring toy
export const ToddlerIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <ellipse cx="12" cy="8" rx="3.2" ry="1.4" />
    <ellipse cx="12" cy="12.5" rx="5" ry="1.6" />
    <ellipse cx="12" cy="17.5" rx="6.6" ry="1.8" />
    <line x1="12" y1="6.5" x2="12" y2="19.2" />
  </svg>
);

// Preschool — ABC blocks
export const PreschoolIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="3.5" y="9" width="6" height="6" rx="1" />
    <rect x="9.5" y="4.5" width="6" height="6" rx="1" transform="rotate(0)" />
    <rect x="15" y="10.5" width="6" height="6" rx="1" />
    <text x="6.5" y="13.3" fontSize="3.4" stroke="none" fill="currentColor" fontFamily="sans-serif">B</text>
    <text x="12.5" y="8.8" fontSize="3.4" stroke="none" fill="currentColor" fontFamily="sans-serif">A</text>
    <text x="18" y="14.8" fontSize="3.4" stroke="none" fill="currentColor" fontFamily="sans-serif">C</text>
  </svg>
);

// Kindergarten — toy car
export const KindergartenIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M3.5 14.5l1.2-4A2 2 0 016.6 9h7.8a2 2 0 011.9 1.4l1.2 4.1" />
    <rect x="2.5" y="14.5" width="19" height="3.2" rx="1" />
    <circle cx="7" cy="18.5" r="1.6" />
    <circle cx="17" cy="18.5" r="1.6" />
    <line x1="9.5" y1="9" x2="9.5" y2="14.5" />
  </svg>
);

// Pre-K — pacifier
export const PrekIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="12" cy="9" r="4.2" />
    <path d="M8.5 12.3c-1 1-1 2.6 0 3.6s2.6 1 3.6 0" />
    <rect x="9.5" y="16.2" width="5" height="3" rx="1.2" />
  </svg>
);

export const SunIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2.5" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="21.5" />
    <line x1="2.5" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="21.5" y2="12" />
    <line x1="5.3" y1="5.3" x2="7" y2="7" />
    <line x1="17" y1="17" x2="18.7" y2="18.7" />
    <line x1="18.7" y1="5.3" x2="17" y2="7" />
    <line x1="7" y1="17" x2="5.3" y2="18.7" />
  </svg>
);

export const KeyIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="8" cy="15" r="3.5" />
    <line x1="10.5" y1="12.5" x2="20" y2="3" />
    <line x1="16" y1="7" x2="18.5" y2="9.5" />
    <line x1="18.5" y1="4.5" x2="21" y2="7" />
  </svg>
);

export const ClassesIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="9" cy="7" r="2.6" />
    <path d="M4 18c0-2.8 2.2-5 5-5s5 2.2 5 5" />
    <rect x="14.5" y="9.5" width="6.5" height="5" rx="1" />
    <line x1="16" y1="12" x2="19.5" y2="12" />
  </svg>
);

export const HeartIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M12 20s-7.5-4.6-9.7-9.1C.7 7.6 2.3 4.5 5.5 4c2-.3 3.6.7 6.5 3.2C14.9 4.7 16.5 3.7 18.5 4c3.2.5 4.8 3.6 3.2 6.9C19.5 15.4 12 20 12 20z" />
  </svg>
);
