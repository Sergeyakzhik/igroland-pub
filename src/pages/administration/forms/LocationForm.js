import React from 'react';
import { Field, FieldArray, Form } from 'formik';
import ReactTooltip from 'react-tooltip';

import { Checkbox } from '../../../common';
import ic_preview from '../../../resources/images/ic_preview.svg';

import './forms.scss';

const Tooltip = ({ values: { name, address, websites, tests } }) => (
    <div>
        <div className="location-preview">
            <p className="blue-link">{name}</p>
            {address && address.split(',').map((item, ind) => (
                <p key={"address-" + ind}>{item}</p>
            ))}
            <div className="websites-box">
                {websites && websites.map(({ website_name, website_link }) => (
                    <div key={website_link}>
                        <a href={website_link}>{website_name || website_link}</a>
                    </div>
                ))}
            </div>
            <p>
                {tests && tests.map((test, ind) => (
                    <span key={"link-" + ind} className="blue-link">{`${test + (ind + 1 === tests.length ? '' : ',')}`} </span>
                ))}
            </p>
        </div>
    </div>
);

const LocationForm = ({ values, errors, touched, setFieldValue }) => (
    <>
        <ReactTooltip 
            delayHide={100} 
            className="address-preview-tooltip" 
            place="top" 
            type="light" 
            effect="solid" 
            id="preview"
        >
            <Tooltip values={values || {}} />
        </ReactTooltip>
        <Form className="admin-form location-form">
            <div className="is-published-box">
                <Field 
                    as="input"
                    type="checkbox" 
                    name="published"
                    component={() => 
                        <Checkbox checked={values && values.published} onChange={e => setFieldValue('published', values && !values.published)} />
                    }
                />
                <label>Publish</label>
            </div>
            <div className="mdl-grid mdl-grid--no-spacing">
                <div className="mdl-cell mdl-cell--9-col">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--12-col">
                            <label className="required" htmlFor="name">Name</label>
                            {errors.name && touched.name && <span className="validation-error">{errors.name}</span>}
                            <Field 
                                className={`mdl-textfield__input browser-default ${errors.name && touched.name && 'error'}`} 
                                placeholder="Add Name of New Location" 
                                as="input"
                                type="text" 
                                name="name"
                                id="name" 
                            />
                        </div>
                        <div className="mdl-cell mdl-cell--12-col">
                            <label className="required" htmlFor="address">Address</label>
                            {errors.address && touched.address && <span className="validation-error">{errors.address}</span>}
                            <span className="preview blue-link" data-tip="preview" data-for="preview">
                                <img src={ic_preview} alt="preview" />
                                Preview
                            </span>
                            <Field 
                                className={`mdl-textfield__input browser-default ${errors.address && touched.address && 'error'}`} 
                                placeholder="Add Address of New Location" 
                                as="input"
                                type="text" 
                                name="address"
                                id="address" 
                            />
                        </div>
                        <div className="mdl-cell mdl-cell--12-col">
                            <label className="required" htmlFor="city">City</label>
                            {errors.city && touched.city && <span className="validation-error">{errors.city}</span>}
                            <Field 
                                className={`mdl-textfield__input browser-default ${errors.city && touched.city && 'error'}`} 
                                placeholder="Add City of New Location" 
                                as="input"
                                type="text" 
                                name="city"
                                id="city" 
                            />
                        </div>
                        <div className="mdl-cell mdl-cell--12-col">
                            <label className="required" htmlFor="country">Country</label>
                            {errors.country && touched.country && <span className="validation-error">{errors.country}</span>}
                            <Field 
                                className={`mdl-textfield__input browser-default ${errors.country && touched.country && 'error'}`} 
                                placeholder="Add Country of New Location" 
                                as="input"
                                type="text" 
                                name="country"
                                id="country" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    </>
);

export default LocationForm;