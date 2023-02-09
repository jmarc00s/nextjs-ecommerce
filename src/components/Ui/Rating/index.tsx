'use client';

import React, { useState } from 'react';

type RatingProps = {
  rate?: number;
  numberOfRatings?: number;
};

export const Rating = ({ rate, numberOfRatings = 0 }: RatingProps) => {
  const [rating, setRating] = useState(() => (rate ? Math.ceil(rate) : 0));
  const stars = [...Array(5)];

  const handleStarClick = (rate: number) => {
    if (rating === rate) {
      setRating((prevState) => prevState - 1);
      return;
    }
    setRating(rate);
  };

  return (
    <div className="rating rating-xs pt-4">
      {stars.map((_, index) => (
        <button
          key={index}
          className={`mask mask-star-2 h-4 w-4  ${
            rating >= index + 1 ? 'bg-green-500' : 'bg-gray-200'
          }`}
          onClick={() => handleStarClick(index + 1)}
        ></button>
      ))}
      {numberOfRatings && <p className="text-xs pl-4">({numberOfRatings})</p>}
    </div>
  );
};
