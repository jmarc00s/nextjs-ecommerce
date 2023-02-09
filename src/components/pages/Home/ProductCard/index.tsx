import { Button, Rating } from '@/components/Ui';

import { Product } from '@/types';
import Image from 'next/image';
import React from 'react';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const price = Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
  }).format(product.price);

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="flex items-center justify-center self-center max-w-full w-40 h-60">
        <Image
          src={product.image}
          alt={product.title}
          height="200"
          width="150"
        />
      </figure>
      <div className="card-body gap-4">
        <div className="gap-2">
          <div className="flex justify-between">
            <h2 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis pr-2">
              {product.title}
            </h2>
            <p className="font-bold text-right">{price}</p>
          </div>
          <p
            title={product.description}
            className="whitespace-nowrap text-xs overflow-hidden text-ellipsis"
          >
            {product.description}
          </p>

          <Rating
            rate={product.rating.rate}
            numberOfRatings={product.rating.count}
          />
        </div>

        <div className="card-actions">
          <Button rounded outline variant="secondary" size="sm">
            Add to card
          </Button>
        </div>
      </div>
    </div>
  );
};
