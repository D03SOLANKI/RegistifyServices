import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', iconOnly = false }) => {
  const isLight = variant === 'light';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Custom Vector Emblem */}
      <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="logoNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#142B49" />
              <stop offset="100%" stopColor="#246BCE" />
            </linearGradient>
            <linearGradient id="logoTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#18A999" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>

          {/* Base Geometric Shield / Document */}
          <rect width="48" height="48" rx="12" fill="url(#logoNavyGrad)" />
          
          {/* Subtle Document Corner Accent */}
          <path d="M14 11C14 9.89543 14.8954 9 16 9H27L34 16V37C34 38.1046 33.1046 39 32 39H16C14.8954 39 14 38.1046 14 37V11Z" fill="#ffffff" fillOpacity="0.14" />
          <path d="M26 9V17H34L26 9Z" fill="#ffffff" fillOpacity="0.25" />

          {/* Bold Modern 'R' Monogram */}
          <path
            d="M17 17C17 16.4477 17.4477 16 18 16H25C27.7614 16 30 18.2386 30 21C30 23.3643 28.3619 25.3444 26.1408 25.8622L30.5 32H26.3L22.5 26.5H20V32H17V17ZM20 23.5H24.8C26.1807 23.5 27.3 22.3807 27.3 21C27.3 19.6193 26.1807 18.5 24.8 18.5H20V23.5Z"
            fill="#ffffff"
          />

          {/* Vibrant Verification Node (Teal Checkmark Orb) */}
          <circle cx="34" cy="34" r="7.5" fill="url(#logoTealGrad)" stroke="#142B49" strokeWidth="2.2" />
          <path
            d="M31.2 34L33.2 36L37 31.8"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Typography */}
      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-tight">
            <span className={`text-xl font-extrabold tracking-wider ${isLight ? 'text-white' : 'text-[#142B49]'}`}>
              REGISTIFY
            </span>
            <span className="text-xl font-light ml-1 text-teal-500">
              SERVICES
            </span>
          </div>
          <span className={`text-[10px] tracking-widest uppercase font-semibold -mt-1 ${isLight ? 'text-slate-300' : 'text-slate-500'}`}>
            Guidance • Compliance • Finance
          </span>
        </div>
      )}
    </Link>
  );
};
