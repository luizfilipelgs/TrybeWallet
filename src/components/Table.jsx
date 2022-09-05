import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    const tableHeaders = ['Descrição', 'Tag', 'Método de pagamento',
      'Valor', 'Moeda', 'Câmbio utilizado', 'Valor convertido',
      'Moeda de conversão', 'Editar/Excluir'];
    return (
      <table>
        <thead>
          <tr>
            { tableHeaders.map((head) => (
              <th key={ head }>{ head }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={ exp.id }>
              <td>{exp.description}</td>
              <td>{exp.tag}</td>
              <td>{exp.method}</td>
              <td>{parseFloat(exp.value).toFixed(2)}</td>
              <td>{exp.exchangeRates[exp.currency].name}</td>
              <td>{parseFloat(exp.exchangeRates[exp.currency].ask).toFixed(2)}</td>
              <td>{parseFloat(exp.value * exp.exchangeRates[exp.currency].ask)}</td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  /* dispatch: PropTypes.func.isRequired, */
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
