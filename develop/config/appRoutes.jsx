import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from '../containers/App.jsx';


export default (
    <Route path="/" component={App}>
        <IndexRedirect to="main" />

        <Route path="main" component={<div>main</div>} />
    </Route>
);
