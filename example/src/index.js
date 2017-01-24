import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router/BrowserRouter';

import configureStore from './app/store/configureStore';
import routes, { MatchWithSubRoutes } from './packages/app/config/routes';
import app from './packages/app';

const store = configureStore();

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <app.components.Layout>
                    <div>
                        Test
                        {routes.map((route, i) => <MatchWithSubRoutes key={i} {...route} />)}
                    </div>
                </app.components.Layout>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
);
