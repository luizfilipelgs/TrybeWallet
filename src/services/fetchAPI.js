const API_BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = async () => {
  const response = await fetch(API_BASE_URL);
  const currencies = await response.json();
  delete currencies.USDT;
  return currencies;
};

export default fetchApi;
