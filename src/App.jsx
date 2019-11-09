import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAmount, setTerm } from './actions';
import Form from './components/form';
import style from './main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      amount,
      term,
      minAmount,
      maxAmount,
      minTerm,
      maxTerm,
      handleAmount,
      handleTerm,
    } = this.props;
    const fee = Math.round((amount / term) * 100) / 100;
    return (
      <div className={style.main}>
        <Form
          amount={amount}
          onChangeAmount={handleAmount}
          minAmount={minAmount}
          maxAmount={maxAmount}
          term={term}
          onChangeTerm={handleTerm}
          minTerm={minTerm}
          maxTerm={maxTerm}
          fee={fee}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.data.amount,
  term: state.data.term,
  minAmount: state.data.minAmount,
  maxAmount: state.data.maxAmount,
  minTerm: state.data.minTerm,
  maxTerm: state.data.maxTerm,
});

App.propTypes = {
  amount: PropTypes.number.isRequired,
  handleAmount: PropTypes.func.isRequired,
  minAmount: PropTypes.number.isRequired,
  maxAmount: PropTypes.number.isRequired,

  term: PropTypes.number.isRequired,
  handleTerm: PropTypes.func.isRequired,
  minTerm: PropTypes.number.isRequired,
  maxTerm: PropTypes.number.isRequired,
};
export default hot(module)(
  connect(
    mapStateToProps,
    { handleAmount: setAmount, handleTerm: setTerm },
  )(App),
);
