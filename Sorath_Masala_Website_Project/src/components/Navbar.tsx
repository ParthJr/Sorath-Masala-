import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

interface NavbarProps {
  activeTab?: string;
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F7F0E4]/90 backdrop-blur-md shadow-md border-b border-[#6F1017]/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-md border border-[#A51D25]/30 shadow-sm transition-transform duration-300 group-hover:scale-105 bg-white p-1">
                <img
                  src={BRAND_INFO.logo}
                  alt={BRAND_INFO.name}
                  className="h-10 w-auto object-contain block"
                  width="80"
                  height="40"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-[#6F1017]">
                  {BRAND_INFO.shortName}
                </span>
                <span className="text-[10px] tracking-widest text-[#765E50] font-medium uppercase hidden sm:block">
                  Gruh Udhyog
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { label: 'HOME', id: 'hero' },
                { label: 'ABOUT US', id: 'about' },
                { label: 'JOURNEY', id: 'journey' },
                { label: 'PRODUCTS', id: 'products' },
                { label: 'CONTACT', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-xs uppercase tracking-widest font-semibold text-[#24140D] hover:text-[#A51D25] transition-colors duration-200 cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A51D25] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#A51D25] text-[#FFF9F0] hover:bg-[#6F1017] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                CONTACT US
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-lg text-[#6F1017] hover:bg-[#6F1017]/10 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[2.5]" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[2.5]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#24140D] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-6'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <div className="mb-2">
            <span className="text-xs uppercase tracking-widest text-[#E8A928]">Menu</span>
          </div>
          {[
            { label: 'HOME', id: 'hero' },
            { label: 'ABOUT US', id: 'about' },
            { label: 'JOURNEY', id: 'journey' },
            { label: 'PRODUCTS', id: 'products' },
            { label: 'CONTACT', id: 'contact' },
          ].map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                transitionDelay: mobileMenuOpen ? `${idx * 70}ms` : '0ms'
              }}
              className="text-left font-display text-2xl font-bold tracking-wider text-[#FFF9F0] hover:text-[#E8A928] transition-all transform hover:translate-x-2"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="pt-8 border-t border-[#765E50]/40 space-y-4">
          <div className="flex items-center space-x-3 text-sm text-[#F7F0E4]/80">
            <Phone className="w-4 h-4 text-[#E8A928]" />
            <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-white">
              +91 {BRAND_INFO.phone}
            </a>
          </div>
          <div className="flex items-center space-x-3 text-sm text-[#F7F0E4]/80">
            <Mail className="w-4 h-4 text-[#E8A928]" />
            <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white">
              {BRAND_INFO.email}
            </a>
          </div>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full mt-4 py-3 rounded-full text-center text-sm font-semibold tracking-wider uppercase bg-[#A51D25] text-[#FFF9F0] hover:bg-[#6F1017] transition-all"
          >
            ORDER &amp; TRADE INQUIRIES
          </button>
        </div>
      </div>
    </>
  );
};
