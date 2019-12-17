import fetch from 'cross-fetch';

const URL = 'http://192.168.100.4:3002/api/brochures/';

export default {
    sendOrder: data => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(URL, options);
    }
};