import React from "react";
import { connect } from "react-redux";

import {
  LocationTitle,
  Location,
  LocationWrapper,
  ExpandMoreWrapper,
} from "./components";
import { Flex } from "../bases/Flex";
import { LocationModal } from "../LocationModal";

import { changeLocation, setIsModalOpen } from "../../redux/actions/location";

import ExpandMore from "../../static/icons/expand-more.svg";
import LeftArrow from "../../static/icons/arrow-west.svg";

interface LocationBarProps {
  location: string;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const _LocationBar: React.FC<LocationBarProps> = ({
  location,
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <>
      {isModalOpen && <LocationModal />}
      <Flex>
        <LeftArrow />
        <LocationWrapper>
          <LocationTitle>Alamat Pengiriman</LocationTitle>
          <Location>
            <span>{location}</span>
            <ExpandMoreWrapper onClick={() => setIsModalOpen(true)}>
              <ExpandMore />
            </ExpandMoreWrapper>
          </Location>
        </LocationWrapper>
      </Flex>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  location: state.LocationReducer.location,
  isModalOpen: state.LocationReducer.isModalOpen,
});

const mapDispatchToProps = (dispatch: any) => ({
  setIsModalOpen: (isOpen: boolean) => dispatch(setIsModalOpen(isOpen)),
});

export const LocationBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(_LocationBar);
