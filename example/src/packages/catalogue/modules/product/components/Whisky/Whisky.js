import React, { PropTypes } from 'react';
import FormattedPrice from '@example/components/FormattedPrice';

const Whisky = ({ id, name, price, addToCart }) => (
  <div>
    <img src={`/images/catalogue/${id}.jpg`} width={200} alt={name} />
    <FormattedPrice {...price} />
    {' '}
    {name}
    <button onClick={addToCart}>Add to cart</button>
  </div>
);

Whisky.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.object.isRequired,
  // description: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
  // distillery: PropTypes.string.isRequired,
  // content: PropTypes.string.isRequired,
  // region: PropTypes.string.isRequired,
  // country: PropTypes.string.isRequired,
  // alcohol: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Whisky;
