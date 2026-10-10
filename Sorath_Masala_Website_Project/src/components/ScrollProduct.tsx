import { useEffect, useRef, useState } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { gsap, ScrollTrigger } from '../animations/scrollAnimations';

const FEATURED_HEROES = PRODUCTS.filter((p) => p.featured).slice(0, 5);

export const ScrollProduct: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${FEATURED_HEROES.length * 100}%`,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const index = Math.min(
            FEATURED_HEROES.length - 1,
            Math.floor(self.progress * FEATURED_HEROES.length)
          );
          setActiveIndex(index);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const active = FEATURED_HEROES[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] bg-[#24140D] text-[#FFF9F0] overflow-hidden flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 border-y border-[#6F1017]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial from-[#6F1017]/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E8A928]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Tag */}
        <div className="flex items-center justify-between border-b border-[#FFF9F0]/15 pb-4 mb-8">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8A928] animate-ping" />
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#E8A928]">
              HERO SPOTLIGHT &bull; 0{activeIndex + 1} OF 0{FEATURED_HEROES.length}
            </span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FFF9F0]/60 hidden sm:block">
            Scroll To Advance
          </span>
        </div>

        {/* Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Product Information */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8A928] bg-[#6F1017] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#E8A928]/30">
                {active.category}
              </span>
              {active.gujaratiName && (
                <div className="text-lg font-bold text-[#F2C14E] mb-1">
                  {active.gujaratiName}
                </div>
              )}
              {active.hindiName && (
                <div className="text-lg font-bold text-[#F2C14E] mb-1">
                  {active.hindiName}
                </div>
              )}
              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#FFF9F0] tracking-tight leading-[0.98]">
                {active.name}
              </h3>
            </div>

            <p className="text-lg sm:text-xl font-medium text-[#E8A928] italic">
              "{active.tagline}"
            </p>

            <p className="text-base text-[#FFF9F0]/80 leading-relaxed max-w-xl">
              {active.description}
            </p>

            <div className="pt-4 border-t border-[#FFF9F0]/15 space-y-3">
              <div className="flex items-center space-x-3 text-sm text-[#FFF9F0]/90">
                <Sparkles className="w-4 h-4 text-[#E8A928]" />
                <span><strong className="text-white">Culinary Pairing:</strong> {active.dishName}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#FFF9F0]/90">
                <Check className="w-4 h-4 text-[#426B35]" />
                <span><strong className="text-white">Packaging:</strong> {active.packagingType} sealed for natural freshness</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual - packaging untouched and unclipped */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-md sm:max-w-lg rounded-3xl bg-gradient-to-b from-[#6F1017]/40 to-[#24140D] border border-[#E8A928]/30 p-6 sm:p-8 flex flex-col items-center justify-center shadow-2xl">
              {/* Radial glow around active product */}
              <div className="absolute inset-0 bg-radial from-[#E8A928]/25 via-transparent to-transparent pointer-events-none rounded-3xl" />
              
              <div className="relative z-10 w-full flex items-center justify-center min-h-[340px] sm:min-h-[400px]">
                <img
                  key={active.id}
                  src={active.image}
                  alt={active.name}
                  className="max-h-[360px] sm:max-h-[420px] w-auto max-w-full object-contain rounded-xl drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out transform hover:scale-103"
                />
              </div>

              <div className="w-full mt-4 pt-3 border-t border-[#FFF9F0]/15 flex justify-between items-center text-xs text-[#FFF9F0]/70 z-20">
                <span>Sorath Masala Original</span>
                <span className="text-[#E8A928] font-bold uppercase">{active.packagingType}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stage Progress indicators */}
        <div className="flex items-center justify-center space-x-3 mt-12">
          {FEATURED_HEROES.map((hero, idx) => (
            <button
              key={hero.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-10 bg-[#E8A928]'
                  : 'w-2 bg-[#FFF9F0]/30 hover:bg-[#FFF9F0]/60'
              }`}
              aria-label={`Go to ${hero.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
