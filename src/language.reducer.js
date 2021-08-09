import { LANGUAGE } from './language.actions'

// const initialStateLanguage = {
//   language: 'en'
// }

const languageReducer = (state = 'en', action) => {
  switch(action.type) {
    case LANGUAGE:
      return {
        //...state,
        language: action.payload.lang,
      };
    default: 
      return state
  }
}

export default languageReducer;