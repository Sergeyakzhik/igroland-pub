import fetch from 'cross-fetch';

const URL = 'http://192.168.100.4:3002/api/orders';

export default {
    
    getOrders: () => { 
        const options = {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };

        return fetch(URL, options);
    },

    getOrdersNumber: () => {
        return fetch(URL + '/count');
    },

    createOrder: data => {
        const options = {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`, 
                'Content-Type': 'application/json; charset=utf8'
            },
            body: JSON.stringify(data)
        };

        return fetch(URL + '/create-game', options);
    },

    updateOrder: async (data, id) => {
        const options = {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(URL + '/game/' + id, options);
    },

    setPublished: (id, isPublished) => {
        const options = {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ published: isPublished })
        };

        return fetch(URL + `/game/${id}/publish`, options);
    },

    changeOrdersOrder: data => {
        const options = {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(URL + `/order`, options);
    }
};