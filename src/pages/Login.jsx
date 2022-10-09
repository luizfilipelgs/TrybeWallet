import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmailAction } from '../redux/actions';
import '../style/Login.css';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    btnDisabled: true,
  };

  validateLogin = () => {
    const { email, senha } = this.state;
    const minLengthSenha = 6;
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
        <form
          onSubmit={ this.handleSubmit }
          id="form-login"
        >
          <h1 className="title is-1">Login</h1>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            data-testid="email-input"
            /* id="email-input" */
            onChange={ this.handleChange }
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="senha"
            data-testid="password-input"
            /* id="password-input" */
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            disabled={ btnDisabled }
            className="button is-success"
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
