import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';

import { ControlHeader } from '../common';
import { GameForm } from '../forms';
import validationSchema from './validation';
import { gamesOperations } from '../../../store/operations';

const NewGame = ({ history, submitted, createGame, resetSubmitted }) => {

    useEffect(() => {
        if (submitted) {
            resetSubmitted();
            history.push('/administration/games');
        } 
    }, [history, resetSubmitted, submitted]);

    const handleSubmit = values => {
        createGame(values);
    };

    return (
        <Formik
            initialValues={{
                title: '', 
                description: '', 
                category: 'family',
                players: '',
                time: '',
                left: 0,
                price: 0,
                manufacturer: '',
                image: null, 
                published: true,
                new: true
            }}
            enableReinitialize={true}
            validationSchema={validationSchema}
            isInitialValid={false}
            onSubmit={values => handleSubmit(values)}
        >
            {props => (
                <>
                    <ControlHeader title="Новая Игра" isNew={true} sectionType="games" showCreateButton={true} handleSubmit={() => props.submitForm(props.values)} />
                    <div className="admin-table-wrapper">
                        <GameForm { ...props } />
                    </div> 
                </>
            )}
        </Formik>
    );
};

const mapStateToProps = state => ({
    submitted: state.games.submitted
});

const mapDispatchToProps = {
    createGame: gamesOperations.createGame,
    resetSubmitted: gamesOperations.resetSubmitted
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(NewGame));