import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../style/Header.css';
import moedas from '../imgs/moedas.svg';
import profile from '../imgs/profile.svg';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <header>
        <div className="flex">
          <img src={ profile } alt="profile" />
          <span data-testid="email-field">{ email }</span>
        </div>
        <h1 className="title-wallet title is-1">Wallet</h1>
        <div className="flex">
          <img src={ moedas } alt="" />
          <span data-testid="total-field">
            { total.toFixed(2) }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  total: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
