import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    requestOrders: null,
    receiveOrders: ['orders'],
    requestOrderCreation: null,
    receiveOrderCreation: null,
    requestOrderUpdating: null,
    receiveOrderUpdating: null,
    setOrders: ['data'],
    requestOrdersOrderChange: null,
    receiveOrdersOrderChange: null
});

export default { Types, Creators };