// @flow
import React from 'react';
import { compose } from 'redux';
import whiskyCatalogue from '../services/whiskyCatalogue';
import cartTranslator from '../services/cartTranslator';
import Whisky from '../components/Whisky';
import type { Whisky as WhiskyType } from '../types/Whisky';

type Props = {
  whiskyCatalogueFetch: {
    pending: boolean,
    fulfilled?: boolean,
    value: {
      products: Array<WhiskyType>,
    },
  },
  addToCart: (WhiskyType) => void,
};

const Catalogue = (
  { whiskyCatalogueFetch = { pending: true, value: { products: [] } }, addToCart }: Props,
) => (
  <div>
    {whiskyCatalogueFetch.pending && <p>Loading ...</p>}
    {whiskyCatalogueFetch.fulfilled &&
      <ul>
        {whiskyCatalogueFetch.value.products.map(whisky => (
          <li key={whisky.id}><Whisky {...whisky} addToCart={() => addToCart(whisky)} /></li>
        ))}
      </ul>}
  </div>
);

const enhance = compose(whiskyCatalogue, cartTranslator);

export default enhance(Catalogue);
