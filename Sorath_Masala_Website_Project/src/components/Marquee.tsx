import React from 'react';

export const Marquee: React.FC = () => {
  const marqueeText =
    'SORATH MASALA · AUTHENTIC FLAVOUR · PURE SPICES · SAURASHTRA HERITAGE · TRADITION · AROMA · TASTE · SORATH MASALA ·';

  return (
    <section className="w-full bg-[#FFF9F0] overflow-hidden py-5 sm:py-7 border-y border-[#6F1017]/15 select-none relative z-20">
      <div className="flex w-max marquee-track">
        {/* Copy 1 */}
        <span
          className="font-bamboly uppercase text-[#6F1017] leading-none pr-[0.35em] shrink-0"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
        >
          {marqueeText}
        </span>

        {/* Copy 2 */}
        <span
          className="font-bamboly uppercase text-[#6F1017] leading-none pr-[0.35em] shrink-0"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
          aria-hidden="true"
        >
          {marqueeText}
        </span>

        {/* Copy 3 */}
        <span
          className="font-bamboly uppercase text-[#6F1017] leading-none pr-[0.35em] shrink-0"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
          aria-hidden="true"
        >
          {marqueeText}
        </span>

        {/* Copy 4 */}
        <span
          className="font-bamboly uppercase text-[#6F1017] leading-none pr-[0.35em] shrink-0"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
          aria-hidden="true"
        >
          {marqueeText}
        </span>
      </div>
    </section>
  );
};
