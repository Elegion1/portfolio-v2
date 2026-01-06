'use client';

import { useState, useEffect } from 'react';
import { navigationItems } from '../lib/utils';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-mono text-xl font-bold text-gradient">
          &lt;dev/&gt;
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium font-mono ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-primary to-[hsl(220,100%,60%)] text-primary-foreground hover:shadow-[0_0_30px_hsl(187,100%,50%,0.4)] hover:scale-105 h-9 rounded-md px-3">
            Contattami
          </button>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}