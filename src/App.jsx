import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Form from './components/form';
import style from './main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 19500,
      term: 16,
    };
    this.handleAmount = this.handleAmount.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
  }

  handleAmount(value) {
    this.setState({
      amount: value > 50000 ? 50000 : value,
    });
  }

  handleTerm(value) {
    this.setState({
      term: value,
    });
  }

  render() {
    const { amount, term } = this.state;
    const fee = Math.round((amount / term) * 100) / 100;
    return (
      <div className={style.main}>
        <Form
          amount={amount}
          onChangeAmount={this.handleAmount}
          minAmount={5000}
          maxAmount={50000}
          term={term}
          onChangeTerm={this.handleTerm}
          minTerm={3}
          maxTerm={24}
          fee={fee}
        />
      </div>
    );
  }
}

export default hot(module)(App);
