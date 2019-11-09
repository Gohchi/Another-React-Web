import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import { moneyMask } from '../../tools';

function validate(e, callback) {
  e.preventDefault();

  const value = parseInt(e.target.value.replace(/,/g, ''), 0); // remove commas
  if (typeof value === 'number') {
    callback(value);
  }
}
class Money extends Component {
  render() {
    const { value, onChange, unit } = this.props;
    return (
      <div className={style.inputbox}>
        <input
          className={style.value}
          value={moneyMask(value)}
          onChange={e => validate(e, onChange)}
        />
        <span className={style.unit}>{unit || '$'}</span>
      </div>
    );
  }
}

Money.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  unit: PropTypes.string,
};

export default Money;
