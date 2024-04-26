import { FETCH_Initiative, FETCH_ALL_Initiative, CREATE_Initiative, UPDATE_Initiative, DELETE_Initiative} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getInitiatives = () => async (dispatch) => {
  try {
    const { data } = await api.fetchInitiatives();

    dispatch({ type: FETCH_ALL_Initiative, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getInitiative = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchInitiative(id);

    dispatch({ type: FETCH_Initiative, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createInitiative = (Initiative) => async (dispatch) => {
  try {
    const { data } = await api.createInitiative(Initiative);

    dispatch({ type: CREATE_Initiative, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateInitiative = (id, Initiative) => async (dispatch) => {
  try {
    const { data } = await api.updateInitiative(id,Initiative);

    dispatch({ type: UPDATE_Initiative, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteInitiative = (id) => async (dispatch) => {
  try {
    await api.deleteInitiative(id);

    dispatch({ type: DELETE_Initiative, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
