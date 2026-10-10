import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import { HeroVideo } from './HeroVideo';
import { gsap } from '../animations/scrollAnimations';

interface HeroProps {
  onExploreClick?: () => void;
  onStoryClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onStoryClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Staggered Entrance Animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.4'
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] bg-[#F7F0E4] overflow-hidden flex flex-col justify-center pt-28 pb-16 lg:pt-32 lg:pb-20"
    >
      {/* Decorative Warm Saffron & Spice Gradient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#E8A928]/15 via-[#A51D25]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#6F1017]/10 via-[#F2C14E]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating Spice Parallax Subtle Motifs */}
      <div className="absolute top-28 left-[5%] hidden xl:block pointer-events-none opacity-30 select-none">
        <div className="w-14 h-14 rounded-full border border-[#E8A928]/30 flex items-center justify-center animate-[spin_40s_linear_infinite]">
          <span className="text-xl">🌶️</span>
        </div>
      </div>
      <div className="absolute bottom-28 right-[5%] hidden xl:block pointer-events-none opacity-30 select-none">
        <div className="w-14 h-14 rounded-full border border-[#6F1017]/20 flex items-center justify-center animate-[spin_50s_linear_infinite_reverse]">
          <span className="text-xl">🌿</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Brand Story & Big Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Logo Display */}
            <div
              ref={logoRef}
              className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-[#A51D25]/20 shadow-sm mb-5"
            >
              <img
                src={BRAND_INFO.logo}
                alt="Sorath Masala Official Logo"
                className="h-10 sm:h-11 w-auto object-contain"
                width="90"
                height="44"
              />
              <div className="border-l border-[#6F1017]/20 pl-3">
                <span className="text-xs uppercase font-bold tracking-widest text-[#6F1017] block">
                  {BRAND_INFO.shortName}
                </span>
                <span className="text-[10px] tracking-wider text-[#765E50] font-medium">
                  GRUH UDHYOG
                </span>
              </div>
            </div>

            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E8A928]/20 border border-[#E8A928]/50 text-[#6F1017] text-xs font-semibold uppercase tracking-wider mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A51D25]" />
              <span>Ghar Jaisi Baat Vahi Swad</span>
            </div>

            {/* Editorial Heading - Responsive clamped size so it never collides */}
            <h1
              ref={headlineRef}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-black uppercase tracking-[0.01em] text-[#24140D] leading-[0.98] mb-5"
            >
              THE TASTE <br />
              <span className="text-[#A51D25]">OF</span> <br />
              <span className="text-[#6F1017] underline decoration-[#E8A928]/60 decoration-wavy decoration-from-font">
                AUTHENTICITY
              </span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtextRef}
              className="text-sm sm:text-base md:text-lg text-[#765E50] max-w-lg font-normal leading-relaxed mb-7"
            >
              Authentic spices and masalas crafted to bring rich flavour, true aroma,
              and traditional culinary soul to every kitchen.
            </p>

            {/* Action Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm tracking-widest uppercase bg-[#A51D25] text-[#FFF9F0] hover:bg-[#6F1017] transition-all duration-300 shadow-lg shadow-[#A51D25]/20 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer text-center"
              >
                EXPLORE OUR PRODUCTS
              </button>
              <button
                onClick={onStoryClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm tracking-widest uppercase border-2 border-[#A51D25] text-[#A51D25] hover:bg-[#A51D25]/10 transition-all duration-300 cursor-pointer text-center"
              >
                OUR STORY
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="mt-8 pt-5 border-t border-[#765E50]/20 flex flex-wrap gap-5 text-[11px] sm:text-xs text-[#765E50] uppercase tracking-wider font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#426B35]" />
                100% Traditional Taste
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E8A928]" />
                Carefully Selected Spices
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#A51D25]" />
                Gruh Udhyog Purity
              </span>
            </div>
          </div>

          {/* Right Column: Hero Video Showcase with clean centering and isolation */}
          <div className="lg:col-span-5 flex justify-center items-center py-4 lg:py-0">
            <HeroVideo />
          </div>
        </div>
      </div>

      {/* Down Scroll Prompt */}
      <div className="mt-6 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-widest uppercase font-semibold text-[#765E50] mb-1">
          Scroll To Discover
        </span>
        <ArrowDown className="w-4 h-4 text-[#A51D25] animate-bounce" />
      </div>
    </section>
  );
};
