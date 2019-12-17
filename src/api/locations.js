import fetch from 'cross-fetch';

const URL = 'http://192.168.100.4:3002/api/locations';

export default {
    
    getLocations: () => { 
        const options = {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        return fetch(URL, options);
    },

    getPublishedLocations: () => {
        return fetch(URL + '/published');
    },

    getLocationById: id => {
        return fetch(URL + `/location/${id}`);
    },

    getLocationsNumber: () => {
        return fetch(URL + '/count');
    },

    createLocation: data => {
        const options = {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`, 
                'Content-Type': 'application/json; charset=utf8'
            },
            body: JSON.stringify(data)
        };

        return fetch(URL + '/create-location', options);
    },

    updateLocation: (data, id) => {
        const options = {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(URL + `/location/${id}`, options);
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

        return fetch(URL + `/location/${id}/publish`, options);
    },

    deleteLocation: id => {
        const options = {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };

        return fetch(URL + `/${id}`, options);
    },

    changeLocationsOrder: data => {
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