import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    requestLocations: null,
    receiveLocations: ['locations'],
    setLocations: ['data'],
    requestLocationsOrderChange: null,
    receiveLocationsOrderChange: null,
    requestSetPublished: null,
    receiveSetPublished: null
});

export default { Types, Creators };