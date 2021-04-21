import React from "react";

import {
  AddToCardButton,
  Card,
  CardInfo,
  CardTitle,
  CardFooter,
  BrandWrapper,
} from "./components";
import { Flex } from "../bases/Flex";
import { Rating } from "../blocks/Rating";

import { CURRENCY } from "../../data/site";
import { FoodItem } from "../../types";

type FoodItemsCardProps = { food: FoodItem };

export const FoodItemCard: React.FC<FoodItemsCardProps> = ({ food }) => {
  return (
    <Card>
      <img src={food.thumbnail} />
      <CardInfo>
        <Flex>
          {food.rating.toFixed(1)}
          <Rating rating={food.rating} />
        </Flex>
        <CardTitle>{food.product_name}</CardTitle>
        <BrandWrapper>
          <span>by Kulina &bull; {food.brand_name}</span>
        </BrandWrapper>
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
