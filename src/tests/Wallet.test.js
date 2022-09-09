import React from 'react';
import { screen } from '@testing-library/react';
/* import userEvent from '@testing-library/user-event'; */
import renderWithRouterAndRedux from './helpers/renderWith';
import Wallet from '../pages/Wallet';

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
    const btnAdd = screen.getByRole('button', 'Adicionar despesa');
    expect(btnAdd).toBeInTheDocument();
  });
});
