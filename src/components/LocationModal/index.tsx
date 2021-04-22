import React, { useState } from "react";
import { connect } from "react-redux";

import { Input } from "../bases/Input";
import { Modal, ModalTitle, InputWrapper, Suggestion } from "./components";

import { LocationState } from "../../redux/reducers/locationReducer";
import { changeLocation } from "../../redux/actions/location";

import LocationPin from "../../static/icons/location-pin.svg";

type LocationModalProps = LocationState & {
  changeLocation: (location: string) => void;
};

export const _LocationModal = ({
  location,
  suggestions,
  changeLocation,
}: LocationModalProps) => {
  const [userLocationInput, setUserLocationInput] = useState(location);

  const handleIinputChange = (location: string) => {
    changeLocation(location);
    setUserLocationInput(location);
  };
  return (
    <Modal>
      <ModalTitle>Cek makanan yang tersedia di lokasi kamu!</ModalTitle>
      <InputWrapper>
        <LocationPin />
        <Input
          onChange={(e) => handleIinputChange(e.target.value)}
          value={userLocationInput}
        />
      </InputWrapper>
      {userLocationInput.length > 3 &&
        suggestions.map((option) => (
          <Suggestion key={option} onClick={() => handleIinputChange(option)}>
            <LocationPin />
            <span>{option}</span>
          </Suggestion>
        ))}
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
  ...state.LocationReducer,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeLocation: (location: string) => dispatch(changeLocation(location)),
});

export const LocationModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(_LocationModal);
