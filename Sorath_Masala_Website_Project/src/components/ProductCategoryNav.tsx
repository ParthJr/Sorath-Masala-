import React from 'react';
import { CATEGORIES, type CategoryType } from '../data/products';

interface ProductCategoryNavProps {
  selectedCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
}

export const ProductCategoryNav: React.FC<ProductCategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
      {CATEGORIES.map((category) => {
        const isActive = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              isActive
                ? 'bg-[#6F1017] text-[#FFF9F0] shadow-md shadow-[#6F1017]/20 scale-105'
                : 'bg-[#FFF9F0] text-[#765E50] hover:text-[#6F1017] hover:bg-white border border-[#765E50]/20'
            }`}
          >
            {category}
            {isActive && (
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#E8A928] rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
};
