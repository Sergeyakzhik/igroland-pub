import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { Draggable } from 'react-beautiful-dnd';

import { Checkbox } from '../../../common';

import checkbox_spinner from '../../../resources/images/checkbox-spinner.gif';

const Row = ({ data, index, fetching, history, isUpdating, onDelete, onPublishedChange }) => (
    <Draggable draggableId={data.id} index={index}>
        {(provided, snapshot) => (
            <tr
                className="row-item"
                { ...provided.draggableProps }
                { ...provided.dragHandleProps }
                ref={provided.innerRef}
                onClick={() => history.push(`/administration/locations/${data.id}`)}
            >
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.country}</td>
                <td>
                    {fetching && data.id === isUpdating ? (
                        <img className="checkbox-spinner" src={checkbox_spinner} alt="..." />
                    ) : (
                        <Checkbox checked={!!data.published} onChange={e => {
                            onPublishedChange(data.id, !data.published, e)
                        }} />
                    )}
                </td>
                <td>
                    <div className="edit-delete-icons-box">
                        <ReactTooltip 
                            clickable={true} 
                            delayHide={200} 
                            className="map-tooltip" 
                            place="top" 
                            type="light" 
                            effect="solid" 
                            id={data.id.toString()}
                            scrollHide={true}
                        >
                            <div className="delete-modal-content">
                                <p>Are you sure you want to delete location?</p>
                                <button className="mdl-button mdl-js-button blue-button small-button" onClick={e => onDelete(data.id, e)}>
                                    Delete
                                </button>
                            </div>
                        </ReactTooltip>
                        <Link to={`/administration/locations/${data.id}`}>
                            <i className="material-icons-outlined edit-post">edit</i>
                        </Link>
                        <i className="material-icons-outlined delete-post" data-tip data-for={data.id} data-iscapture="true">delete</i>
                    </div>
                </td>
            </tr>
        )}
    </Draggable>
);

export default Row;