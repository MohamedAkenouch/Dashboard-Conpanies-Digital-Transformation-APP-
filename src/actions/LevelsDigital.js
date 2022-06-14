import { FETCH_LevelDigital, FETCH_ALL_LevelsDigital, CREATE_LevelDigital, UPDATE_LevelDigital, DELETE_LevelDigital} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getLevelsDigital = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLevelsDigital();

    dispatch({ type: FETCH_ALL_LevelsDigital, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getLevelDigital = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchLevelDigital(id);

    dispatch({ type: FETCH_LevelDigital, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createLevelDigital = (LevelDigital) => async (dispatch) => {
  try {
    const { data } = await api.createLevelDigital(LevelDigital);

    dispatch({ type: CREATE_LevelDigital, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateLevelDigital = (id, LevelDigital) => async (dispatch) => {
  try {
    const { data } = await api.updateLevelDigital(id, LevelDigital);

    dispatch({ type: UPDATE_LevelDigital, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteLevelDigital = (id) => async (dispatch) => {
  try {
    await api.deleteLevelDigital(id);

    dispatch({ type: DELETE_LevelDigital, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
