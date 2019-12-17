import React from 'react';

const LocationsBlock = props => {

    const getListHeight = () => {
        let itemsNum = Object.keys(props.data).length;

        Object.values(props.data).forEach(item => {
            itemsNum += item.length;
        });

        return (itemsNum + 1) * 35 + 70 + 'px';
    };  

    return (
        <div className={`locations-block ${props.opened ? 'opened' : ''}`} style={{ height: props.opened ? getListHeight() : '60px' }}>
            <p>Местоположение: <b>{props.activeLocation === 'All' ? 'Все' : props.activeLocation}</b></p>
            <i className="material-icons caret-icon" onClick={() => props.toggle(!props.opened)}>keyboard_arrow_down</i>
            <hr/>
            <div className="collapsing" style={{ height: getListHeight() }}>
                <ul>
                    <li onClick={() => props.onClick('All')}>
                        <span className={`bold ${props.activeLocation === 'All' ? 'selected' : ''}`}>
                            Все
                        </span>
                    </li>
                    {Object.keys(props.data).map((country, ind) => (
                        <li key={'country-' + ind}>
                            <span
                                className={`bold ${props.activeLocation === country ? 'selected' : ''}`}
                                onClick={() => props.onClick(country)}
                            >
                                {country}
                            </span>
                            <ul>
                                {props.data[country].map((city, ind) => (
                                    <li key={'city-' + ind} onClick={() => props.onClick(city)}>
                                        <span className={props.activeLocation === city ? 'selected' : ''}>
                                            {city}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
    
export default LocationsBlock;


