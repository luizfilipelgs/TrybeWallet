import { REQUEST_CURRENCIES, RESPONSE_CURRENCIES, RESPONSE_ERRO } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  total: 0,
  idGeral: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
    };
  case RESPONSE_CURRENCIES:
    return {
      ...state,
      ...action.payload,
    };
  case RESPONSE_ERRO:
    return {
      ...state,
      erro: action.payload,
    };
  default: return state;
  }
};

export default wallet;