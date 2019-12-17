import React from 'react';
import { Link } from 'react-router-dom';

import './menu.scss';

const Menu = () => (
    <nav className="mdl-navigation">
        <p className="mdl-navigation__link direct"><Link to="/catalog">Каталог</Link></p>
        <p className="mdl-navigation__link direct"><a href="/#new-games">Новинки</a></p>
        <p className="mdl-navigation__link direct"><a href="/#about-us">О магазине</a></p>
        <p className="mdl-navigation__link direct"><a href="/#contact-us">Связаться с нами</a></p>
    </nav>
);

export default Menu;