import fetch from 'cross-fetch';

import config from './config';

const URL = config.PREFIX + 'brochures';

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