import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css'; // not working? fix in template
import { moneyMask } from '../../tools';
import style from './style.scss';
import Button from '../button';
import Money from '../money';
import Number from '../number';

class Form extends Component {
  render() {
    const {
      amount,
      onChangeAmount,
      minAmount,
      maxAmount,
      term,
      onChangeTerm,
      minTerm,
      maxTerm,
      fee,
    } = this.props;
    return (
      <div className={style.form}>
        <p className={style.title}>Simulá tu crédito</p>

        <div className={style.section}>
          <p className={style.sectiontitle}>MONTO TOTAL</p>
          <Money value={amount} onChange={onChangeAmount} />
        </div>
        <Slider
          className={style.slider}
          value={amount}
          min={minAmount}
          max={maxAmount}
          step={1}
          onChange={onChangeAmount}
        />
        <div className={style.sliderfooter}>
          <p>$ {moneyMask(minAmount)}</p>
          <p>$ {moneyMask(maxAmount)}</p>
        </div>

        <div className={style.section}>
          <p className={style.sectiontitle}>PLAZO</p>
          <Number value={term} onChange={onChangeTerm} />
        </div>
        <Slider
          className={style.slider}
          value={term}
          min={minTerm}
          max={maxTerm}
          step={3}
          onChange={onChangeTerm}
        />
        <div className={style.sliderfooter}>
          <p>{minTerm}</p>
          <p>{maxTerm}</p>
        </div>

        <div className={style.sectionresults}>
          <p>CUOTA FIJA POR MES</p>
          <p>$ {moneyMask(fee)}</p>
        </div>

        <div className={style.section}>
          <Button text="OBTENÉ CRÉDITO" type="A" />
          <Button text="VER DETALLE DE CUOTAS" type="B" />
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  amount: PropTypes.number.isRequired,
  onChangeAmount: PropTypes.func.isRequired,
  minAmount: PropTypes.number.isRequired,
  maxAmount: PropTypes.number.isRequired,

  term: PropTypes.number.isRequired,
  onChangeTerm: PropTypes.func.isRequired,
  minTerm: PropTypes.number.isRequired,
  maxTerm: PropTypes.number.isRequired,

  fee: PropTypes.number.isRequired,
};

export default Form;
