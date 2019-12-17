import React, { useState, useEffect } from 'react';

import Checkout from '../checkout/Checkout';
import OrderSent from './OrderSent';
import brochures from './brochures_arr';
import { Brochures as BrochuresAPI } from '../../api';

import icon_brochure from '../../resources/images/icon_brochure.svg';
import plus from '../../resources/images/ic_plus.svg';
import minus from '../../resources/images/ic_minus.svg';

import './brochures.scss';

const brochureNames = {
    pgta: 'PGT-A',
    pgtsr: 'PGT-SR',
    pgtm: 'PGT-M',
    lifeview: 'LifeView (PGT-P)'
};

const initialValues = {
    pgta: 0,
    pgtsr: 0,
    pgtm: 0,
    lifeview: 0
};

const Brochures = () => {
    const [amount, setAmount] = useState({ ...initialValues });
    const [orderList, setOrderList] = useState({ ...initialValues });
    const [hasSelected, setHasSelected] = useState(false);
    const [isCheckout, setIsCheckout] = useState(false);
    const [orderSent, setOrderSent] = useState(false);

    useEffect(() => {
        if (Object.values(orderList).filter(item => item > 0).length > 0) {
            !hasSelected && setHasSelected(true);
        } else {
            hasSelected && setHasSelected(false);
        }
    }, [hasSelected, orderList]);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    }, [isCheckout, orderSent]);

    const handleChange = (action, key) => {
        if (action === 'plus' && amount[key] + 25 <= 100) {
            setAmount({
                ...amount,
                [key]: amount[key] + 25
            });
        } 

        if (action === 'minus' && amount[key] - 25 >= 0) {
            setAmount({
                ...amount,
                [key]: amount[key] - 25
            });
        }
    };

    const addToOrder = key => {
        setOrderList({
            ...orderList,
            [key]: amount[key]
        });
    };

    const setOrder = (key, value) => {
        setAmount({
            ...amount,
            [key]: value
        });
        setOrderList({
            ...orderList,
            [key]: value
        });
    };

    const handleClear = () => {
        setAmount({ ...initialValues });
        setOrderList({ ...initialValues });
    };

    const handleSubmit = async ({ country, region, city, ...values }) => {
        try {
            const result = await BrochuresAPI.sendOrder({
                ...values,
                country: country.value,
                region: region.value,
                city: city.value,
                order: orderList
            });

            if (result.status === 200) {
                setOrderSent(true);
            } else {
                throw new Error('Error while sending order');
            }
        } catch (err) {
            console.log(err);
        }
    };  

    return (
        <section className={`brochures ${orderSent ? 'order-sent' : ''}`}>
            {!isCheckout ? (
                <div className="mdl-grid mdl-grid--no-spacing container">
                    <div className="mdl-cell mdl-cell--12-col">
                        <h1>Order Brochures</h1>
                        <div className="divider"></div>
                        <div className="image-wrapper">
                            <img src={icon_brochure} alt="Brochures"/>
                        </div>
                        <p className="centered">Order our patient brochures for your clinics at no charge.</p>
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                        {hasSelected ? (
                            <div className="order-list">
                                <p className="centered">
                                    Your Order List:&nbsp;
                                    <b>
                                        {Object.keys(orderList).map(key => {
                                            if (orderList[key] > 0) {
                                                return `«${brochureNames[key]}» (${orderList[key]})`
                                            }
                                        }).filter(item => item).join(', ')}
                                    </b>
                                </p>
                                <div className="button-group">
                                    <button className="mdl-button mdl-js-button outlined-button" onClick={handleClear}>
                                        Clear
                                    </button>
                                    <button className="mdl-button mdl-js-button blue-button" onClick={() => setIsCheckout(true)}>
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="order-list">
                                <p className="centered no-brochures">You have no brochures in your Order List</p>
                            </div>
                        )}
                        <div className="brochures-container">
                            {brochures.map((item, ind) => (
                                <div key={'brochure-' + ind} className="brochure">
                                    <div className="image-wrapper">
                                        <img src={item.image} alt={item.name}/>
                                    </div>
                                    <h3 className="centered">{item.name}</h3>
                                    <div className="divider small-divider"></div>
                                    <a href={item.link} target="_blank" className="blue-link with-icon">
                                        Check e-Brochure 
                                    </a>
                                    <div className="amount-block">
                                        <div className="minus" onClick={() => handleChange('minus', item.id)}>
                                            <img src={minus} alt="minus"/>
                                        </div>
                                        <input className="total" value={amount[item.id]} disabled/>
                                        <div className="plus" onClick={() => handleChange('plus', item.id)}>
                                            <img src={plus} alt="plus"/>
                                        </div>
                                    </div>
                                    {orderList[item.id] > 0 ? (
                                        orderList[item.id] === amount[item.id] ? (
                                            <button className="mdl-button mdl-js-button purple-button" onClick={() => setIsCheckout(true)}>
                                                Checkout
                                            </button>
                                        ) : (
                                            <button className="mdl-button mdl-js-button green-button" onClick={() => addToOrder(item.id)}>
                                                Change Order
                                            </button>
                                        )
                                    ) : (
                                            <button className="mdl-button mdl-js-button blue-button" onClick={() => addToOrder(item.id)}>
                                            Add to Order
                                        </button>
                                    )}           
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : orderSent ? (
                <OrderSent />
            ) : (
                <Checkout 
                    orderList={orderList}
                    setOrder={setOrder}
                    setIsCheckout={setIsCheckout}
                    onSubmit={handleSubmit}
                />
            )}
        </section>
    );
};

export default Brochures;