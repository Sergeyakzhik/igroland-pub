import { createReducer } from 'reduxsauce';
import { games } from '../actions';

const INITIAL_STATE = {
    games: [],
    game: {},
    fetching: null,
    submitted: false
};

const requestGames = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'data'
});

const receiveGames = (state = INITIAL_STATE, action) => ({
    ...state, 
    fetching: null,
    games: action.games
});

const requestGame = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'data'
});

const receiveGame = (state = INITIAL_STATE, action) => ({
    ...state, 
    fetching: null,
    game: action.game
});

const requestGameImage = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'image'
});

const receiveGameImage = (state = INITIAL_STATE, action) => {
    const gameInd = state.games.findIndex(item => item.id === action.id);
    const result = [ ...state.games ];

    result[gameInd].image = action.image.image;

    return {
        ...state, 
        fetching: null,
        games: result
    };
}

const requestGameCreation = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'new'
});

const receiveGameCreation = (state = INITIAL_STATE) => ({
    ...state, 
    fetching: null,
    submitted: true
});

const requestGameUpdating = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'update'
});

const receiveGameUpdating = (state = INITIAL_STATE) => ({
    ...state, 
    fetching: null,
    submitted: true
});

const requestGameDeletion = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'delete'
});

const receiveGameDeletion = (state = INITIAL_STATE) => ({
    ...state, 
    fetching: null
});

const clearGame = (state = INITIAL_STATE) => ({
    ...state, 
    game: {}
});

const resetSubmitted = (state = INITIAL_STATE) => ({
    ...state, 
    submitted: false
});

const requestGamesOrderChange = (state = INITIAL_STATE) => ({ 
	...state, 
	fetching: 'order'
});

const receiveGamesOrderChange = (state = INITIAL_STATE) => ({
    ...state, 
    fetching: null
});

const setGames = (state = INITIAL_STATE, action) => ({
    ...state, 
    games: action.data
});

const HANDLERS = {
	[games.Types.REQUEST_GAMES]: requestGames,
    [games.Types.RECEIVE_GAMES]: receiveGames,
    [games.Types.REQUEST_GAME]: requestGame,
    [games.Types.RECEIVE_GAME]: receiveGame,
    [games.Types.REQUEST_GAME_IMAGE]: requestGameImage,
    [games.Types.RECEIVE_GAME_IMAGE]: receiveGameImage,
    [games.Types.REQUEST_GAME_CREATION]: requestGameCreation,
    [games.Types.RECEIVE_GAME_CREATION]: receiveGameCreation,
    [games.Types.REQUEST_GAME_UPDATING]: requestGameUpdating,
    [games.Types.RECEIVE_GAME_UPDATING]: receiveGameUpdating,
    [games.Types.REQUEST_GAME_DELETION]: requestGameDeletion,
    [games.Types.RECEIVE_GAME_DELETION]: receiveGameDeletion,
    [games.Types.REQUEST_GAMES_ORDER_CHANGE]: requestGamesOrderChange,
    [games.Types.RECEIVE_GAMES_ORDER_CHANGE]: receiveGamesOrderChange,
    [games.Types.CLEAR_GAME]: clearGame,
    [games.Types.RESET_SUBMITTED]: resetSubmitted,
    [games.Types.SET_GAMES]: setGames
};

export default createReducer(INITIAL_STATE, HANDLERS);