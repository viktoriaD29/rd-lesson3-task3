export const LANGUAGE = 'LANGUAGE'

export const setLanguage = (lang) => {
  return {
    type: LANGUAGE,
    payload: {
      lang,
    },
  };
}