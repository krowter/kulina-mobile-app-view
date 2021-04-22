import React from "react";
import { connect } from "react-redux";

import {
  AddToCartButton,
  Card,
  CardInfo,
  CardTitle,
  CardFooter,
  BrandWrapper,
  RemoveFromCartButton,
} from "./components";
import { Flex } from "../bases/Flex";
import { Rating } from "../blocks/Rating";

import { addToCart, removeFromCart } from "../../redux/actions/cart";

import { CURRENCY } from "../../data/site";
import { FoodItem } from "../../types";

interface FoodItemsCardProps {
  food: FoodItem;
  items: FoodItem[];
  addToCart: (item: FoodItem) => void;
  removeFromCart: (item: FoodItem) => void;
}

const _FoodItemCard: React.FC<FoodItemsCardProps> = ({
  food,
  items,
  addToCart,
  removeFromCart,
}) => {
  const showRemoveButton = items.some(
    (item) => item.product_id === food.product_id
  );

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
          {showRemoveButton && (
            <RemoveFromCartButton onClick={() => removeFromCart(food)}>
              TAKE --
            </RemoveFromCartButton>
          )}
          <AddToCartButton onClick={() => addToCart(food)}>
            ADD +
          </AddToCartButton>
        </CardFooter>
      </CardInfo>
    </Card>
  );
};

const mapStateToProps = (state: any) => ({
  items: state.CartReducer.items,
});

const mapDispatchToProps = (dispatch: any) => ({
  addToCart: (item: FoodItem) => dispatch(addToCart(item)),
  removeFromCart: (item: FoodItem) => dispatch(removeFromCart(item)),
});

export const FoodItemCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(_FoodItemCard);
