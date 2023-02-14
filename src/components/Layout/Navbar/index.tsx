'use client';

import Link from 'next/link';
import React, { FormEvent, useRef } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/Ui';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { value } = searchRef.current!;
    router.push(`/search/${value}`);
  };

  return (
    <div className="navbar bg-base-300 px-4">
      <div className="navbar-start flex-1">
        <Link href="/" className="btn btn-ghost">
          Nextjs ECommerce
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <form onSubmit={handleSubmit}>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search"
              className="input input-bordered"
              name="search"
            />
          </form>
        </div>
        <Button variant="ghost" circle>
          <ShoppingCartIcon className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};
