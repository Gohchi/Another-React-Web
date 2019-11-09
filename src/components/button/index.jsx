import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Button = ({ text, type }) => (
  <button
    className={type === 'A' ? style.buttonA : style.buttonB}
    type="button"
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
