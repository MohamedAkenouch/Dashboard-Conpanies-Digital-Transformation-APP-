import { FETCH_LevelDigital, FETCH_ALL_LevelsDigital, CREATE_LevelDigital, UPDATE_LevelDigital, DELETE_LevelDigital } from '../constants/actionTypes';

export default (LevelsDigital = [], action) => {
  switch (action.type) {
    case FETCH_ALL_LevelsDigital:
      return action.payload;
    case FETCH_LevelDigital:
      return action.payload;
    case CREATE_LevelDigital:
      return [...LevelsDigital, action.payload];
    case UPDATE_LevelDigital:
      return LevelsDigital.map((LevelDigital) => (LevelDigital._id === action.payload._id ? action.payload : LevelDigital));
    case DELETE_LevelDigital:
      return LevelsDigital.filter((LevelDigital) => LevelDigital._id !== action.payload);
    default:
      return LevelsDigital;
  }
};

