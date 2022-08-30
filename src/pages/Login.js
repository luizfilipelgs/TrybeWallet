import React from 'react';
import { connect } from 'react-redux';
import { saveEmailAction } from '../redux/actions';

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
    return !stateBolean; // tem que retornar false
  };

  habiliteBtn = () => (
    this.setState({ btnDisabled: this.validateLogin() })
  );

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.habiliteBtn());
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(saveEmailAction(email));
    history.push('/carteira');
  };

  render() {
    const { btnDisabled } = this.state;
    return (
      <main>
        <h1>Login</h1>
        <form
          onSubmit={ this.handleSubmit }
        >
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
            disabled={ btnDisabled }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

/* Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  dispatch: PropTypes.func.isRequired,
}; */

export default connect()(Login);
