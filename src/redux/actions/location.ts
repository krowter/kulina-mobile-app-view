import { LocationAction } from "./constants";

export const changeLocation = (location: string) => ({
  type: LocationAction.CHANGE_LOCATION,
  payload: {
    location,
  },
});

export const setIsModalOpen = (isModalOpen: boolean) => ({
  type: LocationAction.SET_MODAL_VISIBILITY,
  payload: {
    isModalOpen,
  },
});
