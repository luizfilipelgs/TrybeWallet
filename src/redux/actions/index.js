import fetchApi from '../../services/fetchAPI';

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RESPONSE_CURRENCIES = 'RESPONSE_CURRENCIES';
export const RESPONSE_ERRO = 'RESPONSE_ERRO';

export const saveEmailAction = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

const requestCurrenciesAction = () => ({
  type: REQUEST_CURRENCIES,
});

const responseCurrenciesAction = (payload) => ({
  type: RESPONSE_CURRENCIES,
  payload,
});

const responseErroAction = (payload) => ({
  type: RESPONSE_ERRO,
  payload,
});

export const ExpenseSumAction = (payload) => {
  const valueConvertido = payload.expenses
    .map((e) => Number(e.value) * Number(e.exchangeRates[e.currency].ask));
  const total = valueConvertido.reduce((a, b) => (a + b), 0);
  console.log(total);
  return {
    type: RESPONSE_CURRENCIES,
    payload: { ...payload, total },
  };
};

export const currenciesThunk = () => async (dispatch) => {
  dispatch(requestCurrenciesAction());

  try {
    const response = await fetchApi();
    const currencies = Object.keys(response);
    dispatch(responseCurrenciesAction({ currencies, exchangeRates: response }));
  } catch (error) {
    dispatch(responseErroAction(error));
  }
};
