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
const Number = ({ value, onChange }) => (
  <div className={style.inputbox}>
    <input
      className={style.value}
      value={value}
      onChange={e => validate(e, onChange)}
    />
  </div>
);

Number.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Number;
