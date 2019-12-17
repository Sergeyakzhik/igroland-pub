import React, { useState, useEffect } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import { Formik } from 'formik';

import { ControlHeader } from '../common'; 
import { Locations } from '../../../api';
import { LocationForm } from '../forms';
import { preparePins } from './utils';
import validationSchema from './validation';
import withMapActions from './withMapActions';

const EditLocation = ({ history, match, locations, address, selectedLocation, setLocation, setLocations, handleAddressChange, handleSearchClick }) => {
    const [initialValues, setInitialValues] = useState(null);

    useEffect(() => {
        (async () => {
            const id = match.params.id;

            if (id) {
                const response = await Locations.getLocationById(id);
                const result = await response.json();

                const coordinates = Object.values(JSON.parse(result.coordinates)).map(item => parseFloat(item, 10));

                setInitialValues({
                    ...result,
                    coordinates
                });
                setLocation({
                    location: coordinates
                });
            }
        })();
    }, [match.params.id, setLocation]);

    const handleSubmit = async values => {
        const id = match.params.id;
        const { name, address, country, city, coordinates, published } = values;
        const data = {
            name,
            address,
            country,
            city,
            published
        };

        data.coordinates = JSON.stringify({
            0: coordinates[0],
            1: coordinates[1]
        });

        const response = await Locations.updateLocation(data, id);

        if (response.status === 200) {
            history.push('/administration/locations');
        }
    };

    return (
        <Formik 
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={validationSchema}
            isInitialValid={false}
            onSubmit={values => handleSubmit(values)}
        >
            {props => (
                <>
                    <ControlHeader title="Редактировать пункт" isNew={false} sectionType="locations" handleSubmit={() => props.submitForm(props.values)} />
                    <div className="map-wrapper">
                        <ReactBingmaps
                            className="map with-form"
                            bingmapKey="ApirBVkRI4uVvfBuH1jNVVGr0Nh9mCPTh_MbjIOhX-SxFoBdSap9WvA7nsGgOgqH"
                            center={(!locations && selectedLocation) ? selectedLocation.location : [46.412082, -37.734879]}
                            zoom={(!locations && selectedLocation) ? 6 : 1}
                            pushPins={locations ? preparePins(
                                locations,
                                target => {
                                    props.setFieldValue('address', locations[target].address);
                                    props.setFieldValue('country', locations[target].country);
                                    props.setFieldValue('city', locations[target].city);
                                    props.setFieldValue('coordinates', locations[target].coordinates);
                                    setLocation({ location: locations[target].coordinates });
                                    setLocations(null);
                                }
                            ) : selectedLocation && [selectedLocation]}
                        >
                        </ReactBingmaps>
                        <div className="search-field">
                            <input
                                className="mdl-textfield__input browser-default"
                                placeholder="Enter Address"
                                type="text"
                                value={address}
                                onChange={e => handleAddressChange(e.target.value)}
                            />
                            <i className="material-icons" onClick={handleSearchClick}>search</i>
                        </div>
                    </div>
                    <div className="admin-table-wrapper">
                        <LocationForm { ...props } />
                    </div>
                </>
            )}
        </Formik>
    );
};

export default withMapActions(EditLocation);