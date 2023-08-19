import { combineReducers } from "redux";
import login from "./login";
import test from "./test";

export default combineReducers({
  //List Of Reducers
  login,
  test,
});
