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
    const regexEmail = /\S+@\S+\.\S+/.test(email);
    /* /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(email); */
    const stateBolean = regexEmail && senha.length >= minLengthSenha;
    return stateBolean; // tem que retornar false
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, btnDisabled: this.validateLogin });
  };

  handleClick = (event) => {
    event.preventDefault();
  };

  render() {
    const { btnDisabled } = this.state;
    return (
      <main>
        <h1>Login</h1>
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              type="email"
              name="email"
              data-testid="email-input"
              id="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              type="text"
              name="senha"
              data-testid="password-input"
              id="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            onClick={ this.handleClick }
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
