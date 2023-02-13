import { Button } from '@/components/Ui';
import Image from 'next/image';
import React from 'react';

export const HomeBanner = () => (
  <div className="w-full flex justify-around items-center p-16 bg-base-300">
    <div>
      <h1 className="text-3xl font-bold">Next13 + FakeStoreApi</h1>
      <p className="pt-2 pb-8">
        E-commerce app to test some new features of Next13.
      </p>
      <Button rounded variant="primary">
        Start now
      </Button>
    </div>

    <Image
      src="/images/web-shopping.svg"
      alt="window shopping"
      width="200"
      height="200"
    />
  </div>
);
