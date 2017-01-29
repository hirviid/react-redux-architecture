import React from 'react';
import { compose } from 'redux';
import whiskyCatalogue from '../services/whiskyCatalogue';
import cartTranslator from '../services/cartTranslator';
import Whisky from '../components/Whisky';

const Catalogue = ({ whiskyCatalogueFetch, addToCart }) => (
  <div>
    {whiskyCatalogueFetch.pending && <p>Loading ...</p>}
    {whiskyCatalogueFetch.fulfilled && (
      <ul>
        {whiskyCatalogueFetch.value.products.map(whisky =>
          <li key={whisky.id}><Whisky {...whisky} addToCart={() => addToCart(whisky)} /></li>)
        }
      </ul>
    )}
  </div>
);

Catalogue.propTypes = { whiskyCatalogueFetch: React.PropTypes.object, addToCart: React.PropTypes.func.isRequired };
Catalogue.defaultProps = { whiskyCatalogueFetch: { pending: true } };

const enhance = compose(
  whiskyCatalogue,
  cartTranslator,
);

export default enhance(Catalogue);
