import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import LocationsList from './LocationsList';
import { locationsOperations } from '../../../store/operations';
import { Locations } from '../../../api';

const LocationsListContainer = ({ locations, fetching, getLocations, setLocations, changeLocationsOrder, setPublished }) => {

    const [isUpdating, setUpdating] = useState(null);

    useEffect(() => {
        getLocations();
    }, [getLocations]);

    const handleDelete = async (id, e) => {
        e.stopPropagation();

        await Locations.deleteLocation(id);
        getLocations();
    };

    const handleDragEnd = result => {
        const list = [ ...locations ];
        const startIndex = result.source.index;
        const endIndex = result.destination.index; 
        const [removed] = list.splice(startIndex, 1);

        list.splice(endIndex, 0, removed);

        setLocations(list);
        changeLocationsOrder(list.map(item => item.id));
    };

    const togglePublished = (id, isPublished) => {
        setPublished(id, isPublished);
        setUpdating(id);
    };

    const handlePublishedChange = (id, isPublished, e) => {
        e.stopPropagation();
        togglePublished(id, isPublished);
    };

    return (
        <LocationsList 
            data={locations} 
            fetching={fetching}
            isUpdating={isUpdating}
            onDelete={handleDelete}
            onDragEnd={handleDragEnd}
            onPublishedChange={handlePublishedChange}
        />
    );
};

const mapStateToProps = state => ({
    locations: state.locations.locations,
    fetching: state.locations.fetching
});

const mapDispatchToProps = {
    getLocations: locationsOperations.getLocations,
    setLocations: locationsOperations.setLocations,
    changeLocationsOrder: locationsOperations.changeLocationsOrder,
    setPublished: locationsOperations.setPublished,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationsListContainer);
