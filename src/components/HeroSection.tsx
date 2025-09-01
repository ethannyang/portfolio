'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current && !prefersReducedMotion) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    if (!prefersReducedMotion) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (!prefersReducedMotion) {
      setIsHovering(false);
    }
  };

  return (
    <section className="mb-16">
      <div className="relative">
        {/* Crop Marks */}
        <div className="absolute -top-4 -left-4 w-4 h-4 border-l-2 border-t-2 border-gray-400 dark:border-gray-500"></div>
        <div className="absolute -top-4 -right-4 w-4 h-4 border-r-2 border-t-2 border-gray-400 dark:border-gray-500"></div>
        <div className="absolute -bottom-4 -left-4 w-4 h-4 border-l-2 border-b-2 border-gray-400 dark:border-gray-500"></div>
        <div className="absolute -bottom-4 -right-4 w-4 h-4 border-r-2 border-b-2 border-gray-400 dark:border-gray-500"></div>
        
        {/* Hero Canvas */}
        <div
          ref={heroRef}
          className="relative border border-gray-200 dark:border-gray-700 p-6 md:p-10 min-h-[350px] flex items-center justify-center overflow-hidden group"
          style={{
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)'
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Rainbow Gradient Background (Hidden by default) */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 via-purple-400 to-pink-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ctext font-family='monospace' font-size='8'%3E01%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          {/* Hover Reveal Effect */}
          {!prefersReducedMotion && (
            <div
              className="absolute pointer-events-none transition-all duration-200 ease-out rounded-full"
              style={{
                left: mousePosition.x - 100,
                top: mousePosition.y - 100,
                opacity: isHovering ? 1 : 0,
                transform: 'translate3d(0, 0, 0)',
                width: '200px',
                height: '200px',
                background: `radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`,
                filter: 'blur(15px)',
              }}
            ></div>
          )}

          {/* Content */}
          <div className="relative z-10 flex items-center space-x-6 md:space-x-8">
            <Image
              src="/logo.svg"
              alt="Ethan Yang Logo"
              width={80}
              height={80}
              className="w-20 h-20 md:w-24 md:h-24"
              style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(190deg) brightness(118%) contrast(96%)' }}
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-sky-400">
              {siteConfig.name}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
