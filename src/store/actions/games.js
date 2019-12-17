import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    requestGames: null,
    receiveGames: ['games'],
    requestGame: null,
    receiveGame: ['game', 'id'],
    requestGameImage: null,
    receiveGameImage: ['id', 'image'],
    requestGameCreation: null,
    receiveGameCreation: null,
    requestGameUpdating: null,
    receiveGameUpdating: null,
    requestGameDeletion: null,
    receiveGameDeletion: null,
    clearGame: null,
    resetSubmitted: null,
    setGames: ['data'],
    requestGamesOrderChange: null,
    receiveGamesOrderChange: null
});

export default { Types, Creators };