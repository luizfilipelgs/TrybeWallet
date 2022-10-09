import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItemExpAction, ExpenseSumAction } from '../redux/actions';
import '../style/Table.css';

class Table extends Component {
  clickDelet = (event) => {
    const { expenses, dispatch } = this.props;
    const idbtn = event.target.id;
    console.log(idbtn, 'id btn');
    const expenseAtt = expenses.filter((exp) => Number(exp.id) !== Number(idbtn));
    console.log(expenseAtt);
    dispatch(deleteItemExpAction({ expenses: expenseAtt }));
    dispatch(ExpenseSumAction({ expenses: expenseAtt }));
  };

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
              <td>{exp.currency}</td>
              <td>{parseFloat(exp.exchangeRates[exp.currency].ask).toFixed(2)}</td>
              <td>
                {parseFloat(
                  exp.value * exp.exchangeRates[exp.currency].ask,
                )
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  className="button is-warning is-small"
                  data-testid="edit-btn"
                  id={ exp.id }
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="button is-danger is-small"
                  id={ exp.id }
                  data-testid="delete-btn"
                  onClick={ this.clickDelet }
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
