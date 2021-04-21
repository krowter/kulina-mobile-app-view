import React from "react";

import { NavbarWrapper } from "./components";
import { LocationBar } from "./Location";
import { Dates } from "./Dates";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <LocationBar location="Toko kelontongpedia" />
      <Dates />
    </NavbarWrapper>
  );
};
