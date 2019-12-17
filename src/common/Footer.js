import React from 'react';
import { Link } from 'react-router-dom';

import blue_logo from '../resources/images/blue_logo.svg';

import './footer.scss';

const Footer = () => (
    <footer>
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--3-col middle-section logo-section">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col middle-section">
                        <a href="/"><img className="footer-logo" src={blue_logo} alt="Игроленд" /></a>
                    </div>
                </div>
            </div>
            <div className="mdl-cell mdl-cell--3-col middle-section contacts">
                
            </div>
            <div className="mdl-cell mdl-cell--2-col test-links">

            </div>
            <div className="mdl-cell mdl-cell--4-col privacy-links">
                <div className="mdl-grid">
                    <div className="mdl-cell--4-col">
                        <b>
                            Свяжитесь с нами:
                        </b>
                    </div>
                    <div className="mdl-cell--8-col">
                        <p>
                            <a href="tel:+1 (973) 529-4223">+375 (44) 559-30-51</a><br />
                            <a href="mailto:sergeyakzhik@gmail.com">sergeyakzhik@gmail.com</a>
                        </p>
                        <p>
                            пр-т газ. Звезда, 3<br />
                            Минск, РБ
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;