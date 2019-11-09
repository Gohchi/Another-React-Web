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

  handleAmount(onValue) {
    this.setState({
      amount: onValue,
    });
  }

  handleTerm(value) {
    this.setState({
      term: value,
    });
  }

  render() {
    const { amount, term } = this.state;
    return (
      <div className={style.main}>
        <Form
          amount={amount}
          onChangeAmount={this.handleAmount}
          term={term}
          onChangeTerm={this.handleTerm}
        />
      </div>
    );
  }
}

export default hot(module)(App);
