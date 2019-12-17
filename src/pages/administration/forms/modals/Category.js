import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-materialize';

import { fieldsOperations } from '../duck';

import './modals.scss';

const CategoryModal = props => {
    const [category, setCategory] = useState(null);

    const handleChange = e => {
        setCategory(e.target.value);
    };

    const handleSubmit = () => {
        props.createCategory(category);

        if (!props.isFetching) {
            props.handleClose();
        }
    };

    return (
        <Modal
            className="new-category-modal"
            open={props.open}
            actions={null}
            options={{
                onCloseEnd: props.handleClose
            }}
        >
            <div>
                <label htmlFor="category">New Category</label>
                <input 
                    className="mdl-textfield__input browser-default" 
                    placeholder="Add New Category" 
                    value={category}
                    type="text" 
                    name="category" 
                    id="category"
                    onChange={handleChange}
                />
                <div className="button-group">
                    <button className="mdl-button mdl-js-button red-button" onClick={props.handleClose}>
                        Cancel
                    </button>
                    <button className="mdl-button mdl-js-button blue-button" onClick={handleSubmit}>
                        Create
                    </button>
                </div>
            </div>
        </Modal>
    );
};

const mapStateToProps = state => ({
	isFetching: state.fields.isFetching
});

const mapDispatchToProps = {
	createCategory: fieldsOperations.createCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryModal);