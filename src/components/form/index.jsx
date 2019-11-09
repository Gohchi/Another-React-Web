import React from 'react';
import style from './style.scss';
import Button from '../button';
import Money from '../money';
import Number from '../number';

const Form = () => (
  <div className={style.form}>
    <p className={style.title}>Simulá tu crédito</p>
    <div className={style.section}>
      <p className={style.sectiontitle}>MONTO TOTAL</p>
      <Money value={19500} onChange={() => {}} />
    </div>
    <div className={style.section}>
      <p className={style.sectiontitle}>PLAZO</p>
      <Number value={16} onChange={() => {}} />
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

export default Form;
