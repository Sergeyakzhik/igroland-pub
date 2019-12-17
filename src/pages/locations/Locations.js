import React from 'react';

import Map from './Map';
import LocationsBlock from './LocationsBlock';

import './locations.scss';

const Locations = props => (
    <section className={`locations ${props.isFetching ? 'fetching' : ''}`}>
        <div className="mdl-grid container">
            <div className="mdl-cell mdl-cell--12-col">
                <h1>Пункты самовывоза</h1>
                <div className="divider">
                </div>
                <div className="image-wrapper services">
                    <img src="/images/services.svg" alt="services" />
                </div>
                <p className="centered">Мы будем рады видеть Вас в наших магазинах!</p>
            </div>
            <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--12-col-phone">
                <LocationsBlock 
                    data={props.locationsData}
                    activeLocation={props.activeLocation} 
                    opened={props.locationsDropdownOpened} 
                    toggle={props.openLocationsDropdown} 
                    onClick={props.onLocationClick} 
                />
            </div>
            <div className="mdl-cell mdl-cell--12-col">
                <Map 
                    data={props.data} 
                    filteredIDs={props.filteredIDs}
                    closeDropdowns={props.closeDropdowns}
                />
            </div>
            <div className="mdl-cell mdl-cell--12-col">
                <div className="locations-list">
                    {props.data.map((item, ind) => (
                        props.filteredIDs.includes(item.id) && (
                            <div key={"location-" + ind} className="location">
                                <p className="blue-link">{item.name}</p>
                                {item.address && item.address.split(',').map((item, ind) => (
                                    <p key={"address-" + ind}>{item}</p>
                                ))}
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Locations;