import { FETCH_Initiative, FETCH_ALL_Initiative, CREATE_Initiative, UPDATE_Initiative, DELETE_Initiative} from '../constants/actionTypes';

export default (Initiative = [], action) => {
  switch (action.type) {
    case FETCH_ALL_Initiative:
      return action.payload;
    case FETCH_Initiative:
      return action.payload;
    case CREATE_Initiative:
      return [...Initiative, action.payload];
    case UPDATE_Initiative:
      return Initiative.map((initiative) => (initiative._id === action.payload._id ? action.payload :initiative));
    case DELETE_Initiative:
      return Initiative.filter((initiative) => initiative._id !== action.payload);
    default:
      return Initiative;
  }
};
