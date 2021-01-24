import counterOneReducer from "./counterOneReducer";
import counterTwoReducer from "./counterTwoReducer";
import { combineReducers } from "redux";

export default combineReducers({
  counterOne: counterOneReducer,
  counterTwo: counterTwoReducer
});