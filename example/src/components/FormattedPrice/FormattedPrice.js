// @flow
import React from 'react';
import formatMoney from './formatMoney';
import type { Price } from './type';

const currencySymbol = { EUR: '€' };

const FormattedPrice = (props: Price) => (
  <span>
    {currencySymbol[props.currency]}{' '}{formatMoney(props.value, 2, ',', ' ')}
  </span>
);

export default FormattedPrice;
