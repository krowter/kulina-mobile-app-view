import { combineReducers } from "redux";

import { CartReducer } from "./cartReducer";
import { CategoryReducer } from "./categoryReducer";

export const rootReducer = combineReducers({
  CartReducer,
  CategoryReducer,
});
