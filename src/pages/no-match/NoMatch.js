import React from 'react';
import { Link } from 'react-router-dom';

import './no-match.scss';

const NoMatch = () => (
    <section>
        <div className="mdl-grid container">
            <div className="mdl-cell mdl-cell--10-col">
                <div className="image-wrapper no-match-image">
                    <img src="/images/icons/img_404.svg" alt="404"/>
                </div>
                <div className="divider">
                </div>
                <h3 className="centered">
                    Page Not Found
                </h3>
                <p className="centered">Looks like the page you are looking for doesn’t exist or moved.</p>
                <Link className="for-button centered-button" to="/">
                    <button className="mdl-button blue-button">
                        Go Back to Home Page
                    </button>
                </Link>
            </div>
        </div>
    </section>
);

export default NoMatch;