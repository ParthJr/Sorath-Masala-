import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, HeartHandshake, Flame, Sparkles } from 'lucide-react';
import { gsap, ScrollTrigger } from '../animations/scrollAnimations';

interface ValueCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const VALUES: ValueCard[] = [
  {
    id: 'val-1',
    title: 'AUTHENTIC FLAVOUR',
    subtitle: 'Ghar Jaisi Baat Vahi Swad',
    description:
      'Rooted in centuries-old regional cooking practices, each blend strikes the true traditional notes of Indian cuisine without synthetic seasonings or artificial flavour enhancers.',
    icon: Sparkles
  },
  {
    id: 'val-2',
    title: 'CAREFULLY SELECTED INGREDIENTS',
    subtitle: 'Pure Sun-Dried Whole Spices',
    description:
      'We curate raw red chillies, coriander seeds, turmeric roots, and roasted cumin with stringent checks on natural oil preservation, dryness, and soil-grade purity.',
    icon: Flame
  },
  {
    id: 'val-3',
    title: 'CONSISTENT QUALITY',
    subtitle: 'Strict Batch Standards',
    description:
      'From batch inspection to precise roasting parameters and cold-temperature milling, every packet delivers uniform texture, aroma, and color day after day.',
    icon: ShieldCheck
  },
  {
    id: 'val-4',
    title: 'TRADITIONAL TASTE',
    subtitle: 'Gruh Udhyog Craftsmanship',
    description:
      'Conceived with the sincerity of home-ground spice makers, ensuring everyday family lunches and royal weekend dinners evoke fond memories of grandmother’s kitchen.',
    icon: HeartHandshake
  }
];

export const WhySorath: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeValueIndex, setActiveValueIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'bottom 40%',
        scrub: true,
        onUpdate: (self) => {
          const index = Math.min(
            VALUES.length - 1,
            Math.floor(self.progress * VALUES.length)
          );
          setActiveValueIndex(index);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#F7F0E4] py-28 px-4 sm:px-6 lg:px-8 border-t border-[#A51D25]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-2 text-xs font-bold tracking-[0.2em] text-[#6F1017] uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-[#6F1017]" />
            <span>UNCOMPROMISING PRINCIPLES</span>
            <span className="w-6 h-[1.5px] bg-[#6F1017]" />
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-[#24140D] tracking-tight">
            WHY SORATH <span className="text-[#A51D25]">MASALA</span>
          </h2>
          <p className="text-base sm:text-lg text-[#765E50] mt-4">
            Our unwavering commitment to real flavour, genuine raw ingredients, and
            kitchen trustworthiness.
          </p>
        </div>

        {/* 4 Major Value Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            const isActive = idx === activeValueIndex;

            return (
              <div
                key={val.id}
                onClick={() => setActiveValueIndex(idx)}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer border ${
                  isActive
                    ? 'bg-[#6F1017] text-[#FFF9F0] border-[#E8A928] shadow-2xl scale-[1.02]'
                    : 'bg-[#FFF9F0] text-[#24140D] border-[#765E50]/20 hover:border-[#A51D25]/40 opacity-80 hover:opacity-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isActive
                          ? 'bg-[#A51D25] text-[#E8A928]'
                          : 'bg-[#F7F0E4] text-[#6F1017]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`font-display text-2xl font-black ${
                        isActive ? 'text-[#E8A928]' : 'text-[#765E50]/40'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-xl sm:text-2xl font-black uppercase tracking-tight mb-2 ${
                      isActive ? 'text-[#FFF9F0]' : 'text-[#24140D]'
                    }`}
                  >
                    {val.title}
                  </h3>

                  <p
                    className={`text-xs uppercase tracking-wider font-semibold mb-4 ${
                      isActive ? 'text-[#E8A928]' : 'text-[#A51D25]'
                    }`}
                  >
                    {val.subtitle}
                  </p>

                  <p
                    className={`text-sm leading-relaxed ${
                      isActive ? 'text-[#FFF9F0]/85' : 'text-[#765E50]'
                    }`}
                  >
                    {val.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-current/10 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider">
                  <span>Sorath Guarantee</span>
                  <span className={isActive ? 'text-[#E8A928]' : 'text-[#A51D25]'}>
                    {isActive ? 'Active Pillar' : 'Select'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
