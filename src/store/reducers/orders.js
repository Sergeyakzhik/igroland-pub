import { createReducer } from 'reduxsauce';
import { orders } from '../actions';

const INITIAL_STATE = {
    orders: [],
    fetching: null
};

const requestOrders = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'data'
});

const receiveOrders = (state = INITIAL_STATE, action) => ({
    ...state, 
    fetching: null,
    orders: action.orders
});

const requestOrderCreation = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'new'
});

const receiveOrderCreation = (state = INITIAL_STATE) => ({
    ...state, 
    fetching: null
});

const requestOrderUpdating = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'update'
});

const receiveOrderUpdating = (state = INITIAL_STATE) => ({
    ...state, 
    fetching: null
});

const requestOrdersOrderChange = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'order'
});

const receiveOrdersOrderChange = (state = INITIAL_STATE) => ({
    ...state, 
    fetching: null
});

const setOrders = (state = INITIAL_STATE, action) => ({
    ...state, 
    orders: action.data
});

const HANDLERS = {
	[orders.Types.REQUEST_ORDERS]: requestOrders,
    [orders.Types.RECEIVE_ORDERS]: receiveOrders,
    [orders.Types.REQUEST_ORDER_CREATION]: requestOrderCreation,
    [orders.Types.RECEIVE_ORDER_CREATION]: receiveOrderCreation,
    [orders.Types.REQUEST_ORDER_UPDATING]: requestOrderUpdating,
    [orders.Types.RECEIVE_ORDER_UPDATING]: receiveOrderUpdating,
    [orders.Types.REQUEST_ORDERS_ORDER_CHANGE]: requestOrdersOrderChange,
    [orders.Types.RECEIVE_ORDERS_ORDER_CHANGE]: receiveOrdersOrderChange,
    [orders.Types.SET_ORDERS]: setOrders
};

export default createReducer(INITIAL_STATE, HANDLERS);