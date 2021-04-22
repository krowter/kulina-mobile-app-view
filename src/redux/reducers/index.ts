import { combineReducers } from "redux";

import { CartReducer } from "./cartReducer";
import { CategoryReducer } from "./categoryReducer";
import { LocationReducer } from "./locationReducer";

export const rootReducer = combineReducers({
  CartReducer,
  CategoryReducer,
  LocationReducer,
});
