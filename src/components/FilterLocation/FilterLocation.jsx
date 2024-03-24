import css from "./FilterLocation.module.css"

import sprite from "../img/sprite.svg";

import { useState } from 'react';

const FilterLocation = ({ setLocation }) => {
    const [locationValue, setLocationValue] = useState('');

    const handleLocationChange = (e) => {
        const newValue = e.target.value;
        setLocationValue(newValue);
        setLocation(newValue);
    };

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }

    return (
        <div className={css.location}>
            <h3 className={css.location_title}>Location</h3>
            <form>
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
            </form>
        </div>
    );
};

export default FilterLocation;


