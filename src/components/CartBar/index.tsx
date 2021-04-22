import React from "react";
import { connect } from "react-redux";

import {
  CartBar as Bar,
  PriceInfo,
  ShippingCost,
  CartUnderLayer,
} from "./components";
import CartIcon from "../../static/icons/cart.svg";
import ChevronRight from "../../static/icons/chevron-right.svg";

import { getTotalPrice } from "../../helpers";

import { CURRENCY } from "../../data/site";
import { FoodItem } from "../../types";

interface CartBarProps {
  items: FoodItem[];
}

const _CartBar: React.FC<CartBarProps> = ({ items }) => {
  const totalPrice = getTotalPrice(items);

  return items.length > 0 ? (
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
  ) : null;
};

const mapStateToProps = (state: any) => ({
  items: state.CartReducer.items,
});

export const CartBar = connect(mapStateToProps)(_CartBar);
