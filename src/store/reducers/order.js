import { createReducer } from 'reduxsauce';
import { order } from '../actions';

const INITIAL_STATE = {
    order: {},
    fetching: null
};

const setOrder = (state = INITIAL_STATE, action) => ({
    ...state, 
    order: {
        ...state.order,
        [action.id]: action.data
    }
});

const HANDLERS = {
    [order.Types.SET_ORDER]: setOrder
};

export default createReducer(INITIAL_STATE, HANDLERS);