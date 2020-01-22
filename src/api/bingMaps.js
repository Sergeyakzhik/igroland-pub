import fetch from 'cross-fetch';

const baseURL = 'https://dev.virtualearth.net/REST/v1/Locations';
const apiKey = null;  

export default {
    
    getLocations: address => {
        const options = {
            'Content-Type': 'application/json'
        }

        return fetch(`${baseURL}?q=${address}&incl=queryParse&key=${apiKey}`, options);
    }
};
