import React from "react";
import {
  CartBar as Bar,
  PriceInfo,
  ShippingCost,
  CartUnderLayer,
} from "./components";

import CartIcon from "../../static/icons/cart.svg";
import ChevronRight from "../../static/icons/chevron-right.svg";

import { CURRENCY } from "../../data/site";
import { FoodItem } from "../../types";

export const CartBar: React.FC<{ items: FoodItem[] }> = ({}) => {
  const items = [1, 2, 3];

  const totalPrice = 125000;

  return (
    <>
      <CartUnderLayer />
      <Bar>
        <div>
          <PriceInfo>
            {items.length} Items | {CURRENCY} {totalPrice.toLocaleString()}
          </PriceInfo>
          <ShippingCost>Termasuk ongkos kirim</ShippingCost>
        </div>
        <div>
          <CartIcon />
          <ChevronRight />
        </div>
      </Bar>
    </>
  );
};
