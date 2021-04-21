import React from "react";

import {
  AddToCardButton,
  Flex,
  Card,
  CardInfo,
  CardTitle,
  CardFooter,
  RatingWrapper,
} from "./components";
import { Rating } from "./../bases/Rating";

import { CURRENCY } from "../../data/site";
import { FoodItem } from "../../types";

type FoodItemsCardProps = { food: FoodItem };

export const FoodItemCard: React.FC<FoodItemsCardProps> = ({ food }) => {
  return (
    <Card>
      <img src={food.thumbnail} />
      <CardInfo>
        <RatingWrapper>
          {food.rating.toFixed(1)}
          <Rating rating={food.rating} />
        </RatingWrapper>
        <CardTitle>{food.product_name}</CardTitle>
        <Flex>
          <span>by Kulina &bull; {food.brand_name}</span>
        </Flex>
        <CardFooter>
          <span>
            {CURRENCY} {food.final_price.toLocaleString()}
          </span>
          <AddToCardButton>ADD +</AddToCardButton>
        </CardFooter>
      </CardInfo>
    </Card>
  );
};
