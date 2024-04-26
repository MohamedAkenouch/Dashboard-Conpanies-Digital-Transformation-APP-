import { FETCH_ObjectiveStrategic, FETCH_ALL_ObjectivesStrategic, CREATE_ObjectiveStrategic, UPDATE_ObjectiveStrategic, DELETE_ObjectiveStrategic } from '../constants/actionTypes';

export default (ObjectivesStrategic = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ObjectivesStrategic:
      return action.payload;
    case FETCH_ObjectiveStrategic:
      return action.payload;
    case CREATE_ObjectiveStrategic:
      return [...ObjectivesStrategic, action.payload];
    case UPDATE_ObjectiveStrategic:
      return ObjectivesStrategic.map((ObjectiveStrategic) => (ObjectiveStrategic._id === action.payload._id ? action.payload : ObjectiveStrategic));
    case DELETE_ObjectiveStrategic:
      return ObjectivesStrategic.filter((ObjectiveStrategic) => ObjectiveStrategic._id !== action.payload);
    default:
      return ObjectivesStrategic;
  }
};

