import { UPDATE_SECOND_COUNTER } from "./types";

export const updateSecondCounter = (counterValue) => {
  return {
    type: UPDATE_SECOND_COUNTER,
    payload: counterValue
  };
}