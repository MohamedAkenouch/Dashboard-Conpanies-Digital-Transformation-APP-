import { FETCH_AxeDigital, FETCH_ALL_AxesDigital, CREATE_AxeDigital, UPDATE_AxeDigital, DELETE_AxeDigital} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getAxesDigital = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAxesDigital();

    dispatch({ type: FETCH_ALL_AxesDigital, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getAxeDigital = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchAxeDigital(id);

    dispatch({ type: FETCH_AxeDigital, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createAxeDigital = (AxeDigital) => async (dispatch) => {
  try {
    const { data } = await api.createAxeDigital(AxeDigital);

    dispatch({ type: CREATE_AxeDigital, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAxeDigital = (id, AxeDigital) => async (dispatch) => {
  try {
    const { data } = await api.updateAxeDigital(id, AxeDigital);

    dispatch({ type: UPDATE_AxeDigital, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAxeDigital = (id) => async (dispatch) => {
  try {
    await api.deleteAxeDigital(id);

    dispatch({ type: DELETE_AxeDigital, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
