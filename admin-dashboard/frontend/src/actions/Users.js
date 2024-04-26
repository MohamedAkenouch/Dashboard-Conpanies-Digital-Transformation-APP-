import {FETCH_ALL_Users,DELETE_User} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: FETCH_ALL_Users, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);

    dispatch({ type: DELETE_User, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
