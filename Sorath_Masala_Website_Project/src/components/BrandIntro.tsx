import { useEffect, useRef } from 'react';
import { gsap } from '../animations/scrollAnimations';

export const BrandIntro: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal Heading & Paragraph
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
          }
        }
      );

      // Large Statement Entry
      gsap.fromTo(
        statementRef.current,
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statementRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#F7F0E4] rounded-t-[25px] pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-t border-[#A51D25]/10 shadow-[0_-20px_40px_rgba(36,20,13,0.03)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Editorial Subheading */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="w-8 h-[2px] bg-[#A51D25]" />
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#6F1017]">
            OUR PHILOSOPHY
          </span>
        </div>

        {/* Section Heading & Supporting Copy */}
        <div ref={headlineRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#24140D] leading-[1.02]">
              ROOTED IN TASTE. <br />
              <span className="text-[#A51D25]">BUILT ON TRUST.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-lg text-[#765E50] leading-relaxed font-normal">
              Sorath Masala Gruh Udhyog brings authentic spices and masalas to everyday
              kitchens with a focus on flavour, quality and the character of traditional
              Indian taste.
            </p>
            <p className="mt-4 text-sm text-[#765E50]/80">
              Each recipe is created to recreate genuine home-cooked warmth, honoring
              generations of regional culinary heritage.
            </p>
          </div>
        </div>

        {/* Brand Statement Callout */}
        <div
          ref={statementRef}
          className="relative bg-[#FFF9F0] border border-[#6F1017]/15 rounded-3xl p-8 sm:p-14 md:p-16 text-center shadow-lg overflow-hidden"
        >
          {/* Subtle Corner Motif */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E8A928]/20 to-transparent pointer-events-none rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#6F1017]/10 to-transparent pointer-events-none rounded-tr-full" />

          <span className="text-xs font-semibold tracking-widest text-[#765E50] uppercase mb-4 block">
            The Core Creed
          </span>

          <h3 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#24140D] leading-[1.05] max-w-4xl mx-auto">
            <span className="text-[#6F1017]">GOOD FOOD</span> <br />
            BEGINS WITH <br />
            <span className="text-[#E8A928]">GOOD SPICES.</span>
          </h3>

          <div className="mt-8 flex justify-center items-center space-x-2">
            <span className="w-12 h-[1px] bg-[#6F1017]/30" />
            <span className="text-xs tracking-widest text-[#6F1017] uppercase font-bold">
              Sorath Masala Swaad Aapke Vishwas Ka
            </span>
            <span className="w-12 h-[1px] bg-[#6F1017]/30" />
          </div>
        </div>
      </div>
    </section>
  );
};
