import React from 'react';
import { StarIcon } from '../constants';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <StarIcon
            key={index}
            className={`w-5 h-5 ${starValue <= rating ? 'text-cyan-400' : 'text-slate-600'}`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
