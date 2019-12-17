import React, { useState, useEffect } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import { Formik } from 'formik';

import Progress from './Progress';
import { ControlHeader } from '../common';
import { Locations } from '../../../api';
import { LocationForm } from '../forms';
import { preparePins } from './utils';
import validationSchema from './validation';
import withMapActions from './withMapActions';

const NewLocation = ({ history, address, locations, selectedLocation, setLocation, setLocations, handleSearchClick, handleAddressChange }) => {

    const [progress, setProgress] = useState({
        step1: false,
        step2: false,
        step3: false
    });

    const handleKeyDown = ({ keyCode }) => {
        if (keyCode === 13 && address) {
            setProgress({ ...progress, step1: true });
            handleSearchClick();
        } 
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    });

    const handleSubmit = async values => {
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

        let locationsNumberResponse = await Locations.getLocationsNumber(); 

        if (locationsNumberResponse.status === 200) {
            const locationsNumber = await locationsNumberResponse.json();
            
            data.order = locationsNumber;
        }

        const response = await Locations.createLocation(data);

        if (response.status === 200) {
            history.push('/administration/locations');
        }
    };

    const findLocation = () => {
        address && setProgress({ ...progress, step1: true });
        handleSearchClick();
    };

    return (
        <Formik
            initialValues={{
                name: '', 
                address: '', 
                country: '',
                city: '',
                coordinates: null,
                published: true
            }}
            enableReinitialize={true}
            validationSchema={validationSchema}
            isInitialValid={false}
            onSubmit={values => handleSubmit(values)}
        >
            {props => (
                <>
                    <ControlHeader title="New Location" isNew={true} sectionType="locations" showCreateButton={progress.step1 && progress.step2} handleSubmit={() => props.submitForm(props.values)} />
                    <Progress progress={progress} />
                    <div className="map-wrapper">
                        <ReactBingmaps 
                            className="map big"
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
                                    setProgress({ ...progress, step2: true });
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
                            <i className="material-icons" onClick={findLocation}>search</i> 
                        </div>
                    </div>
                    <div className={`admin-table-wrapper ${!props.values.coordinates ? 'hidden-form' : ''}`}>
                        <LocationForm { ...props } />
                    </div> 
                </>
            )}
        </Formik>
    );
};

export default withMapActions(NewLocation);