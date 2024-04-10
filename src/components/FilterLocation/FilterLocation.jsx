import css from "./FilterLocation.module.css"

import sprite from "../img/sprite.svg";

import { useEffect, useState } from 'react';

const FilterLocation = ({ setLocation, value, handleApplyFilter }) => {
    const [locationValue, setLocationValue] = useState('');

    useEffect(() => {
        setLocationValue(value);
    }, [value]);

    const handleLocationChange = (e) => {
        const newValue = e.target.value;
        setLocationValue(newValue);
        setLocation(newValue);
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleApplyFilter();
        }
    }

    return (
        <div className={css.location}>
            <h3 className={css.location_title}>Location</h3>

            <div className={css.input_container}>
                <svg className={css.icon} width="16" height="20">
                    <use href={`${sprite}#icon-map-pin`} />
                </svg>
                <input
                    type="text"
                    placeholder="Ukraine, Kyiv"
                    value={locationValue}
                    onChange={handleLocationChange}
                    onKeyDown={handleKeyPress}
                />
            </div>

        </div>
    );
};

export default FilterLocation;


