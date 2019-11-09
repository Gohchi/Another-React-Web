import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Number = ({ value, onChange }) => (
  <div className={style.inputbox}>
    <input className={style.value} value={value} onChange={e => onChange(e)} />
  </div>
);

Number.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Number;
