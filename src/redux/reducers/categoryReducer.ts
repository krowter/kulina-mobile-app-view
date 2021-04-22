import { CategoryAction } from "../actions/constants";
import { FoodType } from "../../types";

interface State {
  type: FoodType;
  date: "";
}

export { State as CategoryState };

interface Action {
  type: CategoryAction;
  payload: {
    type?: FoodType;
    date: string;
  };
}

const initialState = {
  type: "LUNCH",
  date: new Date().toString(),
};

export const CategoryReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CategoryAction.SWITCH_TYPE:
      return {
        ...state,
        type: action.payload.type,
      };
    case CategoryAction.CHANGE_DATE:
      return {
        ...state,
        date: action.payload.date,
      };

    default:
      return state;
  }
};
