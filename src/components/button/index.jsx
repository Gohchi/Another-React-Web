import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class Button extends Component {
  render() {
    const { text, type } = this.props;
    return (
      <button
        className={type === 'A' ? style.buttonA : style.buttonB}
        type="button"
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
