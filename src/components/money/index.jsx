import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function validate(e, callback) {
  e.preventDefault();
  const value = parseInt(e.target.value, 0);
  if (typeof value === 'number') {
    callback(value);
  }
}
const Money = ({ value, onChange, unit }) => (
  <div className={style.inputbox}>
    <input
      className={style.value}
      value={value}
      onChange={e => validate(e, onChange)}
    />
    <span className={style.unit}>{unit || '$'}</span>
  </div>
);

Money.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  unit: PropTypes.string,
};

export default Money;
