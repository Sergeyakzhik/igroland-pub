import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import GamesList from './GamesList';
import { gamesOperations } from '../../../store/operations';

const GamesListContainer = ({ games, fetching, getGames, setGames, updateGame, deleteGame, changeGamesOrder }) => {

    const [isUpdating, setUpdating] = useState(null);

    useEffect(() => {
        getGames();
    }, [getGames]);

    const handleDelete = async (id, e) => {
        e.stopPropagation();

        await deleteGame(id);
        getGames();
    };

    const handleDragEnd = result => {
        const list = [ ...games ];
        const startIndex = result.source.index;
        const endIndex = result.destination.index; 
        const [removed] = list.splice(startIndex, 1);

        list.splice(endIndex, 0, removed);

        setGames(list);
        changeGamesOrder(list.map(item => item.id));
    };

    const handlePublishedChange = async (id, published, e) => {
        e.stopPropagation();
        setUpdating(id);
        await updateGame({ published }, id);
        await getGames();
        setUpdating(null);
    };

    return (
        <GamesList 
            data={games} 
            fetching={fetching}
            isUpdating={isUpdating}
            onDelete={handleDelete}
            onDragEnd={handleDragEnd}
            onPublishedChange={handlePublishedChange}
        />
    );
};

const mapStateToProps = state => ({
    games: state.games.games,
    fetching: state.games.fetching
});

const mapDispatchToProps = {
    getGames: gamesOperations.getGames,
    deleteGame: gamesOperations.deleteGame,
    updateGame: gamesOperations.updateGame,
    setGames: gamesOperations.setGames,
    changeGamesOrder: gamesOperations.changeGamesOrder
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GamesListContainer);
