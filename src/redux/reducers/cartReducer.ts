import { CartAction } from "../actions/constants";
import { FoodItem } from "../../types";

interface State {
  items: FoodItem[];
}

interface Action {
  type: CartAction;
  payload: {
    item: FoodItem;
  };
}

const initialState: State = {
  items: [],
};

export const CartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CartAction.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product_id !== action.payload.item.product_id
        ),
      };
    case CartAction.REMOVE_FROM_CART:
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    default:
      return state;
  }
};
