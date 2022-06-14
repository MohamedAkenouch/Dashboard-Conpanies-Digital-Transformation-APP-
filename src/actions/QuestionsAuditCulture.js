import { FETCH_QuestionAuditCulture, FETCH_ALL_QuestionsAuditCulture, CREATE_QuestionAuditCulture, UPDATE_QuestionAuditCulture, DELETE_QuestionAuditCulture} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getQuestionsAuditCulture = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQuestionsAuditCulture();

    dispatch({ type: FETCH_ALL_QuestionsAuditCulture, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getQuestionAuditCulture = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchQuestionAuditCulture(id);

    dispatch({ type: FETCH_QuestionAuditCulture, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createQuestionAuditCulture = (QuestionAuditCulture) => async (dispatch) => {
  try {
    const { data } = await api.createQuestionAuditCulture(QuestionAuditCulture);

    dispatch({ type: CREATE_QuestionAuditCulture, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateQuestionAuditCulture = (id, QuestionAuditCulture) => async (dispatch) => {
  try {
    const { data } = await api.updateQuestionAuditCulture(id, QuestionAuditCulture);

    dispatch({ type: UPDATE_QuestionAuditCulture, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteQuestionAuditCulture = (id) => async (dispatch) => {
  try {
    await api.deleteQuestionAuditCulture(id);

    dispatch({ type: DELETE_QuestionAuditCulture, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
