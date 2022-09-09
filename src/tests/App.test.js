import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWith';
import Login from '../pages/Login';
import App from '../App';

describe('Verifica a tela de login', () => {
  test('Se existe input de email e senha', () => {
    renderWithRouterAndRedux(<Login />);

    const loginText = screen.getByText(/login/i);
    expect(loginText).toBeInTheDocument();

    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();

    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
  });

  test('Efetuar login caso digitado um email e senha validos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputPassword = screen.getByTestId('password-input');
    const inputEmail = screen.getByTestId('email-input');
    const btnLogin = screen.getByRole('button');

    expect(btnLogin).toBeInTheDocument();
    expect(btnLogin).toBeDisabled();

    userEvent.type(inputPassword, '123');
    userEvent.type(inputEmail, 'teste@teste');
    expect(btnLogin).toBeDisabled();
    userEvent.clear(inputEmail);
    userEvent.clear(inputPassword);

    userEvent.type(inputPassword, '123456');
    userEvent.type(inputEmail, 'teste@teste.com');
    expect(btnLogin).toBeEnabled();

    userEvent.click(btnLogin);
    expect(history.location.pathname).toBe('/carteira');
  });
});
