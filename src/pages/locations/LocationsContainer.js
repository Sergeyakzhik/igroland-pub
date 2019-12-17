import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import LocationsComponent from './Locations';
import { locationsOperations } from '../../store/operations';

const LocationsContainer = ({ getLocations, data, fetching, ...props }) => {
    const [locationsData, setLocationsData] = useState({});
    const [activeLocation, setLocation] = useState('All');
    const [locationsDropdownOpened, openLocationsDropdown] = useState(false);
    const [filteredIDs, setFilteredIDs] = useState([]);

    useEffect(() => {
        getLocations(true);
    }, [getLocations]);

    useEffect(() => {
        setLocationsData(prepareLocations(data));
    }, [data]);

    useEffect(() => {
        let result = [ ...data ];

        if (activeLocation) {
            if (activeLocation !== 'All') {
                result = result.filter(item => item.country === activeLocation || item.city === activeLocation);
            }
        }

        setFilteredIDs(result.map(item => item.id));
    }, [data, activeLocation]);

    const handleLocationClick = location => {
        setLocation(location);
        openLocationsDropdown(false);
    };

    const closeDropdowns = () => {
        openLocationsDropdown(false);
    };

    const prepareLocations = data => {
        const result = {};

        data.forEach(item => {
            const { country, city } = item;

            if (!(country in result)) {
                result[country] = [];
            }

            if (!result[country].includes(city)) {
                result[country].push(city);
            }
        });

        return result;
    }; 

    return (
        <LocationsComponent 
            data={data}
            filteredIDs={filteredIDs}
            isFetching={!!fetching}
            activeLocation={activeLocation}
            locationsData={locationsData}
            locationsDropdownOpened={locationsDropdownOpened}
            openLocationsDropdown={openLocationsDropdown}
            onLocationClick={handleLocationClick}
            closeDropdowns={closeDropdowns}
        />
    );
};

const mapStateToProps = state => ({
    fetching: state.locations.fetching,
    data: state.locations.locations
});

const mapDispatchToProps = {
    getLocations: locationsOperations.getLocations
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationsContainer);