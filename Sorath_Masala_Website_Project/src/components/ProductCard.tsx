import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  size?: 'large' | 'medium' | 'small';
  onSelect?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  size = 'medium',
  onSelect,
}) => {
  // Editorial asymmetrical layout sizing
  const cardHeight =
    size === 'large'
      ? 'min-h-[440px] md:min-h-[480px]'
      : size === 'small'
      ? 'min-h-[360px]'
      : 'min-h-[400px]';

  return (
    <div
      onClick={() => onSelect && onSelect(product)}
      className={`group relative flex flex-col justify-between bg-[#FFF9F0] border border-[#6F1017]/15 rounded-3xl p-6 transition-all duration-500 ease-out hover:shadow-2xl hover:border-[#A51D25]/40 hover:-translate-y-1.5 cursor-pointer overflow-hidden ${cardHeight}`}
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#E8A928]/10 via-[#A51D25]/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-120 transition-transform duration-700" />

      {/* Top Header info */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#6F1017]/10 text-[#6F1017] mb-1.5">
            {product.category}
          </span>
          {product.gujaratiName && (
            <span className="block text-xs font-semibold text-[#A51D25]">
              {product.gujaratiName}
            </span>
          )}
          {product.hindiName && (
            <span className="block text-xs font-semibold text-[#A51D25]">
              {product.hindiName}
            </span>
          )}
        </div>
        <div className="w-7 h-7 rounded-full bg-white border border-[#765E50]/20 flex items-center justify-center text-[#765E50] group-hover:bg-[#A51D25] group-hover:text-white transition-all duration-300">
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>

      {/* Product Image Area - Packaging artwork strictly untouched */}
      <div className="relative z-10 my-4 flex-1 flex items-center justify-center py-2">
        <div className="relative w-full max-h-[260px] flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[220px] w-auto max-w-full object-contain drop-shadow-[0_15px_25px_rgba(36,20,13,0.2)] transition-transform duration-500 ease-out group-hover:scale-104"
            loading="lazy"
          />
        </div>
      </div>

      {/* Bottom Information */}
      <div className="relative z-10 pt-3 border-t border-[#765E50]/15">
        <h4 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#24140D] group-hover:text-[#A51D25] transition-colors">
          {product.name}
        </h4>
        <p className="text-xs text-[#765E50] line-clamp-2 mt-1 leading-relaxed">
          {product.description}
        </p>

        {/* Tagline snippet */}
        <div className="mt-3 flex items-center space-x-1.5 text-[11px] font-semibold text-[#6F1017]">
          <Sparkles className="w-3 h-3 text-[#E8A928]" />
          <span className="truncate">{product.dishName}</span>
        </div>
      </div>
    </div>
  );
};
