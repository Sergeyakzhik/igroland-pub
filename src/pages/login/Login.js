import React from 'react';
import { Redirect } from 'react-router-dom';

import { LoginForm } from '../../forms';

const Login = ({ loginChecked, loggedIn, formData, onChange, onSubmit }) => (
    <>
        {(loginChecked && loggedIn) && (
            <Redirect to='/administration' />
        )}
        {(!loginChecked || !loggedIn) && (
            <div className="mdl-grid container">
                <div className="mdl-cell mdl-cell--10-col">
                    <div className="login-form-wrapper">
                        <LoginForm
                            formData={formData}
                            onChange={onChange}
                            onSubmit={onSubmit}
                        />
                    </div>
                </div>
            </div>
        )}
    </>
);

export default Login;