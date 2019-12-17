import fetch from 'cross-fetch';

const URL = 'http://192.168.100.4:3002/api/games';

export default {
    
    getGames: () => { 
        const options = {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };

        return fetch(URL, options);
    },

    getPublishedGames: () => {
        return fetch(URL + '/published');
    },

    getGameById: id => { 
        const options = {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };

        return fetch(URL + `/game/${id}`, options);
    },

    getGameImage: id => { 
        const options = {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };

        return fetch(URL + `/image/${id}`, options);
    },

    getGamesNumber: () => {
        return fetch(URL + '/count');
    },

    createGame: data => {
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

    updateGame: async (data, id) => {
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

    deleteGame: id => {
        const options = {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };

        return fetch(URL + `/${id}`, options);
    },

    changeGamesOrder: data => {
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