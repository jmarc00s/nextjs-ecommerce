import { LoadingSpinner } from '@/components/Ui/LoadingSpinner';
import React from 'react';

export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}
