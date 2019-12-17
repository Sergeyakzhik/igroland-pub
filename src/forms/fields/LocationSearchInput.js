import React, { useState, useEffect } from 'react';
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete';
import Select from 'react-select';

import checkbox_spinner from '../../resources/images/checkbox-spinner.gif';

const customStyles = {
    control: styles => ({
        ...styles,
        height: '56px',
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        borderRadius: '0',
        cursor: 'text'
    }),
    valueContainer: styles => ({
        ...styles,
        fontSize: '16px',
        fontFamily: 'Roboto',
        color: '#204156'
    }),
    container: styles => ({
        ...styles,
        border: '1px solid #0BA6BF',
        borderRadius: '4px',
        height: '56px',
        padding: '0 3%',

        '&.error': {
            borderColor: '#bf0b14'
        },

        '&.disabled': {
            borderColor: '#c7c7c7',
            pointerEvents: 'none'
        }
    }),
    placeholder: (styles, { isDisabled }) => ({
        ...styles,
        fontSize: '16px',
        lineHeight: '56px',
        fontFamily: 'Roboto',
        color: `${!isDisabled ? '#204156' : '#c7c7c7'}`
    }),
    input: styles => ({
        ...styles,
        margin: 0, 
        padding: 0
    }), 
    singleValue: styles => ({
        ...styles,
        color: '#204156'
    }),
    menu: (styles, { options }) => ({
        ...styles,
        display: `${options.length > 0 ? 'block' : 'none'}`,
        width: '100%',
        fontSize: '16px',
        fontFamily: 'Roboto',
        color: '#204156',
        boxSizing: 'content-box',
        border: '1px solid #0BA6BF',
        borderTop: 'none',
        borderRadius: '0 0 7px 7px',
        left: '-1px',
        top: '42px',
        boxShadow: 'none'
    }),
    option: styles => ({
        ...styles,
        height: '56px',
        lineHeight: '56px',
        padding: '0 5%',
        backgroundColor: '#FFFFFF',
        cursor: 'pointer',
        color: '#204156',
        '&:hover': {
            backgroundColor: '#F5FBFC',
        },
        '&:active': {
            backgroundColor: '#F5FBFC',
        },
    }),
    indicatorsContainer: styles => ({
        display: 'none'
    })
};

const countryId = 'ChIJgUit4oQl2kYREIzsgdGhAAA';
 
const LocationSearchInput = ({ regionId, optionsType, value, ...props }) => {
	const [inputValue, setInputValue] = useState('');
    const [countryShortName, setCountryShortName] = useState('');
    const [regionShortName, setRegionShortName] = useState('');
    
	useEffect(() => {
		(async () => {
			if (optionsType === 'regions') {
                const result = await geocodeByPlaceId(countryId);

				setCountryShortName(result[0].address_components[0].short_name);
            }	
		})();
    }, [optionsType, regionId]);

	const handleChange = newValue => {
		setInputValue(newValue);
	};

	const handleSelect = newValue => {
        if (optionsType === 'regions' && value && value.value !== newValue.value) {
            props.setFieldValue('city', null);
        }

		setInputValue(newValue.value);
		props.onChange(newValue);
	};

	const getSearchOptions = () => {
		const result = {};

		if (optionsType === 'regions') {
			result.types = ['(regions)'];

			if (countryShortName) {
				result.componentRestrictions = { country: countryShortName }
			}
		}

		if (optionsType === 'cities') {
			result.types = ['(cities)'];

			if (countryShortName) {
				result.componentRestrictions = { country: countryShortName }
			}
		}

		return result;
	};

	const getOptions = arr => {
		let result = [];
        
        if (optionsType === 'regions') {
            result = [ ...arr ];
        } 
        
        if (optionsType === 'cities') {
            result = [ ...arr ];
		}

		result = result.map(item => (
			{ value: item.formattedSuggestion.mainText, label: item.formattedSuggestion.mainText, placeId: item.placeId }
		));

		return result;
	};

	return (
		<PlacesAutocomplete
			value={inputValue}
			onChange={handleChange}
			onSelect={handleSelect}
			searchOptions={getSearchOptions()}
		>
			{({ getInputProps, suggestions, loading }) => (
                <>
                    <Select
                        className={`${props.className} ${props.isDisabled ? 'disabled' : ''}`}
                        styles={customStyles}
                        value={value}
                        options={getOptions(suggestions)}
                        placeholder={props.placeholder}
                        isDisabled={props.isDisabled}
                        onChange={handleSelect}
                        onInputChange={value => getInputProps().onChange({ target: { value } })}
                        onBlur={props.onBlur}
                    />
                    {loading && <img className="checkbox-spinner" src={checkbox_spinner} alt="..." />}
                </>
			)}
		</PlacesAutocomplete>
	);
}

export default LocationSearchInput;