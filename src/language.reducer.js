import { SETLANGUAGE } from './language.actions';

const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case SETLANGUAGE:
      return action.payload.lang;
    default:
      return state;
  }
}

export default languageReducer;