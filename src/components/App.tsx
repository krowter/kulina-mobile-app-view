import React from "react";

import { FoodItemCard } from "./FoodItemCard";

import foodItems from "../data/staticFoodItems.json";

const App: React.FC = (): any => {
  console.log({ foodItems: 123 });
  const food = foodItems[0];

  return foodItems.map((food) => (
    <FoodItemCard key={food.product_id} food={food} />
  ));
};

export default App;
