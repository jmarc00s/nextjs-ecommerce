'use client';

import { Button } from '@/components/Ui';
import { useStore } from '@/store';
import { Product } from '@/types';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import React, { ReactElement } from 'react';

type ToolbarProps = {
  product: Product;
};

export const Toolbar = ({ product }: ToolbarProps): ReactElement => {
  const addOnCart = useStore((state) => state.addOnCart);

  const handleAddToCartClick = () => addOnCart(product);

  return (
    <div className="w-full flex gap-8">
      <Button variant="primary" rounded wide>
        Buy now
      </Button>
      <Button
        onClick={handleAddToCartClick}
        variant="secondary"
        rounded
        outline
      >
        <ShoppingCartIcon className="h-8 w-8 pr-2" />
        Add to cart
      </Button>
    </div>
  );
};
