import Image from 'next/image';
import React from 'react';

type EmptyStateProps = {
  message: string;
  description?: string;
};

export const EmptyState = ({ message, description }: EmptyStateProps) => {
  return (
    <div className="w-full items-center justify-center flex flex-col p-8">
      <Image
        src="/images/searching.svg"
        alt="no data"
        width={400}
        height={400}
      />
      <h2 className="text-center font-semibold text-xl mt-8">{message}</h2>
      <p className="text-sm mt-4">
        We couldn&apos;t find what you searched for. Try searching again.
      </p>
    </div>
  );
};
