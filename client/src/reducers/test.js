import { SET_TESTS, SET_LOGS } from "../constants/actionTypes";

const initialState = {
  tests: [],
  logs: [],
};

const testsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TESTS:
      return {
        ...state,
        tests: action.data,
      };
    case SET_LOGS:
      return {
        ...state,
        logs: action.data,
      };
    default:
      return state;
  }
};

export default testsReducer;
