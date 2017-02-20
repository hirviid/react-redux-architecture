import React from 'react';
import Match from 'react-router/Match';
import catalogueRoutes from '../../catalogue/config/routes';

const routes = [...catalogueRoutes];

export const MatchWithSubRoutes = route => ( // pass the sub-routes down to keep nesting
  <Match {...route} render={props => <route.component {...props} routes={route.routes} />} />
);

export default routes;
