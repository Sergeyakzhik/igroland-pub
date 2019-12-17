import React from 'react';
import { Field } from 'formik';
 
const References = ({ ind, onDeleteReferenceClick }) => (
    <>
        <div className="mdl-cell mdl-cell--9-col">
            {ind === 0 && (
                <label htmlFor="references">References</label>
            )}
            <Field 
                className="mdl-textfield__input browser-default" 
                placeholder="Add Reference Name" 
                type="text" 
                name={`references[${ind}].name`}
            />
        </div>
        <div className="mdl-cell mdl-cell--3-col mdl-cell--bottom">
            <Field 
                className="mdl-textfield__input browser-default" 
                placeholder="Add Reference Link" 
                type="text"
                name={`references[${ind}].link`}
            />
        </div>
        <div className="mdl-cell mdl-cell--12-col">
            <p className="delete-reference-button" onClick={() => onDeleteReferenceClick(ind)}>
                Delete Reference
            </p> 
        </div>
    </>
);

export default References;