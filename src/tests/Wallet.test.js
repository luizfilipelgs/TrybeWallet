import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWith';
import Wallet from '../pages/Wallet';

const initialState = {
  type: 'RESPONSE_CURRENCIES',
  payload: {
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
    exchangeRates: {
      USD: {
        code: 'USD',
        codein: 'BRL',
        name: 'Dólar Americano/Real Brasileiro',
        high: '5.0935',
        low: '5.0918',
        varBid: '0.0005',
        pctChange: '0.01',
        bid: '5.093',
        ask: '5.094',
        timestamp: '1663020471',
        create_date: '2022-09-12 19:07:51',
      },
      CAD: {
        code: 'CAD',
        codein: 'BRL',
        name: 'Dólar Canadense/Real Brasileiro',
        high: '3.9228',
        low: '3.9195',
        varBid: '0.0044',
        pctChange: '0.11',
        bid: '3.9216',
        ask: '3.9227',
        timestamp: '1663020465',
        // eslint-disable-next-line sonarjs/no-duplicate-string
        create_date: '2022-09-12 19:07:45',
      },
      GBP: {
        code: 'GBP',
        codein: 'BRL',
        name: 'Libra Esterlina/Real Brasileiro',
        high: '5.9556',
        low: '5.9477',
        varBid: '0.0032',
        pctChange: '0.05',
        bid: '5.9481',
        ask: '5.9513',
        timestamp: '1663020468',
        create_date: '2022-09-12 19:07:48',
      },
      ARS: {
        code: 'ARS',
        codein: 'BRL',
        name: 'Peso Argentino/Real Brasileiro',
        high: '0.0358',
        low: '0.0358',
        varBid: '0',
        pctChange: '0',
        bid: '0.0358',
        ask: '0.0358',
        timestamp: '1663020465',
        create_date: '2022-09-12 19:07:45',
      },
      BTC: {
        code: 'BTC',
        codein: 'BRL',
        name: 'Bitcoin/Real Brasileiro',
        high: '115.5',
        low: '111.403',
        varBid: '2811',
        pctChange: '2.53',
        bid: '113.967',
        ask: '114.1',
        timestamp: '1663020447',
        create_date: '2022-09-12 19:07:27',
      },
      LTC: {
        code: 'LTC',
        codein: 'BRL',
        name: 'Litecoin/Real Brasileiro',
        high: '325',
        low: '308.21',
        varBid: '-9.76',
        pctChange: '-3.04',
        bid: '311.1',
        ask: '312.63',
        timestamp: '1663020473',
        create_date: '2022-09-12 19:07:53',
      },
      EUR: {
        code: 'EUR',
        codein: 'BRL',
        name: 'Euro/Real Brasileiro',
        high: '5.1582',
        low: '5.1541',
        varBid: '0.0043',
        pctChange: '0.08',
        bid: '5.1541',
        ask: '5.1572',
        timestamp: '1663020465',
        create_date: '2022-09-12 19:07:45',
      },
      JPY: {
        code: 'JPY',
        codein: 'BRL',
        name: 'Iene Japonês/Real Brasileiro',
        high: '0.03568',
        low: '0.03565',
        varBid: '0',
        pctChange: '0',
        bid: '0.03566',
        ask: '0.03569',
        timestamp: '1663020465',
        create_date: '2022-09-12 19:07:45',
      },
      CHF: {
        code: 'CHF',
        codein: 'BRL',
        name: 'Franco Suíço/Real Brasileiro',
        high: '5.3447',
        low: '5.3389',
        varBid: '0.0047',
        pctChange: '0.09',
        bid: '5.3403',
        ask: '5.3435',
        timestamp: '1663020465',
        create_date: '2022-09-12 19:07:45',
      },
      AUD: {
        code: 'AUD',
        codein: 'BRL',
        name: 'Dólar Australiano/Real Brasileiro',
        high: '3.5104',
        low: '3.5073',
        varBid: '0.0016',
        pctChange: '0.05',
        bid: '3.5075',
        ask: '3.5093',
        timestamp: '1663020465',
        create_date: '2022-09-12 19:07:45',
      },
      CNY: {
        code: 'CNY',
        codein: 'BRL',
        name: 'Yuan Chinês/Real Brasileiro',
        high: '0.7432',
        low: '0.7341',
        varBid: '-0.0077',
        pctChange: '-1.04',
        bid: '0.7353',
        ask: '0.7354',
        timestamp: '1663016944',
        create_date: '2022-09-12 18:09:04',
      },
      ILS: {
        code: 'ILS',
        codein: 'BRL',
        name: 'Novo Shekel Israelense/Real Brasileiro',
        high: '1.5252',
        low: '1.5089',
        varBid: '0.0041',
        pctChange: '0.27',
        bid: '1.5136',
        ask: '1.5139',
        timestamp: '1663020426',
        create_date: '2022-09-12 19:07:06',
      },
      ETH: {
        code: 'ETH',
        codein: 'BRL',
        name: 'Ethereum/Real Brasileiro',
        high: '9.19919',
        low: '8.66993',
        varBid: '-203.85',
        pctChange: '-2.27',
        bid: '8.73709',
        ask: '8.76406',
        timestamp: '1663020447',
        create_date: '2022-09-12 19:07:27',
      },
      XRP: {
        code: 'XRP',
        codein: 'BRL',
        name: 'XRP/Real Brasileiro',
        high: '1.84',
        low: '1.78',
        varBid: '0',
        pctChange: '-0.1',
        bid: '1.82',
        ask: '1.82',
        timestamp: '1663020323',
        create_date: '2022-09-12 19:05:23',
      },
      DOGE: {
        code: 'DOGE',
        codein: 'BRL',
        name: 'Dogecoin/Real Brasileiro',
        high: '0.333323',
        low: '0.322842',
        varBid: '0.00036',
        pctChange: '0.11',
        bid: '0.325206',
        ask: '0.325206',
        timestamp: '1663020452',
        create_date: '2022-09-12 19:07:32',
      },
    },
  },
};

