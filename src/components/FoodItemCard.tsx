import React from "react";

import { Rating } from "./bases/Rating";
import { CURRENCY } from "../data/site";
import { FoodItem } from "../types";

type FoodItemsCardProps = { food: FoodItem };

export const FoodItemCard: React.FC<FoodItemsCardProps> = ({ food }) => {
  return (
    <div>
      <img src={food.thumbnail} />
      <Rating rating={food.rating} />
      <span>{food.product_name}</span>
      <div>
        <span>by Kulina &bull; {food.brand_name}</span>
      </div>
      <div>
        <span>
          {CURRENCY} {food.final_price} <button>Add</button>
        </span>
      </div>
    </div>
  );
};
