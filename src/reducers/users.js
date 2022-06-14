import { FETCH_ALL_Users,DELETE_User } from '../constants/actionTypes';

export default (Users = [], action) => {
  switch (action.type) {
    case FETCH_ALL_Users:
      return action.payload;

    case DELETE_User:
      return Users.filter((User) => User._id !== action.payload);
      
    default:
      return Users;
  }
};

