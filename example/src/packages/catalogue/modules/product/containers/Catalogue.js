import React from 'react';
import whiskyCatalogue from '../services/whiskyCatalogue';
import Whisky from '../components/Whisky';

const Catalogue = ({ whiskyCatalogueFetch }) => (
  <div>
    {whiskyCatalogueFetch.pending && <p>Loading ...</p>}
    {whiskyCatalogueFetch.fulfilled && (
          <ul>
            {whiskyCatalogueFetch.value.products.map(whisky => <li key={whisky.id}><Whisky {...whisky} /></li>)}
          </ul>
        )}
  </div>
);

Catalogue.propTypes = { whiskyCatalogueFetch: React.PropTypes.object };
Catalogue.defaultProps = { whiskyCatalogueFetch: { pending: true } };

export default whiskyCatalogue(Catalogue)
