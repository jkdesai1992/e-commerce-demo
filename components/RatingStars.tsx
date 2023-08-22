import React, { useState } from 'react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : ''}${index === Math.floor(rating) && rating % 1 !== 0 ? ' half-filled' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;