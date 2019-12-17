import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import logo from '../resources/images/blue_logo.svg';
import games from '../resources/images/icon_documents.svg';
import locations from '../resources/images/ic_locations.svg';
import orders from '../resources/images/icon_news.svg';

const AdminHeader = ({ location }) => (
    <div>
        <header className="mdl-layout__header admin-header">
            <div className="mdl-layout__header-row">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--3-col mdl-cell--hide-phone">
                        <a className="mdl-navigation__link" href="/">
                            <img className="header-logo" src={logo} alt="Igroland"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <div className="mdl-layout__drawer admin-drawer is-visible">
            <nav className="mdl-navigation">
                <Link 
                    to="/administration/orders" 
                    className={`mdl-navigation__link ${location.pathname.split('/')[2] === "orders" && "current"}`}
                >
                    <img src={orders} alt="Заказы"/>
                    Заказы
                </Link>
                <Link 
                    to="/administration/games" 
                    className={`mdl-navigation__link ${location.pathname.split('/')[2] === "games" && "current"}`}
                >
                    <img src={games} alt="Игры"/>
                    Игры
                </Link>
                <Link 
                    to="/administration/locations" 
                    className={`mdl-navigation__link ${location.pathname.split('/')[2] === "locations" && "current"}`}
                >
                    <img src={locations} alt="Магазины"/>
                    Магазины
                </Link>                
            </nav>
        </div>
    </div>
);

export default withRouter(AdminHeader);