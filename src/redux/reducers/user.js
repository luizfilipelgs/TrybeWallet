// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '', // string que armazena o email da pessoa usuária
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return {
      ...state,
      ...action.payload,
    };
  }
};

export default user;
