import React from 'react';

import './forms.scss';

const LoginForm = ({ formData: { username, password }, onChange, onSubmit }) => (
    <form className="admin-form login-form">
        <div className="mdl-grid mdl-grid--no-spacing">
            <div className="mdl-cell mdl-cell--12-col">
                <label htmlFor="username">Username</label>
                <input 
                    className="mdl-textfield__input browser-default" 
                    placeholder="Имя Пользователя" 
                    value={username}
                    type="text" 
                    name="username" 
                    id="username"
                    onChange={onChange}
                />
            </div>
            <div className="mdl-cell mdl-cell--12-col">
                <label htmlFor="password">Password</label>
                <input 
                    className="mdl-textfield__input browser-default" 
                    placeholder="Пароль" 
                    value={password}
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={onChange}
                />
            </div>
            <div className="mdl-cell mdl-cell--12-col">
                <button className="mdl-button mdl-js-button blue-button" type="button" onClick={onSubmit}>
                    Войти
                </button>
            </div>
        </div>
    </form>
);

export default LoginForm;