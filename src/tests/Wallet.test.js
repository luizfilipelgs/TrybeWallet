import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWith';
import Wallet from '../pages/Wallet';

const initialState = {
  user: {
    email: ''
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
      'DOGE'
    ],
    expenses: [
      {
        value: '10',
        description: 'NuBank Conta',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: {
          USD: {
            code: 'USD',
            codein: 'BRL',
            name: 'Dólar Americano/Real Brasileiro',
            high: '5.3011',
            low: '5.1455',
            varBid: '-0.1034',
            pctChange: '-1.97',
            bid: '5.1493',
            ask: '5.1501',
            timestamp: '1663605687',
            create_date: '2022-09-19 13:41:27'
          },
          CAD: {
            code: 'CAD',
            codein: 'BRL',
            name: 'Dólar Canadense/Real Brasileiro',
            high: '3.9823',
            low: '3.8747',
            varBid: '-0.0838',
            pctChange: '-2.12',
            bid: '3.8763',
            ask: '3.8781',
            timestamp: '1663605687',
            create_date: '2022-09-19 13:41:27'
          },
          GBP: {
            code: 'GBP',
            codein: 'BRL',
            name: 'Libra Esterlina/Real Brasileiro',
            high: '6.0298',
            low: '5.8743',
            varBid: '-0.1171',
            pctChange: '-1.95',
            bid: '5.8779',
            ask: '5.8794',
            timestamp: '1663605687',
            create_date: '2022-09-19 13:41:27'
          },
          ARS: {
            code: 'ARS',
            codein: 'BRL',
            name: 'Peso Argentino/Real Brasileiro',
            high: '0.0369',
            low: '0.0357',
            varBid: '-0.0009',
            pctChange: '-2.46',
            bid: '0.0357',
            ask: '0.0357',
            timestamp: '1663605684',
            create_date: '2022-09-19 13:41:24'
          },
          BTC: {
            code: 'BTC',
            codein: 'BRL',
            name: 'Bitcoin/Real Brasileiro',
            high: '104.734',
            low: '97.1',
            varBid: '-4313',
            pctChange: '-4.14',
            bid: '99.51',
            ask: '99.8',
            timestamp: '1663605688',
            create_date: '2022-09-19 13:41:28'
          },
          LTC: {
            code: 'LTC',
            codein: 'BRL',
            name: 'Litecoin/Real Brasileiro',
            high: '309.86',
            low: '265.51',
            varBid: '-26.56',
            pctChange: '-8.9',
            bid: '272.01',
            ask: '272.01',
            timestamp: '1663605689',
            create_date: '2022-09-19 13:41:29'
          },
          EUR: {
            code: 'EUR',
            codein: 'BRL',
            name: 'Euro/Real Brasileiro',
            high: '5.2962',
            low: '5.1507',
            varBid: '-0.1067',
            pctChange: '-2.03',
            bid: '5.1536',
            ask: '5.1565',
            timestamp: '1663605687',
            create_date: '2022-09-19 13:41:27'
          },
          JPY: {
            code: 'JPY',
            codein: 'BRL',
            name: 'Iene Japonês/Real Brasileiro',
            high: '0.03694',
            low: '0.03591',
            varBid: '-0.0006',
            pctChange: '-1.64',
            bid: '0.03592',
            ask: '0.03594',
            timestamp: '1663605690',
            create_date: '2022-09-19 13:41:30'
          },
          CHF: {
            code: 'CHF',
            codein: 'BRL',
            name: 'Franco Suíço/Real Brasileiro',
            high: '5.483',
            low: '5.3289',
            varBid: '-0.1119',
            pctChange: '-2.06',
            bid: '5.3311',
            ask: '5.3341',
            timestamp: '1663605687',
            create_date: '2022-09-19 13:41:27'
          },
          AUD: {
            code: 'AUD',
            codein: 'BRL',
            name: 'Dólar Australiano/Real Brasileiro',
            high: '3.5419',
            low: '3.4518',
            varBid: '-0.0756',
            pctChange: '-2.14',
            bid: '3.4542',
            ask: '3.4557',
            timestamp: '1663605687',
            create_date: '2022-09-19 13:41:27'
          },
          CNY: {
            code: 'CNY',
            codein: 'BRL',
            name: 'Yuan Chinês/Real Brasileiro',
            high: '0.7557',
            low: '0.7344',
            varBid: '-0.0171',
            pctChange: '-2.28',
            bid: '0.7347',
            ask: '0.7348',
            timestamp: '1663605665',
            create_date: '2022-09-19 13:41:05'
          },
          ILS: {
            code: 'ILS',
            codein: 'BRL',
            name: 'Novo Shekel Israelense/Real Brasileiro',
            high: '1.5364',
            low: '1.4942',
            varBid: '-0.0392',
            pctChange: '-2.56',
            bid: '1.4943',
            ask: '1.4945',
            timestamp: '1663605667',
            create_date: '2022-09-19 13:41:07'
          },
          ETH: {
            code: 'ETH',
            codein: 'BRL',
            name: 'Ethereum/Real Brasileiro',
            high: '7.39977',
            low: '6',
            varBid: '-410.01',
            pctChange: '-5.54',
            bid: '6.96924',
            ask: '6.98602',
            timestamp: '1663605689',
            create_date: '2022-09-19 13:41:29'
          },
          XRP: {
            code: 'XRP',
            codein: 'BRL',
            name: 'XRP/Real Brasileiro',
            high: '2.09',
            low: '1.72',
            varBid: '-0.14',
            pctChange: '-7.09',
            bid: '1.85',
            ask: '1.86',
            timestamp: '1663605689',
            create_date: '2022-09-19 13:41:29'
          },
          DOGE: {
            code: 'DOGE',
            codein: 'BRL',
            name: 'Dogecoin/Real Brasileiro',
            high: '0.318255',
            low: '0.295307',
            varBid: '-0.019874',
            pctChange: '-6.25',
            bid: '0.298315',
            ask: '0.298315',
            timestamp: '1663605669',
            create_date: '2022-09-19 13:41:09'
          }
        },
        id: 0
      }
    ],
    editor: false,
    idToEdit: 0,
    total: 51.501000000000005,
    idGeral: 1,
    exchangeRates: {
      USD: {
        code: 'USD',
        codein: 'BRL',
        name: 'Dólar Americano/Real Brasileiro',
        high: '5.1705',
        low: '5.1692',
        varBid: '0.0023',
        pctChange: '0.04',
        bid: '5.1688',
        ask: '5.1697',
        timestamp: '1663621437',
        create_date: '2022-09-19 18:03:57'
      },
      CAD: {
        code: 'CAD',
        codein: 'BRL',
        name: 'Dólar Canadense/Real Brasileiro',
        high: '3.9024',
        low: '3.899',
        varBid: '0.0015',
        pctChange: '0.04',
        bid: '3.901',
        ask: '3.9022',
        timestamp: '1663624155',
        create_date: '2022-09-19 18:49:15'
      },
      GBP: {
        code: 'GBP',
        codein: 'BRL',
        name: 'Libra Esterlina/Real Brasileiro',
        high: '5.9113',
        low: '5.9043',
        varBid: '0.0018',
        pctChange: '0.03',
        bid: '5.9085',
        ask: '5.9131',
        timestamp: '1663624168',
        create_date: '2022-09-19 18:49:28'
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
        timestamp: '1663621437',
        create_date: '2022-09-19 18:03:57'
      },
      BTC: {
        code: 'BTC',
        codein: 'BRL',
        name: 'Bitcoin/Real Brasileiro',
        high: '103.105',
        low: '97.1',
        varBid: '-2278',
        pctChange: '-2.19',
        bid: '101.786',
        ask: '101.903',
        timestamp: '1663624016',
        create_date: '2022-09-19 18:46:56'
      },
      LTC: {
        code: 'LTC',
        codein: 'BRL',
        name: 'Litecoin/Real Brasileiro',
        high: '285.36',
        low: '265.51',
        varBid: '-22.84',
        pctChange: '-7.67',
        bid: '274.8',
        ask: '274.97',
        timestamp: '1663624014',
        create_date: '2022-09-19 18:46:54'
      },
      EUR: {
        code: 'EUR',
        codein: 'BRL',
        name: 'Euro/Real Brasileiro',
        high: '5.1832',
        low: '5.1807',
        varBid: '0.003',
        pctChange: '0.06',
        bid: '5.1812',
        ask: '5.1842',
        timestamp: '1663624167',
        create_date: '2022-09-19 18:49:27'
      },
      JPY: {
        code: 'JPY',
        codein: 'BRL',
        name: 'Iene Japonês/Real Brasileiro',
        high: '0.03611',
        low: '0.03609',
        varBid: '0',
        pctChange: '0',
        bid: '0.03608',
        ask: '0.0361',
        timestamp: '1663624171',
        create_date: '2022-09-19 18:49:31'
      },
      CHF: {
        code: 'CHF',
        codein: 'BRL',
        name: 'Franco Suíço/Real Brasileiro',
        high: '5.3626',
        low: '5.359',
        varBid: '0.0044',
        pctChange: '0.08',
        bid: '5.3596',
        ask: '5.3628',
        timestamp: '1663624149',
        create_date: '2022-09-19 18:49:09'
      },
      AUD: {
        code: 'AUD',
        codein: 'BRL',
        name: 'Dólar Australiano/Real Brasileiro',
        high: '3.4799',
        low: '3.4771',
        varBid: '0.0011',
        pctChange: '0.03',
        bid: '3.4765',
        ask: '3.4787',
        timestamp: '1663624169',
        create_date: '2022-09-19 18:49:29'
      },
      CNY: {
        code: 'CNY',
        codein: 'BRL',
        name: 'Yuan Chinês/Real Brasileiro',
        high: '0.7557',
        low: '0.7344',
        varBid: '-0.0147',
        pctChange: '-1.95',
        bid: '0.7377',
        ask: '0.7378',
        timestamp: '1663621325',
        create_date: '2022-09-19 18:02:05'
      },
      ILS: {
        code: 'ILS',
        codein: 'BRL',
        name: 'Novo Shekel Israelense/Real Brasileiro',
        high: '1.5364',
        low: '1.4942',
        varBid: '-0.0334',
        pctChange: '-2.18',
        bid: '1.5018',
        ask: '1.5021',
        timestamp: '1663624024',
        create_date: '2022-09-19 18:47:04'
      },
      ETH: {
        code: 'ETH',
        codein: 'BRL',
        name: 'Ethereum/Real Brasileiro',
        high: '7.25683',
        low: '6',
        varBid: '-46.1',
        pctChange: '-0.64',
        bid: '7.19121',
        ask: '7.22434',
        timestamp: '1663624013',
        create_date: '2022-09-19 18:46:53'
      },
      XRP: {
        code: 'XRP',
        codein: 'BRL',
        name: 'XRP/Real Brasileiro',
        high: '2.04',
        low: '1.79',
        varBid: '-0.06',
        pctChange: '-2.96',
        bid: '2.01',
        ask: '2.02',
        timestamp: '1663624017',
        create_date: '2022-09-19 18:46:57'
      },
      DOGE: {
        code: 'DOGE',
        codein: 'BRL',
        name: 'Dogecoin/Real Brasileiro',
        high: '0.306402',
        low: '0.295307',
        varBid: '-0.00180301',
        pctChange: '-0.59',
        bid: '0.303381',
        ask: '0.303381',
        timestamp: '1663624079',
        create_date: '2022-09-19 18:47:59'
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

  test('Se se existe na tabela as despesas adicionadas e se é possivel deletar', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState });

    const elementosDespesa1 = ['NuBank Conta', 'Alimentação',
      'Dinheiro', '10.00', 'Dólar Americano/Real Brasileiro',
      '5.15', '51.50', 'Real',
    ];

    elementosDespesa1.map((el) => expect(screen.getByRole('cell', { name: el })).toBeInTheDocument());

    const btnEdit = screen.getByTestId('edit-btn');
    expect(btnEdit).toBeInTheDocument();

    const btnDelet = screen.getByTestId('delete-btn');
    expect(btnDelet).toBeInTheDocument();
  });
});
