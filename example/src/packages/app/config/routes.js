import React from 'react';
import { Route } from 'react-router-dom';
import catalogueRoutes from '../../catalogue/config/routes';

const routes = [...catalogueRoutes];

export const MatchWithSubRoutes = route => <Route {...route} />;

export default routes;
