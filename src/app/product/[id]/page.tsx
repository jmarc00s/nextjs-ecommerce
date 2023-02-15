import React from 'react';
import { Breadcrumbs } from '@/components/Ui';
import { ProductContainer } from '@/modules/Product/components/ProductContainer';
import { Product } from '@/types';

const getProduct = async (id: Product['id']): Promise<Product> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: 'force-cache',
  });
  return (await response.json()) as Product;
};

export async function generateStaticParams() {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const products = await response.json();

  return products.map(({ id }: Product) => ({ id: id.toString() }));
}

export default async function ProductDetailPage({ params }: any) {
  const product = await getProduct(params.id);

  const { title, id } = product;

  const breadcrumbItems = [{ title, href: `/product/${id}`, isActive: true }];

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={breadcrumbItems} />
      <ProductContainer product={product} />
    </div>
  );
}
