import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { BingMaps } from '../../../api';

const withMapActions = Component => {
    return withRouter(({ match, history }) => {
        const [address, handleAddressChange] = useState('');
        const [selectedLocation, setLocation] = useState(null);
        const [locations, setLocations] = useState(null);
    
        const handleSearchClick = () => {
            address && BingMaps.getLocations(address)
                .then(res => res.json())
                .then(result => {
                    const newLocations = {};
    
                    result.resourceSets[0].resources.forEach((location, ind) => {
                        newLocations[ind] = {
                            number: ind + 1,
                            address: location.address.formattedAddress,
                            coordinates: location.geocodePoints[0].coordinates,
                            city: location.address.locality,
                            country: location.address.countryRegion,
                            published: false
                        }
                    })
    
                    setLocations(newLocations);
                });
        };

        return (
            <Component
                match={match}
                history={history}
                address={address}
                selectedLocation={selectedLocation}
                locations={locations}
                setLocation={setLocation}
                setLocations={setLocations}
                handleSearchClick={handleSearchClick}
                handleAddressChange={handleAddressChange}
            />
        );
    })
};

export default withMapActions;