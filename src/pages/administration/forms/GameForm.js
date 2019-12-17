import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';

import { DropZone } from './fields';
import { Checkbox } from '../../../common';

const GameForm = ({ handleDrop, setFieldValue, setFieldTouched, setFieldError, values, errors, touched, ...props }) => (
    <Form className="admin-form game-form">
        <div className="is-new-box">
            <Field 
                as="input"
                type="checkbox" 
                name="new"
                component={() => 
                    <Checkbox checked={values && values.new} onChange={e => setFieldValue('new', values && !values.new)} />
                }   
            />
            <label>Новинка</label>
        </div>
        <div className="is-published-box">
            <Field 
                as="input"
                type="checkbox" 
                name="published"
                component={() => 
                    <Checkbox checked={values && values.published} onChange={e => setFieldValue('published', values && !values.published)} />
                }
            />
            <label>Опубликовать</label>
        </div>
        <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--7-col">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col">
                        <label className="required" htmlFor="title">Название</label>
                        <ErrorMessage className="validation-error" component="span" name="title" />
                        <Field 
                            className={`mdl-textfield__input browser-default ${errors.title && touched.title && 'error'}`} 
                            as="input"
                            type="text" 
                            name="title"
                            id="title" 
                        />
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                        <label className="required" htmlFor="description">Описание</label>
                        <ErrorMessage className="validation-error" component="span" name="description" />
                        <Field
                            className={`mdl-textfield__input browser-default ${errors.description && touched.description && 'error'}`} 
                            as="textarea"
                            type="text" 
                            rows="4"
                            name="description"
                            id="description" 
                        />
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                        <label className="required" htmlFor="category">Категория</label>
                        <ErrorMessage className="validation-error" component="span" name="category" />
                        <Field
                            className={`browser-default ${errors.category && touched.category && 'error'}`} 
                            as="select"
                            type="text" 
                            name="category"
                            id="category" 
                        >
                            <option value="family">Для всей семьи</option>
                            <option value="party">Для вечеринок</option>
                            <option value="children">Для детей</option>
                            <option value="brain">Головоломки</option>
                            <option value="cards">Покер и карты</option>
                            <option value="jigsaw">Пазлы</option>
                        </Field>
                    </div>
                    <div className="mdl-cell mdl-cell--3-col">
                        <label className="required" htmlFor="players">Количество игроков</label>
                        <ErrorMessage className="validation-error" component="span" name="players" />
                        <Field 
                            className={`mdl-textfield__input browser-default ${errors.players && touched.players && 'error'}`} 
                            as="input"
                            type="text" 
                            name="players"
                            id="players" 
                        />
                    </div>
                    <div className="mdl-cell mdl-cell--3-col">
                        <label className="required" htmlFor="time">Время игры</label>
                        <ErrorMessage className="validation-error" component="span" name="time" />
                        <Field 
                            className={`mdl-textfield__input browser-default ${errors.time && touched.time && 'error'}`} 
                            as="input"
                            type="text" 
                            name="time"
                            id="time" 
                        />
                    </div>
                    <div className="mdl-cell mdl-cell--3-col">
                        <label className="required" htmlFor="left">Остаток</label>
                        <ErrorMessage className="validation-error" component="span" name="left" />
                        <Field 
                            className={`mdl-textfield__input browser-default ${errors.left && touched.left && 'error'}`} 
                            as="input"
                            type="text" 
                            name="left"
                            id="left" 
                        />
                    </div>
                    <div className="mdl-cell mdl-cell--3-col">
                        <label className="required" htmlFor="price">Цена</label>
                        <ErrorMessage className="validation-error" component="span" name="price" />
                        <Field 
                            className={`mdl-textfield__input browser-default ${errors.price && touched.price && 'error'}`} 
                            as="input"
                            type="text" 
                            name="price"
                            id="price" 
                        />
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                        <label className="required" htmlFor="manufacturer">Производитель</label>
                        <ErrorMessage className="validation-error" component="span" name="manufacturer" />
                        <Field 
                            className={`mdl-textfield__input browser-default ${errors.manufacturer && touched.manufacturer && 'error'}`} 
                            as="input"
                            type="text" 
                            name="manufacturer"
                            id="manufacturer" 
                        />
                    </div>
                </div>
            </div>
            <div className="mdl-cell mdl-cell--5-col">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col">
                        <label htmlFor="image">Image</label>
                        <ErrorMessage className="validation-error" component="span" name="image" />
                        <Field 
                            name="image"
                            component={props => (
                                <DropZone 
                                    isError={errors.image && touched.image}
                                    placeholder="Drag'n'drop a square image here, or click to select it"
                                    setFieldValue={setFieldValue} 
                                    setFieldTouched={setFieldTouched}
                                    setFieldError={setFieldError} 
                                    { ...props } 
                                />
                            )}
                        />
                    </div>
                </div>
            </div>   
        </div>
    </Form>
);

export default GameForm;