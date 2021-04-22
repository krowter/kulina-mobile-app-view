import { FoodType } from "../../types";
import { CategoryAction } from "./constants";

export const switchFoodType = (type: FoodType) => ({
  type: CategoryAction.SWITCH_TYPE,
  payload: {
    type,
  },
});

export const changeDate = (date: string) => ({
  type: CategoryAction.CHANGE_DATE,
  payload: {
    date,
  },
});
