import React from 'react';
import { Link } from 'react-router-dom';

import './preview.scss';

const GamePreview = ({ data }) => (
    <div className="game-preview">
        <Link to={`/catalog/game/${data.id}`}>
            <div className="image-wrapper game-picture">
                <img src={data.image} alt="img"/>
            </div>
            <h3 className="centered">{data.title}</h3>
            <p className="centered">{data.price} р.</p>
            <p className="centered">{data.left === 0 ? 'Нет в наличии' : `Осталось ${data.left} шт.`}</p>
        </Link>
    </div>
);

export default GamePreview;