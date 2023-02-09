import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/Ui';

export const Navbar = () => {
  return (
    <div className="navbar bg-base-300 px-4">
      <div className="navbar-start flex-1">
        <Link href="/" className="btn btn-ghost">
          Nextjs ECommerce
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <Button variant="ghost" circle>
          <ShoppingCartIcon className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};
