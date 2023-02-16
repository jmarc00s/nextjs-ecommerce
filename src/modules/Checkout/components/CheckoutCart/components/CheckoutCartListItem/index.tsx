'use client';

import { Button } from '@/components/Ui';
import { useStore } from '@/store';
import { CartProduct } from '@/types';
import { formatToUSD } from '@/utils/formatters/toUSD';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { ReactElement } from 'react';

type CheckoutCartListItemProps = {
  product: CartProduct;
};

export const CheckoutCartListItem = ({
  product: { product, quantity, totalPrice },
}: CheckoutCartListItemProps): ReactElement => {
  const formattedTotalPrice = formatToUSD(totalPrice);
  const { increaseQuantity, decreaseQuantity } = useStore((state) => ({
    increaseQuantity: state.increaseQuantity,
    decreaseQuantity: state.decreaseQuantity,
  }));

  const handleIncreaseClick = () => increaseQuantity(product.id);
  const handleDecreaseClick = () => decreaseQuantity(product.id);

  return (
    <li className="flex flex-row gap-8 overflow-hidden">
      <Image src={product.image} alt={product.title} width={50} height={50} />
      <div className="flex flex-col gap-1 flex-1">
        <p className="text-sm font-semibold">{product.title}</p>
        <span className="text-xs font-semibold text-gray-500">
          #{product.id}
        </span>
        <span className="text-xs font-semibold">{formattedTotalPrice}</span>
      </div>

      <div className="flex items-center gap-2 ">
        <Button
          borderless
          onClick={handleDecreaseClick}
          circle
          outline
          size="xs"
          variant="success"
        >
          <MinusIcon className="h-6 w-6" />
        </Button>
        <span className="text-xs font-semibold">{quantity}</span>
        <Button
          borderless
          onClick={handleIncreaseClick}
          circle
          outline
          size="xs"
          variant="success"
        >
          <PlusIcon className="h-6 w-6" />
        </Button>
      </div>
    </li>
  );
};
