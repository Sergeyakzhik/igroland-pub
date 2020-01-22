import fetch from 'cross-fetch';

import config from './config';

const URL = config.PREFIX + 'users';

export default {
    
    getUserInfo: token => {
        const options = {
            headers: {
                'authorization': `Bearer ${token}`
            }
        };

        return fetch(URL + '/info', options);
    },

    login: data => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(URL + '/login', options);
    }
};