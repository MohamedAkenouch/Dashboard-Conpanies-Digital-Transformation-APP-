import { FETCH_QuestionAuditStrategic, FETCH_ALL_QuestionsAuditStrategic, CREATE_QuestionAuditStrategic, UPDATE_QuestionAuditStrategic, DELETE_QuestionAuditStrategic} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getQuestionsAuditStrategic = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQuestionsAuditStrategic();

    dispatch({ type: FETCH_ALL_QuestionsAuditStrategic, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getQuestionAuditStrategic = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchQuestionAuditStrategic(id);

    dispatch({ type: FETCH_QuestionAuditStrategic, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createQuestionAuditStrategic = (QuestionAuditStrategic) => async (dispatch) => {
  try {
    const { data } = await api.createQuestionAuditStrategic(QuestionAuditStrategic);

    dispatch({ type: CREATE_QuestionAuditStrategic, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateQuestionAuditStrategic = (id, QuestionAuditStrategic) => async (dispatch) => {
  try {
    const { data } = await api.updateQuestionAuditStrategic(id, QuestionAuditStrategic);

    dispatch({ type: UPDATE_QuestionAuditStrategic, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteQuestionAuditStrategic = (id) => async (dispatch) => {
  try {
    await api.deleteQuestionAuditStrategic(id);

    dispatch({ type: DELETE_QuestionAuditStrategic, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
