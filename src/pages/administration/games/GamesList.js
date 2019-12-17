import React from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Row from './Row';

import './games.scss';

const GamesList = ({ data, fetching, history, isUpdating, onDelete, onPublishedChange, onDragEnd }) => (
    <>
        <div className="admin-title-box">
            <h2>Игры</h2>
            <Link to="/administration/games/new">
                <button className="mdl-button mdl-js-button blue-button">
                    Добавить Игру
                </button>
            </Link>
        </div>
        <p className="posts-number">Количество: {data.length}</p>
        <div className="admin-table-wrapper">
            <table className="admin-table games-table">
                <thead>
                    <tr>
                        <th>
                            Название
                        </th>
                        <th>
                            Категория
                        </th>
                        <th>
                            Остаток
                        </th>
                        <th>
                            Опубликовать
                        </th>
                        <th>
                            Действия
                        </th>
                    </tr>
                </thead>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId='games'>
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
                                        onDelete={onDelete} 
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

export default GamesList;