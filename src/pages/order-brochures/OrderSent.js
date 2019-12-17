import React from 'react';
import { Link } from 'react-router-dom';

import ic_sent from '../../resources/images/ic_sent.svg';

const OrderSent = () => (
    <div className="mdl-grid mdl-grid--no-spacing container">
        <div className="mdl-cell mdl-cell--12-col">
            <div className="order-sent-block">
                <div className="image-wrapper">
                    <img src={ic_sent} alt="Order Sent"/>
                </div>
                <h3 className="centered">Your order has been successfully sent!</h3>
                <Link to="/">
                    <button className="mdl-button mdl-js-button blue-button centered-button" type="submit">
                        Go to Home Page
                    </button>
                </Link>
            </div>
        </div>
    </div>
);

export default OrderSent;