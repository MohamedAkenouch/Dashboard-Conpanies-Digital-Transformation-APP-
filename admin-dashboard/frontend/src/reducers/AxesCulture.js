import { FETCH_AxeCulture, FETCH_ALL_AxesCulture, CREATE_AxeCulture, UPDATE_AxeCulture, DELETE_AxeCulture } from '../constants/actionTypes';

export default (AxesCulture = [], action) => {
  switch (action.type) {
    case FETCH_ALL_AxesCulture:
      return action.payload;
    case FETCH_AxeCulture:
      return action.payload;
    case CREATE_AxeCulture:
      return [...AxesCulture, action.payload];
    case UPDATE_AxeCulture:
      return AxesCulture.map((AxeCulture) => (AxeCulture._id === action.payload._id ? action.payload : AxeCulture));
    case DELETE_AxeCulture:
      return AxesCulture.filter((AxeCulture) => AxeCulture._id !== action.payload);
    default:
      return AxesCulture;
  }
};

