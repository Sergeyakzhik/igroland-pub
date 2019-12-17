import { games } from '../actions';
import { Games } from '../../api';

const requestGamesAction = games.Creators.requestGames;
const receiveGamesAction = games.Creators.receiveGames;
const requestGameAction = games.Creators.requestGame;
const receiveGameAction = games.Creators.receiveGame;
const requestGameImageAction = games.Creators.requestGameImage;
const receiveGameImageAction = games.Creators.receiveGameImage;
const requestGameCreationAction = games.Creators.requestGameCreation;
const receiveGameCreationAction = games.Creators.receiveGameCreation;
const requestGameUpdatingAction = games.Creators.requestGameUpdating;
const receiveGameUpdatingAction = games.Creators.receiveGameUpdating;
const requestGameDeletionAction = games.Creators.requestGameDeletion;
const receiveGameDeletionAction = games.Creators.receiveGameDeletion;
const requestGamesOrderChangeAction = games.Creators.requestGamesOrderChange;
const receiveGamesOrderChangeAction = games.Creators.receiveGamesOrderChange;
const clearGame = games.Creators.clearGame;
const resetSubmitted = games.Creators.resetSubmitted;
const setGames = games.Creators.setGames;

const getGames = onlyPublished => async dispatch => {
    dispatch(requestGamesAction());
    
    try {
        let result;
        
        if (onlyPublished) {
            result = await Games.getPublishedGames();
        } else {
            result = await Games.getGames();
        }

        result = await result.json();

        result.map(item => dispatch(getImage(item.id)));

        dispatch(receiveGamesAction(result));
    } catch (err) {
        console.log(err);
    }
};

const getGame = id => async dispatch => {
    console.log(id)
    dispatch(requestGameAction());  
    
    try {
        let result = await Games.getGameById(id);
        result = await result.json();

        if (result.image) {
            let image = { file: result.image, preview: result.image };

            result.image = image;
        }

        dispatch(receiveGameAction(result));
    } catch (err) {
        console.log(err);
    }
};

const getImage = id => async dispatch => {
    dispatch(requestGameImageAction());
    
    try {
        let result = await Games.getGameImage(id);
        result = await result.json();

        dispatch(receiveGameImageAction(id, result));
    } catch (err) {
        console.log(err);
    }
};

const createGame = values => async dispatch => {
    dispatch(requestGameCreationAction());
    
    try {
        let { image, ...data } = values;

        image = image ? image.preview : null;

        const GamesNumberResponse = await Games.getGamesNumber(); 

        if (GamesNumberResponse.status === 200) {
            const GamesNumber = await GamesNumberResponse.json();
            
            data.order = GamesNumber;

            const result = await Games.createGame({ ...data, image });

            if (result.status === 200) {
                dispatch(receiveGameCreationAction());
            }
        }
    } catch (err) {
        console.log(err);
    }
};

const updateGame = (values, id) => async dispatch => {
    dispatch(requestGameUpdatingAction());
    
    try {
        let { image, ...data } = values;

        image = image ? image.preview : null;

        const result = await Games.updateGame({ ...data, image }, id);
        
        if (result.status === 200) {
            dispatch(receiveGameUpdatingAction());
        }
    } catch (err) {
        console.log(err);
    }
};

const deleteGame = id => async dispatch => {
    dispatch(requestGameDeletionAction());
    
    try {
        await Games.deleteGame(id);

        dispatch(receiveGameDeletionAction());
    } catch (err) {
        console.log(err);
    }
};

const changeGamesOrder = orderArr => async dispatch => {
    dispatch(requestGamesOrderChangeAction());
    
    try {
        await Games.changeGamesOrder(orderArr);
    } catch (err) {
        console.log(err);
    }

    await dispatch(getGames());
    dispatch(receiveGamesOrderChangeAction());
};

export default {
    getGames,
    getGame,
    getImage,
    createGame,
    updateGame,
    deleteGame,
    changeGamesOrder,
    clearGame,
    resetSubmitted,
    setGames
};