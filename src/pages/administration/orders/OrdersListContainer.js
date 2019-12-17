import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import OrdersList from './OrdersList';
import { ordersOperations } from '../../../store/operations';

const OrdersListContainer = ({ orders, fetching, getOrders, setOrders, updateOrder, deleteOrder, changeOrdersOrder }) => {

    const [isUpdating, setUpdating] = useState(null);

    useEffect(() => {
        getOrders();
    }, [getOrders]);

    const handleDragEnd = result => {
        const list = [ ...orders ];
        const startIndex = result.source.index;
        const endIndex = result.destination.index; 
        const [removed] = list.splice(startIndex, 1);

        list.splice(endIndex, 0, removed);

        setOrders(list);
        changeOrdersOrder(list.map(item => item.id));
    };

    const handlePublishedChange = async (id, published, e) => {
        e.stopPropagation();
        setUpdating(id);
        await updateOrder({ published }, id);
        await getOrders();
        setUpdating(null);
    };

    return (
        <OrdersList 
            data={orders} 
            fetching={fetching}
            isUpdating={isUpdating}
            onDragEnd={handleDragEnd}
            onPublishedChange={handlePublishedChange}
        />
    );
};

const mapStateToProps = state => ({
    orders: state.orders.orders,
    fetching: state.orders.fetching
});

const mapDispatchToProps = {
    getOrders: ordersOperations.getOrders,
    updateOrder: ordersOperations.updateOrder,
    setOrders: ordersOperations.setOrders,
    changeOrdersOrder: ordersOperations.changeOrdersOrder
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrdersListContainer);
