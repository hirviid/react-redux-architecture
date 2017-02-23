// @flow
import React from 'react';
import FormattedPrice from '@example/components/FormattedPrice';
import type { Price } from '@example/components/FormattedPrice/type';

type Props = {
  id: number,
  name: string,
  price: Price,
  addToCart: Function,
};

const Whisky = ({ id, name, price, addToCart }: Props) => (
  <div>
    <img src={`/images/catalogue/${id}.jpg`} width={200} alt={name} />
    <FormattedPrice {...price} />
    {' '}
    {name}
    <button onClick={addToCart}>Add to cart</button>
  </div>
);

export default Whisky;
