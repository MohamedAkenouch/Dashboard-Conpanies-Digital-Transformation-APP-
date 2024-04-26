import { FETCH_ChoiceDigital, FETCH_ALL_ChoicesDigital, CREATE_ChoiceDigital, UPDATE_ChoiceDigital, DELETE_ChoiceDigital} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getChoicesDigital = () => async (dispatch) => {
  try {
    const { data } = await api.fetchChoicesDigital();

    dispatch({ type: FETCH_ALL_ChoicesDigital, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getChoiceDigital = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchChoiceDigital(id);

    dispatch({ type: FETCH_ChoiceDigital, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createChoiceDigital = (ChoiceDigital) => async (dispatch) => {
  try {
    const { data } = await api.createChoiceDigital(ChoiceDigital);

    dispatch({ type: CREATE_ChoiceDigital, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateChoiceDigital = (id, ChoiceDigital) => async (dispatch) => {
  try {
    const { data } = await api.updateChoiceDigital(id, ChoiceDigital);

    dispatch({ type: UPDATE_ChoiceDigital, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteChoiceDigital = (id) => async (dispatch) => {
  try {
    await api.deleteChoiceDigital(id);

    dispatch({ type: DELETE_ChoiceDigital, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
