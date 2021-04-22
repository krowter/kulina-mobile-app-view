import React, { useState } from "react";
import { connect } from "react-redux";

import { Input } from "../bases/Input";
import {
  Modal,
  ModalTitle,
  InputWrapper,
  Suggestion,
  CloseIconWrapper,
} from "./components";

import { LocationState } from "../../redux/reducers/locationReducer";
import { changeLocation, setIsModalOpen } from "../../redux/actions/location";

import LocationPin from "../../static/icons/location-pin.svg";
import CloseIcon from "../../static/icons/close.svg";

type LocationModalProps = Omit<LocationState, "location"> & {
  changeLocation: (location: string) => void;
  setIsModalOpen: (isOpen: boolean) => void;
};

export const _LocationModal = ({
  suggestions,
  changeLocation,
  setIsModalOpen,
}: LocationModalProps) => {
  const [userLocationInput, setUserLocationInput] = useState("");

  const handleIinputChange = (location: string) => {
    changeLocation(location);
    setUserLocationInput(location);
  };
  return (
    <Modal>
      <CloseIconWrapper onClick={() => setIsModalOpen(false)}>
        <CloseIcon />
      </CloseIconWrapper>
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
  suggestions: state.LocationReducer.suggestions,
  isModalOpen: state.LocationReducer.isModalOpen,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeLocation: (location: string) => dispatch(changeLocation(location)),
  setIsModalOpen: (isOpen: boolean) => dispatch(setIsModalOpen(isOpen)),
});

export const LocationModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(_LocationModal);
