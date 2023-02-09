import { Button, Rating, Breadcrumbs } from '@/components/Ui';
import { Product } from '@/types';

import { formatToBRL } from '@/utils/formatters/toBRL';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import React from 'react';

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

  const { title, id, price, image, description } = product;
  const { rate, count } = product.rating;
  const brlPrice = formatToBRL(price);
  const dividedPrice = formatToBRL(price / 6);

  const breadcrumbItems = [{ title, href: `/product/${id}`, isActive: true }];

  return (
    <div className="flex flex-col">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="flex justify-around flex-col lg:flex-row bg-base-100 p-8">
        <div className="w-full relative lg:w-2/3 flex items-start justify-center">
          <Image src={image} alt={title} width="400" height="300" />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-xs">{description}</p>
            <Rating rate={rate} numberOfRatings={count} disabled />
          </div>
          <div className="w-full">
            <div className="divider"></div>
            <h3 className="text-2xl font-bold">{brlPrice}</h3>
            <p className="text-xs">or {dividedPrice} by month per 6 months</p>
            <div className="divider"></div>
          </div>

          <div className="w-full flex gap-8">
            <Button variant="primary" rounded wide>
              Buy now
            </Button>
            <Button variant="primary" rounded outline>
              <ShoppingCartIcon className="h-8 w-8 pr-2" />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
