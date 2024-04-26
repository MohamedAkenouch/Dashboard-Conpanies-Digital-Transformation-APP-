import { FETCH_QuestionAuditCulture, FETCH_ALL_QuestionsAuditCulture, CREATE_QuestionAuditCulture, UPDATE_QuestionAuditCulture, DELETE_QuestionAuditCulture } from '../constants/actionTypes';

export default (QuestionsAuditCulture = [], action) => {
  switch (action.type) {
    case FETCH_ALL_QuestionsAuditCulture:
      return action.payload;
    case FETCH_QuestionAuditCulture:
      return action.payload;
    case CREATE_QuestionAuditCulture:
      return [...QuestionsAuditCulture, action.payload];
    case UPDATE_QuestionAuditCulture:
      return QuestionsAuditCulture.map((QuestionAuditCulture) => (QuestionAuditCulture._id === action.payload._id ? action.payload : QuestionAuditCulture));
    case DELETE_QuestionAuditCulture:
      return QuestionsAuditCulture.filter((QuestionAuditCulture) => QuestionAuditCulture._id !== action.payload);
    default:
      return QuestionsAuditCulture;
  }
};

