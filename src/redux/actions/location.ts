import { LocationAction } from "./constants";

export const changeLocation = (location: string) => ({
  type: LocationAction.CHANGE_LOCATION,
  payload: {
    location,
  },
});
