import fetch from 'cross-fetch';

const URL = 'http://192.168.100.4:3002/api/users';

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