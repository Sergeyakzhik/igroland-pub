import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../api/users';

const withAuth = WrappedComponent => (
    () => {
        const [tokenChecked, setTokenChecked] = useState(false);
        const [authenticated, setAuthenticated] = useState(false);

        useEffect(() => {
            (async function () {
                const token = localStorage.getItem('token');

                if (token) {
                    try {
                        const response = await Auth.getUserInfo(token);
                        const isAuthenticated = response.status === 200;

                        setAuthenticated(isAuthenticated);
                        setTokenChecked(true);
                        !isAuthenticated && localStorage.removeItem('token');
                    } catch (e) {
                        setAuthenticated(false);
                        setTokenChecked(true);
                    }
                }
                else {
                    setAuthenticated(false);
                    setTokenChecked(true);
                }
            })();
        }, []);

        return (
            !tokenChecked ? 
                <></> : 
                (authenticated ? 
                    <WrappedComponent /> : 
                    <Redirect to='/administration/login' />
                )
        );
    }
);

export default withAuth;