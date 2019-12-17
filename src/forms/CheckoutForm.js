import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { LocationSearchInput } from './fields';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    region: null,
    city: null,
    zip: '',
    address: '', 
};

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short')
        .max(50, 'Too Long')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short')
        .max(50, 'Too Long')
        .required('Required'),
    email: Yup.string()
        .email('Invalid Email')
        .required('Required'),
    region: Yup.object().shape({
        label: Yup.string()
            .min(2, 'Too Short!')
            .required('Required')
    }),
    city: Yup.object().shape({
        label: Yup.string()
            .min(2, 'Too Short!')
            .required('Required')
    })
});

const CheckoutForm = props => (
    <Formik 
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={values => props.onSubmit(values)}
    >   
        {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
            <Form className="checkout-form">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--6-col">
                        <Field 
                            className={`browser-default required ${errors.firstName && touched.firstName && 'error'}`}
                            as="input"
                            type="text" 
                            name="firstName"
                            placeholder="Имя *" 
                        />
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <Field 
                            className={`browser-default required ${errors.lastName && touched.lastName && 'error'}`}
                            as="input"
                            type="text" 
                            name="lastName"
                            placeholder="Фамилия *"
                        />
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <Field 
                            className={`browser-default required ${errors.email && touched.email && 'error'}`}
                            as="input"
                            type="text" 
                            name="email"
                            placeholder="Email *"
                        />
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <Field 
                            className="browser-default" 
                            as="input"
                            type="text" 
                            name="phone"
                            placeholder="Номер телефона"
                        />
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                        <h3 className="centered">Адрес</h3>
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <Field 
                            className="browser-default required" 
                            as="input"
                            type="text" 
                            name="address"
                            placeholder="Адрес"
                        />
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <Field 
                            className="required"
                            name="region"
                        >
                            {() => (
                                <LocationSearchInput 
                                    className={errors.region && touched.region && 'error'}
                                    placeholder="Область *"
                                    optionsType="regions"
                                    setFieldValue={setFieldValue}
                                    value={values.region}
                                    onChange={value => setFieldValue('region', value)} 
                                    onBlur={() => setFieldTouched('region')}
                                />
                            )}
                        </Field>
                    </div>
                    <div className="mdl-cell mdl-cell--6-col">
                        <Field 
                            className="required"
                            name="city"
                        >
                            {() => (
                                <LocationSearchInput 
                                    className={errors.country && touched.country && 'error'}
                                    placeholder="Город *"
                                    optionsType="cities"
                                    regionId={values.region && values.region.placeId}
                                    isDisabled={!values.region}
                                    value={values.city}
                                    onChange={value => setFieldValue('city', value)} 
                                    onBlur={() => setFieldTouched('city')}
                                />
                            )}
                        </Field>
                    </div>   
                    <div className="mdl-cell mdl-cell--6-col">
                        <Field 
                            className="browser-default" 
                            as="input"
                            type="text" 
                            name="zip"
                            placeholder="Почтовый индекс"
                        />
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                        <button className="mdl-button mdl-js-button blue-button centered-button" type="submit">
                            Отправить заказ
                        </button>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
);

export default CheckoutForm;