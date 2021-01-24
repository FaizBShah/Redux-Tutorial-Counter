import { UPDATE_SECOND_COUNTER } from "../actions/types";

const initialState = {
  counter: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SECOND_COUNTER:
      return {
        ...state,
        counter: action.payload
      };

    default:
      return state;
  }
};