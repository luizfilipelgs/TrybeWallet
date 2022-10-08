import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, total } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        {/* <img
          src="https://img2.gratispng.com/20180616/abs/kisspng-computer-icons-wallet-icon-design-handbag-savings-5b25a3a97e91a3.6879025515291933855184.jpg"
          alt="logo carteira"
          id="img-carteira"
        /> */}
        <div>
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
