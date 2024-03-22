

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
        <div className="">
            <h3 className="">Location</h3>
            <form>
                <div className="input-container">
                    <svg className="icon" width="16" height="16">
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


