import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { currenciesThunk } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(currenciesThunk());
  }

  render() {
    const { currencies } = this.props;
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
            name="Value"
            id="value-input"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          <select
            name="currency"
            id="currency-input"
            data-testid="currency-input"
          >
            {
              currencies && currencies.map((currency) => (
                <option key={ currency } value={ currency }>{ currency }</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="method-input">
          Método de Pagamento:
          <select
            name="method"
            id="method-input"
            data-testid="method-input"
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
            name="Metodo"
            id="tag-input"
            data-testid="tag-input"
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
            name="descrição"
            id="description-input"
            data-testid="description-input"
          />
        </label>
        <button
          type="submit"
          onClick={ this.handleSubmit }
        >
          Adicionar
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currencies: state.wallet.currencies,
  };
};

export default connect(mapStateToProps)(WalletForm);
