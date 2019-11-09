import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css'; // not working? fix in template
import style from './style.scss';
import Button from '../button';
import Money from '../money';
import Number from '../number';

const Form = ({ amount, onChangeAmount, term, onChangeTerm }) => (
  <div className={style.form}>
    <p className={style.title}>Simulá tu crédito</p>

    <div className={style.section}>
      <p className={style.sectiontitle}>MONTO TOTAL</p>
      <Money value={amount} onChange={onChangeAmount} />
    </div>
    <Slider
      className={style.slider}
      value={amount}
      min={5000}
      max={50000}
      step={1}
      onChange={onChangeAmount}
    />
    <div className={style.sliderfooter}>
      <p>$ 5.000</p>
      <p>$ 50.000</p>
    </div>

    <div className={style.section}>
      <p className={style.sectiontitle}>PLAZO</p>
      <Number value={term} onChange={onChangeTerm} />
    </div>
    <Slider
      className={style.slider}
      value={term}
      min={3}
      max={24}
      step={3}
      onChange={onChangeTerm}
    />
    <div className={style.sliderfooter}>
      <p>3</p>
      <p>24</p>
    </div>

    <div className={style.sectionresults}>
      <p>CUOTA FIJA POR MES</p>
      <p>$ 2,412.91</p>
    </div>

    <div className={style.section}>
      <Button text="OBTENÉ CRÉDITO" type="A" />
      <Button text="VER DETALLE DE CUOTAS" type="B" />
    </div>
  </div>
);

Form.propTypes = {
  amount: PropTypes.number.isRequired,
  onChangeAmount: PropTypes.func.isRequired,
  term: PropTypes.number.isRequired,
  onChangeTerm: PropTypes.func.isRequired,
};
export default Form;
