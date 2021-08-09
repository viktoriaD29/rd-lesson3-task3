export const SAVE_USER = 'USER/SAVE_USER';
export const REMOVE_USER = 'USER/REMOVE_USER';

export const setUser = (userData) => {
  return {
    type: SAVE_USER,
    payload: {
      userData,
    },
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
