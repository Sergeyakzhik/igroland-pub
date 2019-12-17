import React from 'react';
import { Link } from 'react-router-dom';

const ControlHeader = ({ title, isNew, sectionType, showCreateButton = true, handleSubmit }) => (
    <div className="admin-title-box">
        <h2><Link to={`/administration/${sectionType}`}><i className="material-icons">arrow_back</i></Link>{title}</h2>
        <div>
            <Link to={`/administration/${sectionType}`}>
                <button className="mdl-button mdl-js-button red-button">
                    Отменить
                </button>
            </Link>
            {showCreateButton && (
                <button className={`mdl-button mdl-js-button blue-button`} onClick={handleSubmit}>
                    {isNew ? 'Создать' : 'Редактировать'}
                </button>
            )}
        </div>
    </div>
);

export default ControlHeader;