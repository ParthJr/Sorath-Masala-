import React from 'react';
import { ProductArchive } from '../components/ProductArchive';
import { ScrollProduct } from '../components/ScrollProduct';

export const ProductsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <ScrollProduct />
      <ProductArchive />
    </div>
  );
};
