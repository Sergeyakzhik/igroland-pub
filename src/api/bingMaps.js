import fetch from 'cross-fetch';

const baseURL = 'https://dev.virtualearth.net/REST/v1/Locations';
const apiKey = 'ApirBVkRI4uVvfBuH1jNVVGr0Nh9mCPTh_MbjIOhX-SxFoBdSap9WvA7nsGgOgqH';

export default {
    
    getLocations: address => {
        const options = {
            'Content-Type': 'application/json'
        }

        return fetch(`${baseURL}?q=${address}&incl=queryParse&key=${apiKey}`, options);
    }
};
