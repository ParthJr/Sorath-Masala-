import React from 'react';
import { BrandIntro } from '../components/BrandIntro';
import { WhySorath } from '../components/WhySorath';
import { BrandStory } from '../components/BrandStory';
import { BRAND_INFO } from '../data/products';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51D25] block mb-2">
          HERITAGE &bull; TRADITION
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-[#24140D]">
          ABOUT {BRAND_INFO.shortName}
        </h1>
        <p className="text-base sm:text-lg text-[#765E50] max-w-2xl mt-4">
          Learn about our journey, values, and unwavering passion to keep traditional
          Indian spices wholesome and true to taste.
        </p>
      </div>

      <BrandIntro />
      <BrandStory />
      <WhySorath />
    </div>
  );
};
