import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import NewGames from './NewGames';

import icon_family from '../../resources/images/family.svg';
import icon_martini from '../../resources/images/martini.svg';
import icon_baby from '../../resources/images/baby.svg';
import icon_brain from '../../resources/images/brain.svg';
import icon_cards from '../../resources/images/cards.svg';
import icon_jigsaws from '../../resources/images/jigsaws.svg';
import logo_wizzards from '../../resources/images/wizzards.png';
import logo_hobby from '../../resources/images/Hobby_world.png';
import logo_castorland from '../../resources/images/castorlland.png';
import logo_crowdgames from '../../resources/images/crowdgames.png';

import './home.scss';

const Home = props => {

    useEffect(() => {
        window.addEventListener('load', checkScroll);
        return () => window.removeEventListener('load', checkScroll);
    });

    const checkScroll = () => {
        const { location } = props;

        if (location && location.hash === '#contact-us') {
            window.scrollTo(0, document.querySelector('.contact-us').offsetTop + 50);
        }

        if (location && location.hash === '#about-us') {
            window.scrollTo(0, document.getElementById('about-us').offsetTop + 50);
        }

    }

    return (
        <>
            <section className="gpc-main home">
                <div className="top-content">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--10-col">
                            <h1>Игроленд</h1>
                            <h2>
                                Интернет-магазин настольных игр
                            </h2>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <div className="buttons-container">
                                <a className="for-button" href="/#contact-us">
                                    <button className="contact-button">
                                        Перейти в каталог
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="main-card mdl-card mdl-shadow--4dp" id="tests-card">
                    <div className="mdl-grid mdl-grid--no-spacing">
                        <div className="mdl-cell mdl-cell--12-col">
                            <h1>Категории игр</h1>
                            <div className="divider">
                            </div>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <Link to="/pgt-a">
                                <div className="mdl-grid game-item">
                                    <div className="mdl-cell mdl-cell--3-col">
                                        <div className="image-wrapper pgt">
                                            <img src={icon_family} alt="Семья" />
                                        </div>
                                    </div>
                                    <div className="mdl-cell mdl-cell--9-col">
                                        <div className="name-description-box pgt-a">
                                            <p>
                                                <span className="blue-span">
                                                    Для всей семьи
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <Link to="/pgt-sr">
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--3-col">
                                        <div className="image-wrapper pgt">
                                            <img src={icon_martini} alt="Вечеринка" />
                                        </div>
                                    </div>
                                    <div className="mdl-cell mdl-cell--9-col">
                                        <div className="name-description-box pgt-sr">
                                            <p>
                                                <span className="blue-span">
                                                    Для вечеринок
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <Link to="/pgt-p">
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--3-col">
                                        <div className="image-wrapper pgt">
                                            <img src={icon_baby} alt="Ребенок" />
                                        </div>
                                    </div>
                                    <div className="mdl-cell mdl-cell--9-col">
                                        <div className="name-description-box pgt-p">
                                            <p>
                                                <span className="blue-span">
                                                    Для детей
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <Link to="/pgt-m">
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--3-col">
                                        <div className="image-wrapper pgt">
                                            <img src={icon_brain} alt="Головоломка" />
                                        </div>
                                    </div>
                                    <div className="mdl-cell mdl-cell--9-col">
                                        <div className="name-description-box pgt-m">
                                            <p>
                                                <span className="blue-span">
                                                    Головоломки
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <Link to="/pgt-m">
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--3-col">
                                        <div className="image-wrapper pgt">
                                            <img src={icon_cards} alt="Карты" />
                                        </div>
                                    </div>
                                    <div className="mdl-cell mdl-cell--9-col">
                                        <div className="name-description-box pgt-m">
                                            <p>
                                                <span className="blue-span">
                                                    Покер и карты
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <Link to="/pgt-m">
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--3-col">
                                        <div className="image-wrapper pgt">
                                            <img src={icon_jigsaws} alt="Пазлы" />
                                        </div>
                                    </div>
                                    <div className="mdl-cell mdl-cell--9-col">
                                        <div className="name-description-box pgt-m">
                                            <p>
                                                <span className="blue-span">
                                                    Пазлы
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about" id="about-us">
                <div className="mdl-grid container">
                    <div className="mdl-cell mdl-cell--12-col">
                        <h1>О магазине</h1>
                        <div className="divider">
                        </div>
                        <h3 className="centered">Добро пожаловать в наш магазин "Игроленд". Мы продаем настольные игры :)</h3>
                    </div>
                    <div className="mdl-cell mdl-cell--10-col">
                        <p>
                            Вам обязательно понравится наш магазин, если:
                            <ul className="browser-default">
                                <li>Вам нравилось в детстве играть в "Монополию";</li>
                                <li>Вы с удовольствием вспоминаете, как играли с друзьями в "Мафию";</li>
                                <li>Вы ищете, чем бы с пользой увлечь ребенка;</li>
                                <li>Вам надоели шахматы, шашки, нарды;</li>
                                <li>Вы ищете, чем бы разнообразить встречу с друзьями;</li>
                                <li>Вы ищете оргинальный подарок;</li>
                                <li>Вы любите увлекательно и разнообразно проводить свободное время в кругу семьи;</li>
                                <li>Вы - фанат настолок!</li>
                            </ul>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;У нас вы найдете: разнообразные настольные игры на любой вкус; новинки, а также игры, проверенные временем - и все это по низким ценам! 
                            В нашем магазине мы стараемся собрать для своих покупателей самые интересные настольные игры. Игры, в которые с удовольствием играют 
                            тысячи людей во всем мире. В которые, наконец, с удовольствием играем и мы сами. Мы с радостью поможем выбрать вам игру по вкусу, 
                            проконсультируем по всем интересующим вопросам.
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;Не нашли у нас в магазине игру о которой мечтали? Не расстраивайтесь, просто&nbsp;
                            <a className="blue-link" href="/#contact-us">свяжитесь с нами</a>!
                            Мы приложим все усилия, чтобы найти ее для Вас!
                        </p>
                        <h3 className="centered">
                            Спасибо за то, что заглянули в наш магазин. Мы всегда рады Вам!
                        </h3>
                        <Link to="/catalog">
                            <button className="mdl-button mdl-js-button blue-button centered-button">
                                Перейти в каталог
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="brands blue-section">
                <div className="mdl-grid container">
                    <div className="mdl-cell mdl-cell--12-col">
                        <h1>Бренды и производители</h1>
                        <div className="divider"></div>
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                        <div className="brands-list">
                            <div className="brand">
                                <img src={logo_castorland} alt="Castorland" />
                            </div>
                            <div className="brand">
                                <img src={logo_hobby} alt="Hobby Games" />
                            </div>
                            <div className="brand">
                                <img src={logo_wizzards} alt="Wizzards" />
                            </div>
                            <div className="brand">
                                <img src={logo_crowdgames} alt="Crowdgames" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <NewGames /> */}
            <section className="contact-us" id="contact-us">
                <div className="mdl-grid container">
                    <div className="mdl-cell mdl-cell--12-col">
                        <h1>Связаться с нами</h1>
                        <div className="divider"></div>
                    </div>
                    <div className="mdl-cell mdl-cell--10-col">
                        <form action="#">
                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input" type="text" placeholder="Имя" name="name" />
                            </div>
                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input" type="text" placeholder="Email" name="email" />
                            </div>
                            <div className="mdl-textfield mdl-js-textfield">
                                <textarea type="text" rows="3" placeholder="Текст сообщения" name="message">
                                </textarea>
                            </div>
                            <button className="mdl-button mdl-js-button blue-button centered-button">
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}


export default withRouter(Home);