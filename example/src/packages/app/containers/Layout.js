import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import routes from '../config/routes';

const Layout = props => (
  <Router>
    <div>
      <Header />
      <main>
        {routes.map(route => <Route key={route.path} {...route} />)}
      </main>
    </div>
  </Router>
);

export default Layout;
