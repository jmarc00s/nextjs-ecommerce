import { CartProduct } from '@/types';
import { formatToBRL } from '@/utils/formatters/toBRL';
import Image from 'next/image';
import React, { ReactElement } from 'react';

type CheckoutCartListItemProps = {
  product: CartProduct;
};

export const CheckoutCartListItem = ({
  product: { product, quantity, totalPrice },
}: CheckoutCartListItemProps): ReactElement => {
  const formattedTotalPrice = formatToBRL(totalPrice);
  return (
    <li className="flex flex-row gap-8">
      <Image src={product.image} alt={product.title} width={70} height={70} />
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold">{product.title}</p>
        <span className="text-xs font-semibold text-gray-500">
          #ID{product.id}
        </span>
        <span className="text-xs font-semibold">{formattedTotalPrice}</span>
      </div>
    </li>
  );
};
