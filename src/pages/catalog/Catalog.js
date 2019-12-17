import React from 'react';

import GamePreview from './GamePreview';

import './catalog.scss';

const Catalog = ({ data, options, toggleCategory, handleOptionsChange }) => (
    <section>
        <div className="mdl-grid container">
            <div className="mdl-cell mdl-cell--10-col">
                <h1>Каталог</h1>
                <div className="divider"></div>
            </div>
            <div className="mdl-cell mdl-cell--12-col">
                <div className="catalog">
                    <div className="left-section">
                        <select className="sort-block browser-default" value={options.SORT} onChange={e => handleOptionsChange('SORT', e.target.value)}>
                            <option value="name_desc" selected>Название: А-Я</option>
                            <option value="name_asc">Название: Я-А</option>
                            <option value="price_desc">Цена: по убыванию</option>
                            <option value="price_asc">Цена: по возрастанию</option>
                        </select>
                        <label className="max-price">Цена до: {options.MAX_PRICE} р.</label>
                        <input class="mdl-slider" type="range" min="0" max="100" value={options.MAX_PRICE} onChange={e => handleOptionsChange('MAX_PRICE', e.target.value)} />
                        <input className="inp-cbx" value="family" id="family" name="family" type="checkbox" checked={options.CATEGORIES['family']} onChange={e => toggleCategory(e.target.name)} />
                        <label className="cbx" htmlFor="family">
                            <span className="checkmark">
                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                            Для всей семьи
                        </label>
                        <input className="inp-cbx" value="party" id="party" name="party" type="checkbox" checked={options.CATEGORIES['party']} onChange={e => toggleCategory(e.target.name)} />
                        <label className="cbx" htmlFor="party">
                            <span className="checkmark">
                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                            Для вечеринок
                        </label>
                        <input className="inp-cbx" value="clildren" id="clildren" name="clildren" type="checkbox" checked={options.CATEGORIES['children']} onChange={e => toggleCategory(e.target.name)} />
                        <label className="cbx" htmlFor="clildren">
                            <span className="checkmark">
                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                            Для детей
                        </label>
                        <input className="inp-cbx" value="brain" id="brain" name="brain" type="checkbox" checked={options.CATEGORIES['brain']} onChange={e => toggleCategory(e.target.name)} />
                        <label className="cbx" htmlFor="brain">
                            <span className="checkmark">
                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                            Головоломки
                        </label>
                        <input className="inp-cbx" value="cards" id="cards" name="cards" type="checkbox" checked={options.CATEGORIES['cards']} onChange={e => toggleCategory(e.target.name)} />
                        <label className="cbx" htmlFor="cards">
                            <span className="checkmark">
                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                            Покер и карты
                        </label>
                        <input className="inp-cbx" value="jigsaws" id="jigsaws" name="jigsaws" type="checkbox" checked={options.CATEGORIES['jigsaws']} onChange={e => toggleCategory(e.target.name)} />
                        <label className="cbx" htmlFor="jigsaws">
                            <span className="checkmark">
                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                            Пазлы
                        </label>
                    </div>
                    <div className="right-section">
                        {data.length > 0 && data.map((item, ind) => (
                            <GamePreview key={'game-' + ind} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Catalog;