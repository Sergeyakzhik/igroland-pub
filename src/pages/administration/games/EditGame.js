import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';

import { ControlHeader } from '../common';
import { GameForm } from '../forms';
import validationSchema from './validation';
import { gamesOperations } from '../../../store/operations';

const EditGame = ({ history, match, game, fetching, submitted, getGame, updateGame, clearGame, resetSubmitted }) => {
    const [initialValues, setInitialValues] = useState(null);

    useEffect(() => {
        if (submitted) {
            resetSubmitted();
            history.push('/administration/games');
        } 
    }, [history, resetSubmitted, submitted]);

    useEffect(() => {
        getGame(match.params.id);

        return () => clearGame();
    }, [clearGame, getGame, match.params.id]);

    useEffect(() => {
        setInitialValues({ ...game });
    }, [game]);

    const handleSubmit = values => {
        updateGame(values, match.params.id);        
    };

    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={validationSchema}
            isInitialValid={false}
            onSubmit={values => handleSubmit(values)}
        >
            {props => (
                <>
                    <ControlHeader title="Редактировать Игру" isNew={false} sectionType="games" showCreateButton={true} handleSubmit={() => props.submitForm(props.values)} />
                    <div className="admin-table-wrapper">
                        <GameForm { ...props } />
                    </div> 
                </>
            )}
        </Formik>
    );
};

const mapStateToProps = state => ({
    fetching: state.games.fetching,
    game: state.games.game,
    submitted: state.games.submitted
});

const mapDispatchToProps = {
    getGame: gamesOperations.getGame,
    updateGame: gamesOperations.updateGame,
    clearGame: gamesOperations.clearGame,
    resetSubmitted: gamesOperations.resetSubmitted
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(EditGame));