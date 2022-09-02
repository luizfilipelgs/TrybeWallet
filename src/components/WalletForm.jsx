import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currenciesThunk, ExpenseEditAction } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(currenciesThunk());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { dispatch, exchangeRates, idGeral, expenses } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    const despesa = {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
      id: idGeral };

    console.log(despesa);
    const arrayAux = [...expenses, despesa];
    dispatch(ExpenseEditAction({ expenses: arrayAux, idGeral: idGeral + 1 }));
    dispatch(currenciesThunk());

    this.setState({ value: '', description: '' });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form
        id="form-wallet"
      >
        <label htmlFor="value-input">
          Valor:
          <input
            type="number"
            name="value"
            value={ value }
            id="value-input"
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select
            name="currency"
            value={ currency }
            id="currency-input"
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {
              currencies && currencies.map((currenc) => (
                <option key={ currenc } value={ currenc }>{ currenc }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="method-input">
          Método de Pagamento:
          <select
            name="method"
            value={ method }
            id="method-input"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            {
              payments.map((pay) => (
                <option key={ pay } value={ pay }>{ pay }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria:
          <select
            name="tag"
            value={ tag }
            id="tag-input"
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            {
              categories.map((category) => (
                <option key={ category } value={ category }>{ category }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            name="description"
            value={ description }
            id="description-input"
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          onClick={ this.handleSubmit }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
  exchangeRates: PropTypes.shape({}).isRequired,
  idGeral: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currencies: state.wallet.currencies,
    idGeral: state.wallet.idGeral,
    exchangeRates: state.wallet.exchangeRates,
    expenses: state.wallet.expenses,
  };
};

export default connect(mapStateToProps)(WalletForm);
