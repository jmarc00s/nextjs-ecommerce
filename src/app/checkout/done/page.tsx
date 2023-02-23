import { Button } from '@/components/Ui';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

const CheckoutDonePage = () => (
  <section className="w-full h-full flex flex-col justify-center items-center gap-8">
    <CheckCircleIcon className="text-green-500 h-48 w-48" />
    <p className="text-2xl font-semibold"> Your order is done!</p>
    <Link href="/">
      <Button outline rounded variant="secondary">
        Go to home
      </Button>
    </Link>
  </section>
);

export default CheckoutDonePage;
