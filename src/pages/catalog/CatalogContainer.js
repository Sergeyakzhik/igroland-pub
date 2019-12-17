import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Catalog from './Catalog';
import { gamesOperations } from '../../store/operations';

const CatalogContainer = ({ games, fetching, getGames }) => {
    const [preparedData, setPreparedData] = useState([]);
    const [options, setOptions] = useState({
        SORT: 'name_desc',
        MAX_PRICE: '100',
        CATEGORIES: {}
    });

    useEffect(() => {
        getGames(true);
    }, [getGames]);

    useEffect(() => {
        setPreparedData(prepareData(games));
    }, [options, games]);

    const handleOptionsChange = (type, value) => {
        setOptions({
            ...options,
            [type]: value
        });
    };

    const toggleCategory = category => {
        setOptions({
            ...options,
            CATEGORIES: {
                ...options.CATEGORIES,
                [category]: !options.CATEGORIES[category]
            }
        })
    };

    const prepareData = games => {
        let result = [ ...games ];
        const selectedCategories = Object.keys(options.CATEGORIES).filter(key => options.CATEGORIES[key]);

        result = result.filter(item => item.price <= options.MAX_PRICE);

        if (selectedCategories.length > 0) {
            result = result.filter(item => selectedCategories.includes(item.category));
        }
        
        switch (options.SORT) {
            case 'name_desc': 
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'name_asc': 
                result.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'price_desc': 
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price_asc': 
                result.sort((a, b) => b.price - a.price);
                break;
            default: 
                return;
        };

        return result;
    };

    return (
        <Catalog 
            data={preparedData} 
            options={options}
            fetching={fetching}
            toggleCategory={toggleCategory}
            handleOptionsChange={handleOptionsChange}
        />
    );
};

const mapStateToProps = state => ({
    games: state.games.games,
    fetching: state.games.fetching
});

const mapDispatchToProps = {
    getGames: gamesOperations.getGames
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogContainer);
