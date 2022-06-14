import { FETCH_ObjectiveStrategic, FETCH_ALL_ObjectivesStrategic, CREATE_ObjectiveStrategic, UPDATE_ObjectiveStrategic, DELETE_ObjectiveStrategic} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getObjectivesStrategic = () => async (dispatch) => {
  try {
    const { data } = await api.fetchObjectivesStrategic();

    dispatch({ type: FETCH_ALL_ObjectivesStrategic, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getObjectiveStrategic = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchObjectiveStrategic(id);

    dispatch({ type: FETCH_ObjectiveStrategic, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createObjectiveStrategic = (ObjectiveStrategic) => async (dispatch) => {
  try {
    const { data } = await api.createObjectiveStrategic(ObjectiveStrategic);

    dispatch({ type: CREATE_ObjectiveStrategic, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateObjectiveStrategic = (id, ObjectiveStrategic) => async (dispatch) => {
  try {
    const { data } = await api.updateObjectiveStrategic(id, ObjectiveStrategic);

    dispatch({ type: UPDATE_ObjectiveStrategic, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteObjectiveStrategic = (id) => async (dispatch) => {
  try {
    await api.deleteObjectiveStrategic(id);

    dispatch({ type: DELETE_ObjectiveStrategic, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
