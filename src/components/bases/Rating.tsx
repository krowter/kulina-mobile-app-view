import React from "react";

import FullStar from "../../static/icons/star-full.svg";
import EmptyStar from "../../static/icons/star-empty.svg";
import HalfStar from "../../static/icons/star-half.svg";
import { segmentNumber } from "../../helpers";

type RatingProps = { rating: number };

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  const MAX_RATING = 5;

  const { integer: fullStars, float } = segmentNumber(rating);
  const halfStars = Math.round(float);

  const emptyStars = MAX_RATING - fullStars - halfStars;

  const repeat = (n: number) => Array.from(Array(n));

  return (
    <div style={{ width: "200px", display: "flex" }}>
      {repeat(fullStars).map((_, i) => (
        <FullStar key={i} />
      ))}
      {repeat(halfStars).map((_, i) => (
        <HalfStar key={i} />
      ))}
      {repeat(emptyStars).map((_, i) => (
        <EmptyStar key={i} />
      ))}
    </div>
  );
};
