import { Product } from '@/types';
import React from 'react';
import { ProductCard } from '../ProductCard';

type ProductsGridProps = {
  products: Product[];
};

export const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-8">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
