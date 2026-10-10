import React from 'react';
import { BRAND_INFO } from '../data/products';
import { Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#24140D] text-[#FFF9F0] border-t border-[#6F1017] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FFF9F0]/10 items-start">
          {/* Logo & Brand Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-1 bg-white rounded-lg border border-[#A51D25]/30">
                <img
                  src={BRAND_INFO.logo}
                  alt={BRAND_INFO.name}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold tracking-wider text-[#FFF9F0]">
                  {BRAND_INFO.shortName}
                </h4>
                <p className="text-[10px] tracking-widest text-[#E8A928] uppercase font-semibold">
                  GRUH UDHYOG
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FFF9F0]/70 max-w-sm leading-relaxed">
              Sorath Masala Gruh Udhyog brings authentic Indian spices and blended masalas
              to kitchens with an enduring commitment to purity, rich aroma, and home-cooked taste.
            </p>

            <p className="text-xs italic text-[#E8A928]">
              "{BRAND_INFO.tagline}"
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-display text-xs uppercase font-bold tracking-[0.2em] text-[#E8A928]">
              EXPLORE
            </h5>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'HOME', id: 'hero' },
                { label: 'ABOUT US', id: 'about' },
                { label: 'SPICE JOURNEY', id: 'journey' },
                { label: 'PRODUCTS COLLECTION', id: 'products' },
                { label: 'CONTACT & TRADE', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-[#FFF9F0]/70 hover:text-[#E8A928] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="font-display text-xs uppercase font-bold tracking-[0.2em] text-[#E8A928]">
              ORDER &amp; INQUIRIES
            </h5>
            <div className="space-y-2 text-xs text-[#FFF9F0]/75">
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#E8A928]" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-white">
                  +91 {BRAND_INFO.phone}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#E8A928]" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white">
                  {BRAND_INFO.email}
                </a>
              </p>
              <p className="pt-2 text-[11px] text-[#FFF9F0]/50">
                Official Gruh Udhyog Manufacturer &bull; Gujarat, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF9F0]/50 gap-4">
          <p>
            &copy; {BRAND_INFO.copyrightYear} {BRAND_INFO.name}. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#E8A928] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
