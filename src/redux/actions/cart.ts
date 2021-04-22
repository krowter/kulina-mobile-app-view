import { FoodItem } from "../../types";
import { CartAction } from "./constants";

export const addToCart = (item: FoodItem) => ({
  type: CartAction.ADD_TO_CART,
  payload: {
    item,
  },
});

export const removeFromCart = (item: FoodItem) => ({
  type: CartAction.REMOVE_FROM_CART,
  payload: {
    item,
  },
});
