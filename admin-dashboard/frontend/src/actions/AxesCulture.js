import { FETCH_AxeCulture, FETCH_ALL_AxesCulture, CREATE_AxeCulture, UPDATE_AxeCulture, DELETE_AxeCulture} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getAxesCulture = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAxesCulture();

    dispatch({ type: FETCH_ALL_AxesCulture, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getAxeCulture = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchAxeCulture(id);

    dispatch({ type: FETCH_AxeCulture, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createAxeCulture = (AxeCulture) => async (dispatch) => {
  try {
    const { data } = await api.createAxeCulture(AxeCulture);

    dispatch({ type: CREATE_AxeCulture, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAxeCulture = (id, AxeCulture) => async (dispatch) => {
  try {
    const { data } = await api.updateAxeCulture(id, AxeCulture);

    dispatch({ type: UPDATE_AxeCulture, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAxeCulture = (id) => async (dispatch) => {
  try {
    await api.deleteAxeCulture(id);

    dispatch({ type: DELETE_AxeCulture, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
