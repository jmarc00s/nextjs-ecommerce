'use client';

import React, { useState } from 'react';
import classNames from 'classnames';

type RatingProps = {
  rate?: number;
  numberOfRatings?: number;
  disabled?: boolean;
  classNames?: string;
};

export const Rating = ({
  rate,
  numberOfRatings = 0,
  disabled = false,
  classNames: classes,
}: RatingProps) => {
  const [rating, setRating] = useState(() => (rate ? Math.ceil(rate) : 0));
  const stars = [...Array(5)];

  const handleStarClick = (rate: number) => {
    if (rating === rate) {
      setRating((prevState) => prevState - 1);
      return;
    }
    setRating(rate);
  };

  const starColor = disabled ? 'bg-green-300' : 'bg-green-500';

  return (
    <div className="rating rating-xs items-center">
      {stars.map((_, index) => (
        <button
          disabled={disabled}
          key={index}
          className={classNames(
            `mask mask-star-2 h-4 w-4`,
            rating >= index + 1 ? starColor : 'bg-gray-200',
            classes
          )}
          onClick={() => handleStarClick(index + 1)}
        ></button>
      ))}
      {numberOfRatings && <p className="text-xs pl-4">({numberOfRatings})</p>}
    </div>
  );
};
