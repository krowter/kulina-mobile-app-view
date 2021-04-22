import React from "react";

import { NavbarWrapper } from "./components";
import { LocationBar } from "./Location";
import { Dates } from "./Dates";
import { Switcher } from "./Switcher";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <LocationBar />
      <Dates />
      <Switcher />
    </NavbarWrapper>
  );
};
