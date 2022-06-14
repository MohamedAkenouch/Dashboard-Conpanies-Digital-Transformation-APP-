import { FETCH_InitiativeCulture , FETCH_ALL_InitiativesCulture, CREATE_InitiativeCulture, UPDATE_InitiativeCulture, DELETE_InitiativeCulture} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getInitiativesCulture = () => async (dispatch) => {
  try {
    const { data } = await api.fetchInitiativesCulture();

    dispatch({ type: FETCH_ALL_InitiativesCulture, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getInitiativeCulture = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchInitiativeCulture(id);

    dispatch({ type: FETCH_InitiativeCulture, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createInitiativeCulture = (Initiative) => async (dispatch) => {
  try {
    const { data } = await api.createInitiativeCulture(Initiative);

    dispatch({ type: CREATE_InitiativeCulture, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateInitiativeCulture = (id, Initiative) => async (dispatch) => {
  try {
    const { data } = await api.updateInitiativeCulture(id,Initiative);

    dispatch({ type: UPDATE_InitiativeCulture, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteInitiativeCulture = (id) => async (dispatch) => {
  try {
    await api.deleteInitiativeCulture(id);

    dispatch({ type: DELETE_InitiativeCulture, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
