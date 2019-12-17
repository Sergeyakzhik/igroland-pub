import React from 'react';

import './checkbox.scss';

const Checkbox = ({ className, label, checked, onChange }) => (
    <>
        <input className="inp-cbx" type="checkbox" checked={checked} />
        <label className={`cbx ${className || ''}`} onClick={onChange}>
            <span className="checkmark">
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
            </span>
            {label}
        </label>
    </>
);

export default Checkbox;