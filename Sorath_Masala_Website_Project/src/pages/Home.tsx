import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { BrandIntro } from '../components/BrandIntro';
import { SpiceJourney } from '../components/SpiceJourney';
import { ScrollProduct } from '../components/ScrollProduct';
import { ProductArchive } from '../components/ProductArchive';
import { WhySorath } from '../components/WhySorath';
import { BrandStory } from '../components/BrandStory';
import { FinalProduct } from '../components/FinalProduct';
import { ContactSection } from '../components/ContactSection';
import { initScrollTriggers } from '../animations/scrollAnimations';

export const Home: React.FC = () => {
  useEffect(() => {
    initScrollTriggers();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="w-full flex flex-col">
      {/* Hero Section */}
      <Hero
        onExploreClick={() => scrollTo('products')}
        onStoryClick={() => scrollTo('about')}
      />

      {/* Signature Animated Marquee Ribbon */}
      <Marquee />

      {/* Brand Intro */}
      <BrandIntro />

      {/* The Art of Blending / Spice Journey */}
      <SpiceJourney />

      {/* Animated Marquee Ribbon between chapters */}
      <Marquee />

      {/* Hero Spotlight / Scroll Product */}
      <ScrollProduct />

      {/* Product Archive Collection */}
      <ProductArchive />

      {/* Why Sorath Pillars */}
      <WhySorath />

      {/* Brand Story & Transformation */}
      <BrandStory />

      {/* Final Product Climax */}
      <FinalProduct
        onExploreClick={() => scrollTo('products')}
        onContactClick={() => scrollTo('contact')}
      />

      {/* Direct Contact & Enquiry */}
      <ContactSection />
    </main>
  );
};
