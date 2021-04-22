import React, { useState } from "react";
import { connect } from "react-redux";

import { GroupedButtonContainer } from "../blocks/GroupedButton";
import { Button } from "../bases/Button";
import { useSwipeUpDown } from "../../hooks";

import { switchFoodType } from "../../redux/actions/category";
import { FoodType } from "../../types";

interface SwitcherProps {
  foodType: FoodType;
  switchFoodType: (type: FoodType) => void;
}

export const _Switcher: React.FC<SwitcherProps> = ({
  foodType,
  switchFoodType,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const createButtonProps = (type: FoodType) => ({
    isActive: foodType === type,
    onClick: () => switchFoodType(type),
  });

  useSwipeUpDown("root", {
    onSwipeUp: () => setIsVisible(false),
    onSwipeDown: () => setIsVisible(true),
  });

  return isVisible ? (
    <GroupedButtonContainer>
      <Button {...createButtonProps("LUNCH")}>Lunch</Button>
      <Button {...createButtonProps("DINNER")}>Dinner</Button>
    </GroupedButtonContainer>
  ) : null;
};

const mapStateToProps = (state: any) => ({
  foodType: state.CategoryReducer.type,
});

const mapDispatchToProps = (dispatch: any) => ({
  switchFoodType: (type: FoodType) => dispatch(switchFoodType(type)),
});

export const Switcher = connect(mapStateToProps, mapDispatchToProps)(_Switcher);
