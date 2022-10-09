import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import '../style/Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <section className="all-wallet">
        <section className="header-wallet">
          <Header />
          <WalletForm />
        </section>
        <section className="main-wallet">
          <Table />
        </section>
      </section>
    );
  }
}

export default Wallet;