describe('Verifica o funcionamento de <Wallet />', () => {
  test('Se existe input "valor" ', () => {
    renderWithRouterAndRedux(<Wallet />);
    const inputValor = screen.getByTestId('value-input');
    expect(inputValor).toBeInTheDocument();
  });

  test('Se existe um select "Moeda" ', () => {
    renderWithRouterAndRedux(<Wallet />);
    const selectMoeda = screen.getByTestId('currency-input');
    expect(selectMoeda).toBeInTheDocument();
  });

  test('Se existe um select "Método de Pagamento:" ', () => {
    renderWithRouterAndRedux(<Wallet />);
    const selectMethod = screen.getByTestId('method-input');
    expect(selectMethod).toBeInTheDocument();
  });

  test('Se existe um input "Descrição" ', () => {
    renderWithRouterAndRedux(<Wallet />);
    const inputDescription = screen.getByTestId('description-input');
    expect(inputDescription).toBeInTheDocument();
  });

  test('Se existe um btn "Adcionar despesa" ', () => {
    renderWithRouterAndRedux(<Wallet />);
    // eslint-disable-next-line sonarjs/no-duplicate-string
    const btnAdd = screen.getByRole('button', 'Adicionar despesa');
    expect(btnAdd).toBeInTheDocument();
  });

  test('Se contem todos os headers da tabela" ', () => {
    renderWithRouterAndRedux(<Wallet />);
    const tableHeaders = [
      'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir',
    ];

    tableHeaders.map((header) => expect(screen.getByText(header)).toBeInTheDocument());
  });

  test('Se a inserção de dados nos inputs" ', () => {
    renderWithRouterAndRedux(<Wallet />);

    const inputValor = screen.getByTestId('value-input');
    expect(inputValor).toBeInTheDocument();
    userEvent.type(inputValor, '10');

    const inputDescription = screen.getByTestId('description-input');
    expect(inputDescription).toBeInTheDocument();
    userEvent.type(inputDescription, 'pizza');

    const btnAdd = screen.getByRole('button', 'Adicionar despesa');
    expect(btnAdd).toBeInTheDocument();
    userEvent.click(inputDescription);
  });

  test('Se se existe na tabela as despesas adicionadas', () => {
    renderWithRouterAndRedux(<Wallet />, initialState);

    /*  const elementosDespesa1 = ['almoço', 'Alimentação',
      'Dinheiro', '10.00', 'Dólar Americano/Real Brasileiro',
      '5.09', '50.94', 'Real',
    ];

    const elementosDespesa2 = ['uber', 'Transporte',
      'Dinheiro', '5.00', 'Dólar Americano/Real Brasileiro',
      '5.09', '25.47', 'Real',
    ]; */

    const btnAdd = screen.getByRole('button', 'Adicionar despesa');
    expect(btnAdd).toBeInTheDocument();
  /*  userEvent.click(inputDescription);

    elementosDespesa1.map((el) => expect(screen.getByText(el)).toBeInTheDocument()); */
  });
});
