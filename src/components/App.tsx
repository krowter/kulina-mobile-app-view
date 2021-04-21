import React from "react";

import { FoodItemCard } from "./FoodItemCard";

import foodItems from "../data/staticFoodItems.json";

const App: React.FC = (): any => {
  const food = foodItems[0];

  return (
    <main className="container">
      {foodItems.map((food) => (
        <FoodItemCard key={food.product_id} food={food} />
      ))}
    </main>
  );
};

export default App;
