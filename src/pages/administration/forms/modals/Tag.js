import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-materialize';

import { fieldsOperations } from '../duck';

import './modals.scss';

const TagModal = props => {
    const [tag, setTag] = useState(null);

    const handleChange = e => {
        setTag(e.target.value);
    };

    const handleSubmit = () => {
        props.createTag(tag);

        if (!props.isFetching) {
            props.handleClose();
        }
    };

    return (
        <Modal
            className="new-tag-modal"
            open={props.open}
            actions={null}
            options={{
                onCloseEnd: props.handleClose
            }}
        >
            <div>
                <label htmlFor="tag">New Tag</label>
                <input 
                    className="mdl-textfield__input browser-default" 
                    placeholder="Add New Tag" 
                    value={tag}
                    type="text" 
                    name="tag" 
                    id="tag"
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
	createTag: fieldsOperations.createTag
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagModal);