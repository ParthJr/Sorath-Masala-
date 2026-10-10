import { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { gsap } from '../animations/scrollAnimations';

interface FinalProductProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export const FinalProduct: React.FC<FinalProductProps> = ({
  onExploreClick,
  onContactClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const productImgRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Dramatic reveal on scroll
      gsap.fromTo(
        productImgRef.current,
        { scale: 0.75, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%'
          }
        }
      );

      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%'
          }
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90svh] bg-[#6F1017] text-[#FFF9F0] overflow-hidden flex flex-col justify-center items-center py-24 px-4 sm:px-6 lg:px-8 text-center"
    >
      {/* Background Ambience & Golden Particles */}
      <div className="absolute inset-0 bg-radial from-[#A51D25] via-[#6F1017] to-[#24140D] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E8A928]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating spice particles subtle styling */}
      <div className="absolute top-12 left-12 opacity-30 text-2xl select-none animate-pulse">
        ✨
      </div>
      <div className="absolute bottom-16 right-16 opacity-30 text-2xl select-none animate-pulse">
        🌶️
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#E8A928]/20 border border-[#E8A928]/40 text-[#E8A928] text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Climax of Taste</span>
        </div>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#FFF9F0] tracking-tight leading-[0.98] mb-4"
        >
          THE SPICE <br />
          <span className="text-[#E8A928]">BEHIND THE TASTE.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#FFF9F0]/85 font-normal max-w-xl mb-10">
          Discover the authentic flavour of Sorath Masala. Bringing rich aroma and
          uncompromising culinary heritage to every family dish.
        </p>

        {/* Actual Uploaded Product Image as Climax Hero */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="relative w-72 sm:w-96 aspect-square flex items-center justify-center">
            {/* Soft pulsing aura behind the product */}
            <div className="absolute inset-0 bg-radial from-[#F2C14E]/30 via-transparent to-transparent rounded-full animate-pulse pointer-events-none" />
            <img
              ref={productImgRef}
              src="/assets/products/s9.jpg"
              alt="Sorath Masala Bombay Pav Bhaji Hero"
              className="max-h-[340px] sm:max-h-[400px] w-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>

        {/* Final CTA Action */}
        <div ref={ctaRef} className="mt-8 flex flex-col items-center space-y-4">
          <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#FFF9F0]">
            BRING AUTHENTIC TASTE TO EVERY KITCHEN.
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase bg-[#FFF9F0] text-[#6F1017] hover:bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer shadow-lg"
            >
              EXPLORE PRODUCTS
            </button>
            <button
              onClick={onContactClick}
              className="px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase border-2 border-[#FFF9F0] text-[#FFF9F0] hover:bg-[#FFF9F0]/10 transition-all duration-300 cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
