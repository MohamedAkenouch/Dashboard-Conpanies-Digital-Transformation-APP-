import { FETCH_InitiativeCulture, FETCH_ALL_InitiativesCulture, CREATE_InitiativeCulture, UPDATE_InitiativeCulture, DELETE_InitiativeCulture} from '../constants/actionTypes';

export default (InitiativesCulture = [], action) => {
  switch (action.type) {
    case FETCH_ALL_InitiativesCulture:
      return action.payload;
    case FETCH_InitiativeCulture:
      return action.payload;
    case CREATE_InitiativeCulture:
      return [...InitiativesCulture, action.payload];
    case UPDATE_InitiativeCulture:
      return InitiativesCulture.map((initiative) => (initiative._id === action.payload._id ? action.payload :initiative));
    case DELETE_InitiativeCulture:
      return InitiativesCulture.filter((initiative) => initiative._id !== action.payload);
    default:
      return InitiativesCulture;
  }
};
