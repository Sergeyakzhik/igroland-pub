import React from 'react';
import { Route } from 'react-router-dom';

import { withAuth } from '../HOCs';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest} 
        component={withAuth(Component)}
    />
);

export default PrivateRoute;


