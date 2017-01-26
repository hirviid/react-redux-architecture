import React, { PropTypes } from 'react';
import FormattedPrice, { pricePropType } from '../../../../../../components/FormattedPrice';

const Whisky = ({ id, name, price }) => (
  <div>
    <img src={`/images/catalogue/${id}.jpg`} width={200} alt={name} />
    <FormattedPrice {...price} />
    {' '}
    {name}
  </div>
);

Whisky.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.shape(pricePropType).isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  distillery: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  alcohol: PropTypes.number.isRequired
};

export default Whisky;
