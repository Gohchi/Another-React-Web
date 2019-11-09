import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Money = ({ value, onChange, unit }) => (
  <div className={style.inputbox}>
    <input className={style.value} value={value} onChange={e => onChange(e)} />
    <span className={style.unit}>{unit || '$'}</span>
  </div>
);

Money.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  unit: PropTypes.string,
};

export default Money;
