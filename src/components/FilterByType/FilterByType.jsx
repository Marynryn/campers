import React, { useState } from 'react';
import sprite from "../img/sprite.svg"
const FilterByType = ({ setType }) => {
    const [selectedType, setSelectedType] = useState('');

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        setType(e.target.value);
    };


    return (
        <div className="">
            <h3 className="">Vechicle type</h3>
            <form>
                <div className="input-container">
                    <label>
                        <input
                            type="radio"
                            value="panelTruck"
                            checked={selectedType === 'panelTruck'}
                            onChange={handleTypeChange}
                        />
                        <svg className="icon" width="16" height="16">
                            <use href={`${sprite}#icon-Button`} />
                        </svg>
                        Van
                    </label>
                </div>
                <div className="input-container">
                    <label>
                        <input
                            type="radio"
                            value="FullyIntegrated"
                            checked={selectedType === 'FullyIntegrated'}
                            onChange={handleTypeChange}
                        /> <svg className="icon" width="16" height="16">
                            <use href={`${sprite}#icon-Button-1`} />
                        </svg>
                        Fully Integrated
                    </label>
                </div>
                <div className="input-container">
                    <label>
                        <input
                            type="radio"
                            value="Alcove"
                            checked={selectedType === 'Alcove'}
                            onChange={handleTypeChange}
                        /> <svg className="icon" width="16" height="16">
                            <use href={`${sprite}#icon-Button-2`} />
                        </svg>
                        Alcove
                    </label>
                </div>
            </form>

        </div>
    );
};

export default FilterByType;
