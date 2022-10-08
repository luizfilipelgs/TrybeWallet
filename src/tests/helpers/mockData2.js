import exchangeRatesMock from './exchangeRatesMock';

const mockData2 = {
  user: {
    email: 'teste@test.com',
  },
  wallet: {
    currencies: [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE',
    ],
    expenses: [
      {
        value: '10',
        description: 'NuBank Conta',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: exchangeRatesMock,
        id: 2,
      },
      {
        value: '5',
        description: 'pizza',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: exchangeRatesMock,
        id: 3,
      },
    ],
    editor: false,
    idToEdit: 0,
    total: 78.0525,
    idGeral: 4,
    exchangeRates: exchangeRatesMock,
  },
};

export default mockData2;
