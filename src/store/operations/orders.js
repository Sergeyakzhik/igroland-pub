import { orders } from '../actions';
import { Orders } from '../../api';

const requestOrdersAction = orders.Creators.requestOrders;
const receiveOrdersAction = orders.Creators.receiveOrders;
const requestOrderCreationAction = orders.Creators.requestOrderCreation;
const receiveOrderCreationAction = orders.Creators.receiveOrderCreation;
const requestOrderUpdatingAction = orders.Creators.requestOrderUpdating;
const receiveOrderUpdatingAction = orders.Creators.receiveOrderUpdating;
const requestOrdersOrderChangeAction = orders.Creators.requestOrdersOrderChange;
const receiveOrdersOrderChangeAction = orders.Creators.receiveOrdersOrderChange;
const setOrders = orders.Creators.setOrders;

const getOrders = () => async dispatch => {
    dispatch(requestOrdersAction());
    
    try {
        let result = await Orders.getOrders();

        dispatch(receiveOrdersAction(result));
    } catch (err) {
        console.log(err);
    }
};

const createOrder = values => async dispatch => {
    dispatch(requestOrderCreationAction());
    
    try {
        let { ...data } = values;

        console.log(data)

        // const OrdersNumberResponse = await Orders.getOrdersNumber(); 

        // if (OrdersNumberResponse.status === 200) {
        //     const OrdersNumber = await OrdersNumberResponse.json();
            
        //     data.order = OrdersNumber;

        //     const result = await Orders.createOrder(data);

        //     if (result.status === 200) {
        //         dispatch(receiveOrderCreationAction());
        //     }
        // }
    } catch (err) {
        console.log(err);
    }
};

const updateOrder = (values, id) => async dispatch => {
    dispatch(requestOrderUpdatingAction());
    
    try {
        let { ...data } = values;

        const result = await Orders.updateOrder(data, id);
        
        if (result.status === 200) {
            dispatch(receiveOrderUpdatingAction());
        }
    } catch (err) {
        console.log(err);
    }
};

const changeOrdersOrder = orderArr => async dispatch => {
    dispatch(requestOrdersOrderChangeAction());
    
    try {
        await Orders.changeOrdersOrder(orderArr);
    } catch (err) {
        console.log(err);
    }

    await dispatch(getOrders());
    dispatch(receiveOrdersOrderChangeAction());
};

export default {
    getOrders,
    createOrder,
    updateOrder,
    changeOrdersOrder,
    setOrders
};