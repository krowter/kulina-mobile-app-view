import React from "react";

import { LocationTitle, Location, LocationWrapper } from "./components";
import { Flex } from "../bases/Flex";

import ExpandMore from "../../static/icons/expand-more.svg";
import LeftArrow from "../../static/icons/arrow-west.svg";

export const LocationBar: React.FC<{ location: string }> = ({ location }) => {
  return (
    <Flex>
      <LeftArrow />
      <LocationWrapper>
        <LocationTitle>Alamat Pengiriman</LocationTitle>
        <Location>
          <span>{location}</span>
          <ExpandMore />
        </Location>
      </LocationWrapper>
    </Flex>
  );
};
