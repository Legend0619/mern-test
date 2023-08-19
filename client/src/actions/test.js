import { SET_TESTS, SET_LOGS } from "../constants/actionTypes";
import * as api from "../api";
import * as messages from "../messages";

export const getAllTests = () => async (dispatch) => {
  try {
    const { data } = await api.getAllTests();
    dispatch({
      type: SET_TESTS,
      data,
    });
  } catch (error) {
    messages.error(error.response.data.message);
  }
};
export const addTest = async (formData, history) => {
  try {
    await api.addTest(formData);
    messages.success("Test Added Successfully");
    history("/");
  } catch (error) {
    messages.error(error.response.data.message);
  }
};
export const takeTest = async (formData) => {
  try {
    const { data } = await api.takeTest(formData);
    console.log(data);
    if (data.message === true) messages.success("You are right.");
    else messages.error("You are wrong. Try again.");
  } catch (error) {
    messages.error(error.response.data.message);
  }
};
export const getLogs = () => async (dispatch) => {
  try {
    const { data } = await api.getLogs();
    dispatch({
      type: SET_LOGS,
      data,
    });
  } catch (error) {
    messages.error(error.response.data.message);
  }
};
