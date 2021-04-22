import React from "react";

import { CartBar } from "./CartBar";
import { Navbar } from "./NavBar";
import { FoodItemCard } from "./FoodItemCard";
import { FoodItemsContainer } from "./FoodItemCard/Container";

import foodItems from "../data/staticFoodItems.json";

const App: React.FC = (): any => {
  const food = foodItems[0];

  return (
    <main className="container">
      <Navbar />
      <FoodItemsContainer>
        {foodItems.map((food) => (
          <FoodItemCard key={food.product_id} food={food} />
        ))}
      </FoodItemsContainer>
      <CartBar />
    </main>
  );
};

export default App;
