import { createReducer } from 'reduxsauce';
import { locations } from '../actions';

const INITIAL_STATE = {
    locations: [],
    fetching: null
};

const requestLocations = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'data'
});

const receiveLocations = (state = INITIAL_STATE, action) => ({
    ...state, 
    fetching: null,
    locations: action.locations
});

const setLocations = (state = INITIAL_STATE, action) => ({
    ...state, 
    locations: action.data
});

const requestLocationsOrderChange = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'order'
});

const receiveLocationsOrderChange = (state = INITIAL_STATE) => ({
    ...state, 
    fetching: null
});

const requestSetPublished = (state = INITIAL_STATE) => ({
    ...state, 
    fetching: 'publish'
});

const receiveSetPublished = (state = INITIAL_STATE) => ({
    ...state, 
    fetching: null
});

const HANDLERS = {
	[locations.Types.REQUEST_LOCATIONS]: requestLocations,
    [locations.Types.RECEIVE_LOCATIONS]: receiveLocations,
    [locations.Types.SET_LOCATIONS]: setLocations,
    [locations.Types.REQUEST_LOCATIONS_ORDER_CHANGE]: requestLocationsOrderChange,
    [locations.Types.RECEIVE_LOCATIONS_ORDER_CHANGE]: receiveLocationsOrderChange,
    [locations.Types.REQUEST_SET_PUBLISHED]: requestSetPublished,
    [locations.Types.RECEIVE_SET_PUBLISHED]: receiveSetPublished
};

export default createReducer(INITIAL_STATE, HANDLERS);