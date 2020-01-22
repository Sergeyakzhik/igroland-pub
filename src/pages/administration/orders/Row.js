import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Checkbox } from '../../../common';

import checkbox_spinner from '../../../resources/images/checkbox-spinner.gif';

const Row = ({ data, index, fetching, isUpdating, onPublishedChange }) => (
    <Draggable draggableId={data.id} index={index}>
        {(provided, snapshot) => (
            <tr
                className={`row-item ${snapshot.isDragging && 'dragging'}`}
                { ...provided.draggableProps }
                { ...provided.dragHandleProps }
                ref={provided.innerRef}
            >
                <td>{data.id}</td>
                <td>{data.email}</td>
                <td>{data.price}</td>
                <td>
                    {fetching && data.id === isUpdating ? (
                        <img className="checkbox-spinner" src={checkbox_spinner} alt="..." />
                    ) : (
                        <Checkbox checked={!!data.completed} onChange={e => {
                            onPublishedChange(data.id, !data.completed, e)
                        }} />
                    )}
                </td>
            </tr>
        )}
    </Draggable>
);

export default Row;