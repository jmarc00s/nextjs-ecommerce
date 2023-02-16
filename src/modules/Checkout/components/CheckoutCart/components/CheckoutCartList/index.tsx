import { CartProduct } from '@/types';
import React, { ReactElement } from 'react';
import { CheckoutCartListItem } from '../CheckoutCartListItem';

type CheckoutCartListProps = {
  products: CartProduct[];
};

const CheckoutCartList = ({
  products,
}: CheckoutCartListProps): ReactElement => {
  if (!products.length)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="font-medium"> Your cart is empty!</span>
      </div>
    );

  return (
    <ul className="flex flex-col gap-8 mt-8 overflow-auto">
      {products.map((product) => (
        <CheckoutCartListItem key={product.product.id} product={product} />
      ))}
    </ul>
  );
};

export default CheckoutCartList;
