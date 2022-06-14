import { FETCH_QuestionAuditStrategic, FETCH_ALL_QuestionsAuditStrategic, CREATE_QuestionAuditStrategic, UPDATE_QuestionAuditStrategic, DELETE_QuestionAuditStrategic } from '../constants/actionTypes';

export default (QuestionsAuditStrategic = [], action) => {
  switch (action.type) {
    case FETCH_ALL_QuestionsAuditStrategic:
      return action.payload;
    case FETCH_QuestionAuditStrategic:
      return action.payload;
    case CREATE_QuestionAuditStrategic:
      return [...QuestionsAuditStrategic, action.payload];
    case UPDATE_QuestionAuditStrategic:
      return QuestionsAuditStrategic.map((QuestionAuditStrategic) => (QuestionAuditStrategic._id === action.payload._id ? action.payload : QuestionAuditStrategic));
    case DELETE_QuestionAuditStrategic:
      return QuestionsAuditStrategic.filter((QuestionAuditStrategic) => QuestionAuditStrategic._id !== action.payload);
    default:
      return QuestionsAuditStrategic;
  }
};

