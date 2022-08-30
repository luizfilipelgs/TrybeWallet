import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    btnDisabled: true,
  };

  validateLogin = () => {
    const { email, senha } = this.state;
    const minLengthSenha = 5;
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(email);
    const stateBolean = regexEmail && senha.length >= minLengthSenha;
    console.log(!stateBolean);
    return !stateBolean; // tem que retornar false
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, btnDisabled: this.validateLogin });
  };

  render() {
    const { email, senha, btnDisabled } = this.state;
    return (
      <main>
        <h1>Acesso</h1>
        <form>
          <label htmlFor="email-input">
            Login:
            <input
              type="email"
              name="email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email-input">
            Senha:
            <input
              type="text"
              name="senha"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            onClick={ this.handleChange }
            disabled={ btnDisabled }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

export default Login;
