import React from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import { Link, withRouter } from 'react-router-dom';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Row from './Row';
import { preparePins } from './utils';

import './locations.scss';

const LocationsList = ({ data, fetching, isUpdating, history, onDelete, onDragEnd, onPublishedChange }) => (
    <>
        <div className="admin-title-box">
            <h2>Пункты самовывоза</h2>
            <Link to="/administration/locations/new">
                <button className="mdl-button mdl-js-button blue-button">
                    Добавить пункт
                </button>
            </Link>
        </div>
        {!fetching ? (
            <ReactBingmaps 
                className="map"
                bingmapKey="ApirBVkRI4uVvfBuH1jNVVGr0Nh9mCPTh_MbjIOhX-SxFoBdSap9WvA7nsGgOgqH" 
                center={[46.412082, -37.734879]}
                zoom={3}
                pushPins={preparePins(data, target => {
                    history.push(`/administration/locations/${data[target].id}`);
                })}
            > 
            </ReactBingmaps> 
        ) : <div className="map-loading"><h3>Карта загружается...</h3></div>}
        <p className="posts-number">Пункты самовывоза: {data.length}</p>
        <div className="admin-table-wrapper">
            <table className="admin-table locations-table">
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Название
                        </th>
                        <th>
                            Адрес
                        </th>
                        <th>
                            Страна
                        </th>
                        <th>
                            Опубликован
                        </th>
                        <th>
                            Действия
                        </th>
                    </tr>
                </thead>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId='locations'>
                            {provided => (
                                <tbody ref={provided.innerRef} { ...provided.droppableProps }>
                                    {data.map((item, ind) => item && (
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
                                    ))}
                                    {provided.placeholder} 
                                </tbody>
                            )}
                        </Droppable>
                    </DragDropContext>
            </table>
        </div>
    </>
);

export default withRouter(LocationsList);

