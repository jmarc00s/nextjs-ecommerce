'use client';

import { Button, Rating } from '@/components/Ui';
import { useStore } from '@/store';

import { Product } from '@/types';
import { formatToUSD } from '@/utils/formatters/toUSD';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const price = formatToUSD(product.price);
  const addOnCart = useStore((state) => state.addOnCart);

  const handleAddToCardClick = () => {
    addOnCart(product);
  };

  return (
    <article className="card w-full bg-base-100 shadow-xl">
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
            classNames="pt-8"
            rate={product.rating.rate}
            numberOfRatings={product.rating.count}
          />
        </div>

        <div className="card-actions">
          <Link
            href={`/product/${product.id}`}
            className="btn btn-primary rounded-full btn-sm"
          >
            Details
          </Link>

          <Button
            onClick={handleAddToCardClick}
            rounded
            outline
            variant="secondary"
            size="sm"
          >
            Add to card
          </Button>
        </div>
      </div>
    </article>
  );
};
