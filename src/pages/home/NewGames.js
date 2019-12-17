import React from 'react';
import { Link } from 'react-router-dom';
import { default as NukaCarousel } from 'nuka-carousel';

import left from '../../resources/images/left.svg';
import right from '../../resources/images/right.svg';
import news_01 from '../../resources/images/news-treff.png';

const NewGames = () => {

    const onPrevClick = ({ currentSlide, goToSlide, previousSlide }) => {
        currentSlide === 0 ? goToSlide(3) : previousSlide();
    };

    const onNextClick = ({ currentSlide, goToSlide, nextSlide }) => {
        currentSlide === 3 ? goToSlide(0) : nextSlide();
    };

    return (
        <section className="media blue-section" id="new-games">
            <div className="mdl-grid container">
                <div className="mdl-cell mdl-cell--12-col">
                    <h1>Новинки в наших магазинах</h1>
                    <div className="divider"></div>
                </div>
                <div className="mdl-cell mdl-cell--10-col">
                    <NukaCarousel 
                        className="new-games news-items"
                        heightMode="max"
                        speed={300}
                        slidesToShow={2}
                        renderCenterLeftControls={(args) => (
                            <div className="left-button" onClick={() => onPrevClick(args)}>
                                <img src={left} alt="Left"/>
                            </div>
                        )}
                        renderCenterRightControls={(args) => (
                            <div className="right-button" onClick={() => onNextClick(args)}>
                                <img src={right} alt="Right"/>
                            </div>
                        )} 
                        renderBottomCenterControls={() => null}
                    >
                        <div className="news-item">
                            <div>
                                <div className="image-wrapper">
                                    <img src={news_01} alt="News"/>
                                </div>
                                <h3>How to reduce diseases transmission risk to the next generation</h3>
                                <p>
                                    Lifetime television's award winning Balancing Act hostess Olga Villaverde interviews 
                                    Genomic Prediction Chief Science Officer, Dr. Nathan Treff
                                </p>
                            </div>
                            <Link className="blue-link" to="/news/news-1">Learn More</Link>
                        </div>
                        <div className="news-item">
                            <div>
                                <div className="image-wrapper">
                                    <img src={news_01} alt="News"/>
                                </div>
                                <h3>How to reduce diseases transmission risk to the next generation</h3>
                                <p>
                                    Lifetime television's award winning Balancing Act hostess Olga Villaverde interviews 
                                    Genomic Prediction Chief Science Officer, Dr. Nathan Treff
                                </p>
                            </div>
                            <Link className="blue-link" to="/news/news-1">Learn More</Link>
                        </div>
                        <div className="news-item">
                            <div>
                                <div className="image-wrapper">
                                    <img src={news_01} alt="News"/>
                                </div>
                                <h3>How to reduce diseases transmission risk to the next generation</h3>
                                <p>
                                    Lifetime television's award winning Balancing Act hostess Olga Villaverde interviews 
                                    Genomic Prediction Chief Science Officer, Dr. Nathan Treff
                                </p>
                            </div>
                            <Link className="blue-link" to="/news/news-1">Learn More</Link>
                        </div>
                    </NukaCarousel> 
                    <Link to="/news">
                        <button className="mdl-button mdl-js-button blue-button centered-button">
                            Все новинки
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewGames;