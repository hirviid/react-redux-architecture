import React from 'react';
import pricePropType from './pricePropType';
import formatMoney from './formatMoney';

const currencySymbol = { EUR: '€' };

const FormattedPrice = ({ value, currency }) => (
  <span>
    {currencySymbol[currency]}{' '}{formatMoney(value, 2, ',', ' ')}
  </span>
);

FormattedPrice.propTypes = pricePropType;

export default FormattedPrice;
