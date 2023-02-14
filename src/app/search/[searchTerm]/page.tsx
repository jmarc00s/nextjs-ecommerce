import { ProductsGrid } from '@/components/ProductsGrid';
import { EmptyState } from '@/components/Ui';
import { getProducts } from '@/services/products';
import { Product } from '@/types';
import React from 'react';

type PageProps = {
  params: {
    searchTerm: string;
  };
};

async function getSearchedProducts(searchTerm: string): Promise<Product[]> {
  const products = await getProducts('no-cache');

  return products.filter((product) =>
    product.title
      .trim()
      .toLocaleLowerCase()
      .includes(searchTerm.trim().toLocaleLowerCase())
  );
}

export default async function SearchPage({
  params: { searchTerm },
}: PageProps) {
  const searchedProducts = await getSearchedProducts(searchTerm);
  const hasResults = searchedProducts.length > 0;
  return (
    <section className="flex flex-col h-full justify-center">
      {!hasResults && <EmptyState message={`No product(s) found`} />}

      {hasResults && (
        <>
          <h1 className="text-xl">
            Searched term:{' '}
            <span className="italic font-bold">{searchTerm}</span>
          </h1>
          <ProductsGrid products={searchedProducts} />
        </>
      )}
    </section>
  );
}
