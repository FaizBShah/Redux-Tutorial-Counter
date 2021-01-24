import { UPDATE_FIRST_COUNTER } from "./types";

export const updateFirstCounter = (counterValue) => {
  return {
    type: UPDATE_FIRST_COUNTER,
    payload: counterValue
  };
}