import { Rating } from '@/components/Ui';
import { Product } from '@/types';
import { formatToBRL } from '@/utils/formatters/toBRL';
import React, { ReactElement } from 'react';

type ProductInfoProps = {
  product: Product;
};

export const ProductInfo = ({
  product: { title, price, description, rating },
}: ProductInfoProps): ReactElement => {
  const { rate, count } = rating;
  const brlPrice = formatToBRL(price);
  const dividedPrice = formatToBRL(price / 6);
  return (
    <>
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
    </>
  );
};
