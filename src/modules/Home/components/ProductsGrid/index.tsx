import { Product } from '@/types';
import React from 'react';
import { ProductCard } from '../ProductCard';

type ProductsGridProps = {
  products: Product[];
};

export const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div className="pt-8">
      <h2 className="text-2xl font-bold">Products</h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-8">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
