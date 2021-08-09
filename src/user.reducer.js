import { SAVE_USER, REMOVE_USER } from './user.actions';

const initialStateUser = {
  user: null
}

const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.payload.userData
      };
    case REMOVE_USER:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}

export default userReducer;
