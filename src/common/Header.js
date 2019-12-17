import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Menu from './Menu/Menu';

import white_logo from '../resources/images/white_logo.svg';
import ic_services from '../resources/images/ic_services.svg';
import icon_twitter from '../resources/images/twitter.svg';
import icon_facebook from '../resources/images/facebook.svg';
import icon_instagram from '../resources/images/instagram.svg';
import cart from '../resources/images/cart.svg';

import './header.scss';

class Header extends PureComponent {

    state = { 
        scrolled: false
    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.onScroll);
    };

    onScroll = () => {
        const newScrolled = document.documentElement.scrollTop > 50;

        if (newScrolled !== this.state.scrolled) {
            this.setState({ scrolled: newScrolled });
        }
    };

    render() {
        const { scrolled } = this.state;
        const { location } = this.props;

        return (
            <>
                <header className="mdl-layout__header">
                    <div className="header-first-row">
                        <ul>
                            <li>
                                <a href="tel:+375(44)559-30-51">+375 (44) 559-30-51</a>
                            </li>
                            <li>
                                <a href="mailto:sergeyakzhik@gmail.com">
                                    <div className="with-icon">
                                        <img className="email-icon" src="/images/icons/icon_email.svg" alt="email" />
                                        Связяться с нами
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="right">
                            <li>
                                <Link to="/locations">
                                    <div className="with-icon">
                                        <img className="locations-icon" src={ic_services} alt="locations" />
                                        Наши магазины
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <div className="social-icons">
                                    <a href="/">
                                        <img src={icon_twitter} alt="twitter"/>
                                    </a>
                                    <a href="/">
                                        <img src={icon_facebook} alt="facebook"/>
                                    </a>
                                    <a href="/">
                                        <img src={icon_instagram} alt="insta"/>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={`mdl-layout__header-row header-second-row ${location.pathname === '/' && !scrolled && 'transparent'} ${scrolled && 'scrolled'}`} >
                        <div className="menu-section">
                            <a className="mdl-navigation__link logo-link" href="/">
                                <img className="header-logo" src={white_logo} alt="Игроленд" />
                            </a>
                            <Menu />
                            <Link className="mdl-navigation__link cart-link" to="/checkout">
                                <img className="header-logo" src={cart} alt="Корзина" />
                            </Link>
                        </div>
                    </div>
                </header>
            </>
        );
    }
};

export default withRouter(Header);