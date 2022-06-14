import { FETCH_ChoiceDigital, FETCH_ALL_ChoicesDigital, CREATE_ChoiceDigital, UPDATE_ChoiceDigital, DELETE_ChoiceDigital } from '../constants/actionTypes';

export default (ChoicesDigital = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ChoicesDigital:
      return action.payload;
    case FETCH_ChoiceDigital:
      return action.payload;
    case CREATE_ChoiceDigital:
      return [...ChoicesDigital, action.payload];
    case UPDATE_ChoiceDigital:
      return ChoicesDigital.map((ChoiceDigital) => (ChoiceDigital._id === action.payload._id ? action.payload : ChoiceDigital));
    case DELETE_ChoiceDigital:
      return ChoicesDigital.filter((ChoiceDigital) => ChoiceDigital._id !== action.payload);
    default:
      return ChoicesDigital;
  }
};

