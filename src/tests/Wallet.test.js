import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWith';
import Wallet from '../pages/Wallet';
import initialState from './helpers/mockData2';
import { mockData } from '../../cypress/mocks/data';

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

    userEvent.type(inputValor, '15');
    userEvent.type(inputDescription, 'churras');
    userEvent.click(inputDescription);
  });

  test('Se existe na tabela a despesa adicionada e se é possivel deletar', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState });

    /*   const cellNames = ['Alimentação',
      'Dinheiro', 'Dólar Americano/Real Brasileiro',
      '5.20', 'Real',
    ];

    cellNames.map((el) => expect(screen.getByRole('cell', { name: el })[0]).toBeInTheDocument());
 */
    const elementosDespesa1 = ['NuBank Conta', '10.00', '52.03',
    ];

    elementosDespesa1.map((el) => expect(screen.getByRole('cell', { name: el })).toBeInTheDocument());
    const totalValue = screen.getByTestId('total-field');
    expect(totalValue).toBeInTheDocument();

    const btnEdit0 = screen.getAllByTestId('edit-btn')[0];
    expect(btnEdit0).toBeInTheDocument();

    const btnDelet0 = screen.getAllByTestId('delete-btn')[0];
    expect(btnDelet0).toBeInTheDocument();

    userEvent.click(btnDelet0);

    elementosDespesa1.map((el) => expect(screen.queryByRole('cell', { name: el })).not.toBeInTheDocument());
  });

  test('Verifica o fetch da API', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
    renderWithRouterAndRedux(<Wallet />, { initialState });
  });
});
