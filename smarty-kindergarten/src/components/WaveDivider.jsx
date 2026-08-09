import React from 'react';

// Soft fluid wave curves matching target design
const SINGLE_BOTTOM_PATH =
  'M0,0 Q360,70 720,25 T1440,30 L1440,100 L0,100 Z';

const DOUBLE_TOP_PATH =
  'M0,100 Q360,15 720,70 T1440,20 L1440,100 Z';

const DOUBLE_BOTTOM_PATH =
  'M0,0 Q360,85 720,30 T1440,70 L1440,100 L0,100 Z';

export function WaveTop({ color, variant = 'double', className = '' }) {
  const d = variant === 'single' ? SINGLE_BOTTOM_PATH : DOUBLE_TOP_PATH;
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className={`block w-full h-[40px] md:h-[60px] ${className}`}
      aria-hidden="true"
    >
      <path d={d} fill={color} />
    </svg>
  );
}

export function WaveBottom({ color, variant = 'double', className = '' }) {
  const d = variant === 'single' ? SINGLE_BOTTOM_PATH : DOUBLE_BOTTOM_PATH;
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className={`block w-full h-[40px] md:h-[60px] ${className} `}
      aria-hidden="true"
      style={{ rotate: '180deg' }}
    >
      <path d={d} fill={color} />
    </svg>
  );
}