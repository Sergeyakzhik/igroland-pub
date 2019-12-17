import { locations } from '../actions';
import { Locations } from '../../api';

const requestLocationsAction = locations.Creators.requestLocations;
const receiveLocationsAction = locations.Creators.receiveLocations;
const setLocations = locations.Creators.setLocations;
const requestOrderChangeAction = locations.Creators.requestLocationsOrderChange;
const receiveOrderChangeAction = locations.Creators.receiveLocationsOrderChange;
const requestSetPublishedAction = locations.Creators.requestSetPublished;
const receiveSetPublishedAction = locations.Creators.receiveSetPublished;

const getLocations = onlyPublished => async dispatch => {
    dispatch(requestLocationsAction());
    
    try {
        let result
        
        if (onlyPublished) {
            result = await Locations.getPublishedLocations();
        } else {
            result = await Locations.getLocations();
        }

        result = await result.json();

        const data = result.map((item, ind) => ({
            ...item, 
            value: 'clinic' + (ind + 1).toString(), 
        }));

        dispatch(receiveLocationsAction(data));
    } catch (err) {
        console.log(err);
    }
};

const changeLocationsOrder = orderArr => async dispatch => {
    dispatch(requestOrderChangeAction());
    
    try {
        await Locations.changeLocationsOrder(orderArr);
    } catch (err) {
        console.log(err);
    }

    await dispatch(getLocations());
    dispatch(receiveOrderChangeAction());
};

const setPublished = (id, isPublished) => async dispatch => {
    dispatch(requestSetPublishedAction());
    
    try {
        await Locations.setPublished(id, isPublished);
    } catch (err) {
        console.log(err);
    }

    await dispatch(getLocations());
    dispatch(receiveSetPublishedAction());
};

export default {
    getLocations,
    setLocations,
    changeLocationsOrder,
    setPublished
};