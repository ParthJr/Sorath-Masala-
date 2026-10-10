import React, { useState } from 'react';
import { PRODUCTS, type CategoryType, type Product, BRAND_INFO } from '../data/products';
import { ProductCategoryNav } from './ProductCategoryNav';
import { ProductCard } from './ProductCard';
import { Sparkles, X } from 'lucide-react';

export const ProductArchive: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('ALL');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === 'ALL') return true;
    return p.category.toUpperCase() === selectedCategory;
  });

  return (
    <section id="products" className="relative bg-[#F7F0E4] py-28 px-4 sm:px-6 lg:px-8">
      {/* Decorative Spice Background Blobs */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-[#E8A928]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#6F1017]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.2em] text-[#A51D25] uppercase mb-3 bg-[#A51D25]/10 px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ARCHIVE OF AUTHENTIC FLAVOURS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-[#24140D] tracking-tight mb-4">
            OUR MASALA <span className="text-[#6F1017]">COLLECTION</span>
          </h2>
          <p className="text-base sm:text-lg text-[#765E50] leading-relaxed">
            Discover the flavours that bring every dish to life. Carefully curated and
            crafted with traditional recipes and uncompromising quality.
          </p>
        </div>

        {/* Minimal Animated Category Navigation */}
        <ProductCategoryNav
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Editorial Asymmetric 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {filteredProducts.map((product, index) => {
            // Apply varied editorial sizing
            const size =
              index % 4 === 0 ? 'large' : index % 3 === 0 ? 'medium' : 'small';

            return (
              <div
                key={product.id}
                style={{
                  animationDelay: `${index * 60}ms`
                }}
              >
                <ProductCard
                  product={product}
                  size={size}
                  onSelect={(p) => setActiveModalProduct(p)}
                />
              </div>
            );
          })}
        </div>

        {/* Trade Notice Under Grid */}
        <div className="mt-16 text-center bg-[#FFF9F0] border border-[#6F1017]/20 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <h4 className="font-display text-lg font-bold uppercase text-[#6F1017]">
              Interested in Bulk Supply or Dealership?
            </h4>
            <p className="text-xs text-[#765E50] mt-1">
              Sorath Masala Gruh Udhyog provides dealer and distributor opportunities across regions.
            </p>
          </div>
          <a
            href={`https://wa.me/91${BRAND_INFO.phone}?text=Hello%20Sorath%20Masala,%20I%20am%20interested%20in%20trade%20inquiries.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#6F1017] text-[#FFF9F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#A51D25] transition-colors whitespace-nowrap"
          >
            Connect on WhatsApp
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative bg-[#FFF9F0] border-2 border-[#6F1017] rounded-3xl p-6 sm:p-10 max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#6F1017]/10 hover:bg-[#6F1017] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center bg-white/60 p-4 rounded-2xl border border-[#765E50]/15">
                <img
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  className="max-h-[300px] w-auto object-contain drop-shadow-xl"
                />
              </div>
              <div className="space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFF9F0] bg-[#6F1017] px-3 py-1 rounded-full inline-block">
                  {activeModalProduct.category}
                </span>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#24140D]">
                    {activeModalProduct.name}
                  </h3>
                  {activeModalProduct.gujaratiName && (
                    <p className="text-sm font-semibold text-[#A51D25] mt-0.5">
                      {activeModalProduct.gujaratiName}
                    </p>
                  )}
                  {activeModalProduct.hindiName && (
                    <p className="text-sm font-semibold text-[#A51D25] mt-0.5">
                      {activeModalProduct.hindiName}
                    </p>
                  )}
                </div>

                <p className="text-sm italic text-[#A51D25] font-medium">
                  "{activeModalProduct.tagline}"
                </p>

                <p className="text-sm text-[#765E50] leading-relaxed">
                  {activeModalProduct.description}
                </p>

                <div className="pt-3 border-t border-[#765E50]/20 space-y-2 text-xs text-[#24140D]">
                  <p>
                    <strong>Ideal With:</strong> {activeModalProduct.dishName}
                  </p>
                  <p>
                    <strong>Packaging:</strong> {activeModalProduct.packagingType}
                  </p>
                  <p>
                    <strong>Inquiry Hotline:</strong> +91 {BRAND_INFO.phone}
                  </p>
                </div>

                <div className="pt-4 flex gap-3">
                  <a
                    href={`https://wa.me/91${BRAND_INFO.phone}?text=Hello,%20I%20am%20inquiring%20about%20${encodeURIComponent(activeModalProduct.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 text-center rounded-xl bg-[#A51D25] text-[#FFF9F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#6F1017] transition-colors"
                  >
                    Inquire On WhatsApp
                  </a>
                  <button
                    onClick={() => setActiveModalProduct(null)}
                    className="px-4 py-3 rounded-xl border border-[#765E50]/30 text-xs font-semibold uppercase tracking-wider text-[#765E50] hover:bg-[#765E50]/10"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
