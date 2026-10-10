import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { gsap, ScrollTrigger } from '../animations/scrollAnimations';

interface Stage {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  badge: string;
  image: string;
  ingredients: string[];
}

const STAGES: Stage[] = [
  {
    number: '01',
    title: 'RAW SPICES',
    subtitle: 'Harvest & Natural Purity',
    desc: 'Sun-dried chillies, fragrant cumin, coriander seeds, and whole turmeric sourced directly with deep respect for aroma and natural oil richness.',
    badge: 'Whole & Unprocessed',
    image: '/assets/products/s4.jpg',
    ingredients: ['Red Chilli', 'Turmeric', 'Coriander Seeds', 'Jeera (Cumin)']
  },
  {
    number: '02',
    title: 'CARE',
    subtitle: 'Selection & Gentle Cleaning',
    desc: 'Each raw batch is manually inspected, destoned, cleaned, and sun-conditioned to preserve indigenous flavor profiles without chemical treatment.',
    badge: 'Traditional Scrutiny',
    image: '/assets/products/s8.jpg',
    ingredients: ['Manual Sorting', 'Zero Contaminants', 'Moisture Checked']
  },
  {
    number: '03',
    title: 'BLENDING',
    subtitle: 'Artisanal Roasting & Grinding',
    desc: 'Slow stone-grinding at controlled temperatures prevents aroma evaporation, ensuring the signature rustic grain and balanced warmth.',
    badge: 'Controlled Grinding',
    image: '/assets/products/s1.jpg',
    ingredients: ['Roasting Technique', 'Slow Cold Grinding', 'Original Aroma Retention']
  },
  {
    number: '04',
    title: 'QUALITY',
    subtitle: 'No Artificial Additives',
    desc: 'No adulterants, no added fillers, and strictly true-to-label spices. Ensuring everyday cooking remains clean, nutritious, and authentic.',
    badge: 'Gruh Udhyog Integrity',
    image: '/assets/products/s12.jpg',
    ingredients: ['Koi Preservatives Vagar', 'Natural Pigments Only', 'Consistent Taste']
  },
  {
    number: '05',
    title: 'PACKAGING',
    subtitle: 'Hermetic Foil & Shaker Seals',
    desc: 'Aroma-locking multi-layer pouches and moisture-resistant sprinkler jars keep the freshness sealed from our kitchen to yours.',
    badge: 'Freshness Guaranteed',
    image: '/assets/products/s6.jpg',
    ingredients: ['Multi-layer Pouch', 'Sprinkler Protection', 'Long-lasting Pungency']
  },
  {
    number: '06',
    title: 'SORATH MASALA',
    subtitle: 'The Finished Culinary Masterpiece',
    desc: 'The iconic taste that brings authentic character to Pav Bhaji, Chhole, Ragda Patties, Buttermilk, and cherished family meals.',
    badge: 'Ghar Jaisi Baat Vahi Swad',
    image: '/assets/products/s9.jpg',
    ingredients: ['Bombay Pav Bhaji', 'Amritsari Chhole', 'Spiced Chaas']
  }
];

export const SpiceJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Create scroll-driven stage change
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=350%',
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const stageIndex = Math.min(
            STAGES.length - 1,
            Math.floor(progress * STAGES.length)
          );
          setActiveStage(stageIndex);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const current = STAGES[activeStage];

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative min-h-[100svh] bg-[#6F1017] text-[#FFF9F0] overflow-hidden flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 border-y border-[#A51D25]"
    >
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A928_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#A51D25]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Header matching Hero Spotlight structure and layout */}
        <div className="flex items-center justify-between border-b border-[#FFF9F0]/15 pb-4 mb-8">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8A928] animate-ping" />
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#E8A928]">
              THE ART OF BLENDING &bull; 0{activeStage + 1} OF 0{STAGES.length}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FFF9F0]/60 hidden sm:block">
              Scroll To Discover Stages
            </span>
            <div className="flex gap-1.5">
              {STAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeStage
                      ? 'w-8 bg-[#E8A928]'
                      : 'w-2 bg-[#FFF9F0]/30 hover:bg-[#FFF9F0]/60'
                  }`}
                  aria-label={`Stage ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Stage Grid - identical column structure to Hero Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Stage Text Content matching Hero Spotlight typography & scale */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8A928] bg-[#24140D] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#E8A928]/30">
                STAGE {current.number} &bull; {current.badge}
              </span>
              <div className="text-lg font-bold text-[#F2C14E] mb-1">
                {current.subtitle}
              </div>
              <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#FFF9F0] tracking-tight leading-[0.98]">
                {current.title}
              </h3>
            </div>

            <p className="text-lg sm:text-xl font-medium text-[#E8A928] italic">
              "Crafting true aroma and wholesome purity through disciplined traditional methods."
            </p>

            <p className="text-base text-[#FFF9F0]/85 leading-relaxed max-w-xl">
              {current.desc}
            </p>

            <div className="pt-4 border-t border-[#FFF9F0]/15 space-y-3">
              <div className="flex items-center space-x-3 text-sm text-[#FFF9F0]/90">
                <Sparkles className="w-4 h-4 text-[#E8A928]" />
                <span><strong className="text-white">Process Focus:</strong> {current.badge}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {current.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#24140D]/70 border border-[#E8A928]/30 text-[#FFF9F0]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Presentation with exact matching dimensions to Hero Spotlight */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-md sm:max-w-lg rounded-3xl bg-gradient-to-b from-[#24140D]/90 to-[#24140D] border border-[#E8A928]/30 p-6 sm:p-8 flex flex-col items-center justify-center shadow-2xl">
              {/* Radial glow around active product */}
              <div className="absolute inset-0 bg-radial from-[#A51D25]/40 via-transparent to-transparent pointer-events-none rounded-3xl" />

              {/* Product Artwork in Stage - identical min-h and max-h sizing */}
              <div className="relative z-10 w-full flex items-center justify-center min-h-[340px] sm:min-h-[400px]">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className="max-h-[360px] sm:max-h-[420px] w-auto max-w-full object-contain rounded-xl drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out transform hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Bottom Stage Indicator matching Hero Spotlight footer bar */}
              <div className="w-full mt-4 pt-3 border-t border-[#FFF9F0]/15 flex justify-between items-center text-xs text-[#FFF9F0]/70 z-20">
                <span className="font-semibold text-[#E8A928] uppercase tracking-wider">
                  {current.title}
                </span>
                <span className="text-[#E8A928] font-bold uppercase">
                  Sorath Process Stage {current.number}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stage Progress indicators at bottom matching Hero Spotlight */}
        <div className="flex items-center justify-center space-x-3 mt-12">
          {STAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeStage
                  ? 'w-10 bg-[#E8A928]'
                  : 'w-2 bg-[#FFF9F0]/30 hover:bg-[#FFF9F0]/60'
              }`}
              aria-label={`Go to Stage ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
