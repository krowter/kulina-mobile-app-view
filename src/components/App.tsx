import React from "react";
import { connect } from "react-redux";

import { CartBar } from "./CartBar";
import { Navbar } from "./NavBar";
import { FoodItemCard } from "./FoodItemCard";
import { FoodItemsContainer } from "./FoodItemCard/Container";

import foodItems from "../data/staticFoodItems.json";
import { FoodType } from "../types";
interface AppProps {
  foodType: FoodType;
}

const App: React.FC<AppProps> = ({ foodType }): any => {
  return (
    <main className="container">
      <Navbar />
      <FoodItemsContainer>
        {foodItems
          .filter((food) => food.type === foodType)
          .map((food) => (
            <FoodItemCard key={food.product_id} food={food} />
          ))}
      </FoodItemsContainer>
      <CartBar />
    </main>
  );
};

const mapStateToProps = (state: any) => ({
  foodType: state.CategoryReducer.type,
});

export default connect(mapStateToProps)(App);
