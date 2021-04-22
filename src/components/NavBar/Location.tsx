import React from "react";
import { connect } from "react-redux";

import { LocationTitle, Location, LocationWrapper } from "./components";
import { Flex } from "../bases/Flex";
import { LocationModal } from "../LocationModal";

import ExpandMore from "../../static/icons/expand-more.svg";
import LeftArrow from "../../static/icons/arrow-west.svg";

const _LocationBar: React.FC<{ location: string }> = ({ location }) => {
  return (
    <>
      <LocationModal />
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
    </>
  );
};

const mapStateToProps = (state: any) => ({
  location: state.LocationReducer.location,
});

export const LocationBar = connect(mapStateToProps)(_LocationBar);
