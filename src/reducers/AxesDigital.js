import { FETCH_AxeDigital, FETCH_ALL_AxesDigital, CREATE_AxeDigital, UPDATE_AxeDigital, DELETE_AxeDigital } from '../constants/actionTypes';

export default (AxesDigital = [], action) => {
  switch (action.type) {
    case FETCH_ALL_AxesDigital:
      return action.payload;
    case FETCH_AxeDigital:
      return action.payload;
    case CREATE_AxeDigital:
      return [...AxesDigital, action.payload];
    case UPDATE_AxeDigital:
      return AxesDigital.map((AxeDigital) => (AxeDigital._id === action.payload._id ? action.payload : AxeDigital));
    case DELETE_AxeDigital:
      return AxesDigital.filter((AxeDigital) => AxeDigital._id !== action.payload);
    default:
      return AxesDigital;
  }
};

