import React from "react";
import { GroupedButtonContainer } from "../blocks/GroupedButton";
import { Button } from "../bases/Button";

export const Switcher = () => {
  return (
    <GroupedButtonContainer>
      <Button isActive={false}>Lunch</Button>
      <Button isActive={false}>Dinner</Button>
    </GroupedButtonContainer>
  );
};
