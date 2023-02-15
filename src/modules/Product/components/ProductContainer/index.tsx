import { Product } from '@/types';
import React, { ReactElement } from 'react';
import { ProductInfo } from '../ProductInfo';
import { Toolbar } from '../Toolbar';
import Image from 'next/image';

type ProductContainerProps = {
  product: Product;
};

export const ProductContainer = ({
  product,
}: ProductContainerProps): ReactElement => {
  const { image, title } = product;

  return (
    <div className="flex justify-around flex-col lg:flex-row bg-base-100 p-8">
      <div className="w-full relative lg:w-2/3 flex items-start justify-center">
        <Image src={image} alt={title} width="400" height="300" />
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <ProductInfo product={product} />
        <Toolbar product={product} />
      </div>
    </div>
  );
};
