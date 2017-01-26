import React from 'react';
import Header from '../components/Header';

const Layout = props => (
  <div>
    <Header />
    <main {...props} />
  </div>
);

export default Layout;
