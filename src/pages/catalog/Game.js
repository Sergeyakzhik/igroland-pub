import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { gamesOperations, orderOperations } from '../../store/operations';

import plus from '../../resources/images/ic_plus.svg';
import minus from '../../resources/images/ic_minus.svg';

import './game.scss';

const mapCategory = {
    family: 'Для всей семьи',
    party: 'Для вечеринок',
    children: 'Для детей',
    brain: 'Головоломки',
    cards: 'Покер и карты',
    jigsaw: 'Пазлы'
};
  
const Game = ({ game, match, order, getGame, clearGame, setOrder, ...props }) => {
    const [amount, setAmount] = useState(0);
    const [isCheckout, setIsCheckout] = useState(false);

    useEffect(() => {
        getGame(match.params.id);

        return () => {
            clearGame();
        };
    }, []);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    }, [isCheckout]);

    const handleChange = action => {
        if (action === 'plus' && amount + 1 <= game.left) {
            setAmount(amount + 1);
        } 

        if (action === 'minus' && amount - 1 >= 0) {
            setAmount(amount - 1);
        }
    };

    const handleSubmit = async ({ country, region, city, ...values }) => {
    };  

    return (
        <section className="game">
            <div className="mdl-grid mdl-grid--no-spacing container news-items">
                <div className="mdl-cell mdl-cell--12-col">
                    <div className="header-container">
                        <Link to="/catalog">
                            <i className="material-icons arrow-back">arrow_right_alt</i>
                            <button className="mdl-button mdl-js-button blue-button" type="button">
                                Назад
                            </button>
                        </Link>
                    </div>
                    <div className="game">
                        <h2>{game.title}</h2>
                        <div className="game-info">
                            <div className="image-wrapper game-image">
                                <img src={game.image && game.image.preview} alt="Post" />
                            </div>
                            <div>
                                <h3>Цена: {game.price} р.</h3>
                                <p>Категория: {mapCategory[game.category]}</p>
                                <p>Количество игроков: {game.players}</p>
                                <p>Время игры: {game.time}</p>
                                <p>Производитель: {game.manufacturer}</p>
                                <div className="amount-block">
                                    <div className="minus" onClick={() => handleChange('minus')}>
                                        <img src={minus} alt="minus"/>
                                    </div>
                                    <input className="total" value={amount} disabled/>
                                    <div className="plus" onClick={() => handleChange('plus')}>
                                        <img src={plus} alt="plus"/>
                                    </div>
                                </div>
                                {order[game.id] && order[game.id].amount > 0 ? (
                                    order[game.id].amount === amount ? (
                                        <Link to="/checkout">
                                            <button className="mdl-button mdl-js-button purple-button" onClick={() => setIsCheckout(true)}>
                                                Перейти в корзину
                                            </button>
                                        </Link>
                                    ) : (
                                        <button className="mdl-button mdl-js-button green-button" onClick={() => setOrder(game.id, { amount, price: game.price * amount, title: game.title })}>
                                            Изменить количество
                                        </button>
                                    )
                                ) : (
                                    <button className="mdl-button mdl-js-button blue-button" onClick={() => setOrder(game.id, { amount, price: game.price * amount, title: game.title })}>
                                        Добавить в корзину
                                    </button>
                                )} 
                            </div>
                        </div>
                        <p className="game-description">
                            {game.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    games: state.games.games,
    game: state.games.game,
    fetching: state.games.fetching,
    order: state.order.order
});

const mapDispatchToProps = {
    getGame: gamesOperations.getGame,
    clearGame: gamesOperations.clearGame,
    setOrder: orderOperations.setOrder
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Game));