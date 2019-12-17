import { combineReducers } from 'redux';

import { locations, games, order, orders } from './store/reducers';

const rootReducer = combineReducers({
    locations,
    games,
    order,
    orders
});

export default rootReducer;