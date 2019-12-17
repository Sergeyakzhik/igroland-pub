import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Auth from '../../api/users';
import Login from './Login';

const LoginContainer = props => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [loginChecked, setLoginChecked] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        (async function() {
            const token = localStorage.getItem('token');

            if (token) {
                try {
                    const response = await Auth.getUserInfo(token);
                    const loggedIn = response.status === 200;

                    setLoginChecked(true);
                    setLoggedIn(loggedIn);
                    !loggedIn && localStorage.removeItem('token');
                } catch (e) {
                    setLoginChecked(true);
                    setLoggedIn(false);
                }
            }
            else {
                setLoginChecked(true);
                setLoggedIn(false);
            }
        })();
    }, []);

    const handleSubmit = async (e) => {
        const { username, password } = formData;
        const { history } = props;

        e.preventDefault();

        let result;

        try {
            result = await Auth.login({ username, password });
            console.log(result);
            result = await result.json();
        } catch(e) {
            console.log(e)
        }

        if (result && result.token) {
            localStorage.setItem('token', result.token);
            history.push('/administration');
        }
    };  

    const handleChange = ({ target: { name, value } }) => setFormData({ ...formData, [name]: value });

    return (
        <Login 
            loginChecked={loginChecked}
            loggedIn={loggedIn}
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
};

export default withRouter(LoginContainer);