import React, { PropTypes } from 'react';
import reduxFetch from 'react-redux-fetch';
import apiRoutes from '@example/app/api/routes';

const whiskyCatalogue = Component => {
  class WhiskyCatalogue extends React.Component {
    static propTypes = { dispatchWhiskyCatalogueGet: PropTypes.func.isRequired };

    componentWillMount() {
      this.props.dispatchWhiskyCatalogueGet();
    }

    render() {
      const { ...other } = this.props;
      return <Component {...other} />;
    }
  }

  return reduxFetch(
    props => [ { resource: 'whiskyCatalogue', request: { url: apiRoutes.whiskyCatalogue() } } ]
  )(WhiskyCatalogue);
};

export default whiskyCatalogue;
