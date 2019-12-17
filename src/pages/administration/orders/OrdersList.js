import React from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Row from './Row';

import './orders.scss';

const OrdersList = ({ data, fetching, history, isUpdating, onPublishedChange, onDragEnd }) => (
    <>
        <div className="admin-title-box">
            <h2>Заказы</h2>
        </div>
        <p className="posts-number">Количество: {data.length}</p>
        <div className="admin-table-wrapper">
            <table className="admin-table games-table">
                <thead>
                    <tr>
                        <th>
                            Номер
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Общая стоимость
                        </th>
                        <th>
                            Завершен
                        </th>
                    </tr>
                </thead>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId='orders'>
                        {provided => (
                            <tbody ref={provided.innerRef} { ...provided.droppableProps }>
                                {data.length > 0 && data.map((item, ind) => item && 
                                    <Row 
                                        history={history}
                                        key={item.id} 
                                        data={item} 
                                        index={ind} 
                                        fetching={fetching}
                                        isUpdating={isUpdating}
                                        onPublishedChange={onPublishedChange}
                                    />
                                )}
                                {provided.placeholder} 
                            </tbody>
                        )} 
                    </Droppable>
                </DragDropContext>
            </table>
        </div>
    </>
);

export default OrdersList;