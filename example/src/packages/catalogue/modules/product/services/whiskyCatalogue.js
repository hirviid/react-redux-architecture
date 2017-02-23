// @flow
import React from 'react';
import reduxFetch from 'react-redux-fetch';
import apiRoutes from '@example/app/api/routes';

type Props = {
  dispatchWhiskyCatalogueGet: Function,
};

const whiskyCatalogue = (Component: ReactClass<*>): ReactClass<*> => {
  class WhiskyCatalogue extends React.Component {
    componentWillMount() {
      this.props.dispatchWhiskyCatalogueGet();
    }

    props: Props;

    render() {
      const { ...other } = this.props;
      return <Component {...other} />;
    }
  }

  return reduxFetch(() => [
    { resource: 'whiskyCatalogue', request: { url: apiRoutes.whiskyCatalogue() } },
  ])(WhiskyCatalogue);
};

export default whiskyCatalogue;
