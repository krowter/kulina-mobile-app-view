import { LocationAction } from "../actions/constants";

interface State {
  location: string;
  suggestions: string[];
}

export { State as LocationState };

interface Action {
  type: LocationAction;
  payload: {
    location: string;
  };
}

const initialState = {
  location: "6584 Vesta Mountains",
  suggestions: [
    "60456 Moore Roads",
    "207 Al Point",
    "05121 Borer Canyon",
    "91410 Bernhard Street",
    "147 Vance Run",
    "906 Sherman Streets",
    "38447 Buford Motorway",
    "6575 Garrick Island",
  ],
};

export const LocationReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LocationAction.CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload.location,
      };
    default:
      return state;
  }
};
