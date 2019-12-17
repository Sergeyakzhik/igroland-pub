import React from 'react';
import { connect } from 'react-redux';

import { CheckoutForm } from '../../forms';
import { orderOperations, ordersOperations } from '../../store/operations';

import plus from '../../resources/images/ic_plus.svg';
import minus from '../../resources/images/ic_minus.svg';
import remove from '../../resources/images/ic_delete.svg';

const Checkout = ({ order, games, setOrder, createOrder }) => (
    <section className="checkout">
        <div className="mdl-grid mdl-grid--no-spacing container">
            <div className="mdl-cell mdl-cell--12-col">
                <h1>Корзина</h1>
                <div className="divider"></div>
            </div>
            <div className="mdl-cell mdl-cell--12-col">
                <div className="checkout-list">
                    {Object.keys(order).filter(key => order[key].amount > 0).map((key, ind) => (
                        <div key={'checkout-item-' + ind} className="checkout-item">
                            <p className="license-code">{order[key].title}</p>
                            <div className="amount-block">
                                <p>Корзина:</p>
                                <div className="minus" onClick={() => !(order[key].amount - 1 === 0 && Object.values(order).filter(item => item.amount).length === 1) && setOrder(key, order[key].amount - 1)}>
                                    <img src={minus} alt="minus"/>
                                </div>
                                <input className="total" value={order[key].amount} disabled/>
                                <div className="plus" onClick={() => setOrder(key, order[key].amount + 1)}>
                                    <img src={plus} alt="plus"/>
                                </div>
                                <div className="delete" onClick={() => setOrder(key, 0)}>
                                    <img src={remove} alt="delete"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mdl-cell mdl-cell--12-col">
                <div className="delivery-info">
                    <h3 className="centered"></h3>
                    <p className="centered">Пожалуйста, заполните все необходимые поля.</p>
                    <p className="centered fill-required">* поля, обязательные для заполнения</p>
                </div>
            </div>
            <div className="mdl-cell mdl-cell--12-col">
                <CheckoutForm onSubmit={values => createOrder({ ...values, order })} />
            </div>
        </div>
    </section>
);

const mapStateToProps = state => ({
    order: state.order.order,
    games: state.games.games,
    fetching: state.order.fetching
});

const mapDispatchToProps = {
    setOrder: orderOperations.setOrder,
    createOrder: ordersOperations.createOrder
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);