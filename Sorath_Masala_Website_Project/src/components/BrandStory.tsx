import { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { gsap } from '../animations/scrollAnimations';

export const BrandStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Transition elements
      gsap.fromTo(
        '.trans-step',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#24140D] text-[#FFF9F0] py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial from-[#6F1017]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section 6: Product + Ingredient Transition */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#E8A928] block mb-2">
              THE TRANSFORMATION
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FFF9F0]">
              RAW INGREDIENTS <br />
              <span className="text-[#E8A928]">TO THE MASTER BLEND</span>
            </h2>
            <p className="text-sm sm:text-base text-[#FFF9F0]/70 mt-3">
              Witness the seamless craft transforming hand-selected sun-dried spices
              into the finished Sorath Masala package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            {/* Step 1 */}
            <div className="trans-step bg-[#FFF9F0]/5 border border-[#FFF9F0]/10 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🌶️</div>
              <h4 className="font-display text-lg font-bold uppercase text-[#E8A928]">
                1. RAW SPICES
              </h4>
              <p className="text-xs text-[#FFF9F0]/70 mt-2">
                Sun-dried whole red chillies, cumin, coriander, cinnamon &amp; cloves.
              </p>
            </div>

            {/* Step 2 */}
            <div className="trans-step bg-[#FFF9F0]/5 border border-[#FFF9F0]/10 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="font-display text-lg font-bold uppercase text-[#E8A928]">
                2. POWDERED SPICES
              </h4>
              <p className="text-xs text-[#FFF9F0]/70 mt-2">
                Slow cold-milled to retain the natural oils and vibrant red and golden pigments.
              </p>
            </div>

            {/* Step 3 */}
            <div className="trans-step bg-[#FFF9F0]/5 border border-[#FFF9F0]/10 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🥣</div>
              <h4 className="font-display text-lg font-bold uppercase text-[#E8A928]">
                3. MASALA BLEND
              </h4>
              <p className="text-xs text-[#FFF9F0]/70 mt-2">
                Traditional ratios formulated to achieve authentic balance without artificial fillers.
              </p>
            </div>

            {/* Step 4: Finished Hero Product */}
            <div className="trans-step bg-[#6F1017] border-2 border-[#E8A928] rounded-2xl p-6 text-center shadow-xl">
              <div className="relative h-28 flex items-center justify-center mb-2">
                <img
                  src="/assets/products/s9.jpg"
                  alt="Sorath Masala Finished Product"
                  className="max-h-full w-auto object-contain drop-shadow-md"
                />
              </div>
              <h4 className="font-display text-lg font-bold uppercase text-[#FFF9F0]">
                4. FINISHED PACK
              </h4>
              <p className="text-xs text-[#FFF9F0]/90 mt-1">
                Sorath Masala Original hermetically sealed for peak aromatic freshness.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: About Brand Editorial */}
        <div className="border-t border-[#FFF9F0]/15 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#E8A928] block mb-2">
                AUTHENTIC ROOTS
              </span>
              <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FFF9F0] leading-[1.05]">
                THE STORY BEHIND <br />
                <span className="text-[#E8A928]">SORATH MASALA</span>
              </h3>

              <div className="mt-6 flex items-center space-x-3 text-xs tracking-wider uppercase text-[#FFF9F0]/70">
                <span className="px-2.5 py-1 rounded bg-[#6F1017] text-[#FFF9F0] font-semibold">
                  GRUH UDHYOG
                </span>
                <span>Tradition &bull; Taste &bull; Trust</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#FFF9F0]/85 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Born with the passion to preserve the rich, fragrant taste of authentic Indian
                home-style cooking, <strong>SORATH MASALA GRUH UDHYOG</strong> crafts
                spices that celebrate regional culinary traditions.
              </p>
              <p>
                From everyday kitchen favorites like Pavilion-style Pav Bhaji Masala and
                Chatakedar Chat Masala to festive Gujarati Bhungra Bataka and Punjabi Chhole,
                our blends are created to deliver consistent aroma and pure taste.
              </p>

              {/* Clearly Editable Placeholders as strictly requested */}
              <div className="bg-[#FFF9F0]/5 border border-[#E8A928]/30 rounded-2xl p-6 mt-6 space-y-3 text-xs text-[#E8A928]">
                <div className="font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E8A928]" />
                  <span>Company Registry &amp; Heritage Records</span>
                </div>
                <p className="text-[#FFF9F0]/80">
                  <strong>Brand:</strong> Sorath Masala Gruh Udhyog
                </p>
                <p className="text-[#FFF9F0]/80">
                  <strong>Registered Contact:</strong> +91 9374970310 | sorathmasala54@gmail.com
                </p>
                <p className="text-[#FFF9F0]/50 italic">
                  [ADD FOUNDING YEAR] &bull; [ADD MANUFACTURING DETAILS] &bull; [ADD COMPANY VISION]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
