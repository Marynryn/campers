import React, { useState, useEffect } from 'react';
import sprite from "../img/sprite.svg";
import css from "./FilterByType.module.css";

const FilterByType = ({ setType, value }) => {
    const [selectedType, setSelectedType] = useState(value);

    useEffect(() => {
        setSelectedType(value);
    }, [value]);

    const handleTypeChange = (e) => {
        const newValue = e.target.value;
        setSelectedType(newValue);
        setType(newValue);
    };

    return (
        <div className="">
            <h3 className={css.type_title}>Vehicle type</h3>
            <form>
                <div className={css.input_container}>
                    <label htmlFor="panelTruck" className={`${css.box} ${selectedType === 'panelTruck' ? css.selected : ''}`}>
                        <input
                            id="panelTruck"
                            type="radio"
                            value="panelTruck"
                            checked={selectedType === 'panelTruck'}
                            onChange={handleTypeChange}
                        />
                        <svg className={css.icon} width="16" height="16">
                            <use href={`${sprite}#icon-Button-2`} />
                        </svg>
                        Van
                    </label>

                    <label htmlFor='FullyIntegrated' className={`${css.box} ${selectedType === 'FullyIntegrated' ? css.selected : ''}`}>
                        <input
                            id="FullyIntegrated"
                            type="radio"
                            value="FullyIntegrated"
                            checked={selectedType === 'FullyIntegrated'}
                            onChange={handleTypeChange}
                        />
                        <svg className={css.icon} width="16" height="16">
                            <use href={`${sprite}#icon-Button-1`} />
                        </svg>
                        Fully Integrated
                    </label>

                    <label htmlFor='Alcove' className={`${css.box} ${selectedType === 'Alcove' ? css.selected : ''}`}>
                        <input
                            id="Alcove"
                            type="radio"
                            value="Alcove"
                            checked={selectedType === 'Alcove'}
                            onChange={handleTypeChange}
                        />
                        <svg className={css.icon} width="16" height="16">
                            <use href={`${sprite}#icon-camper`} />
                        </svg>
                        Alcove
                    </label>
                </div>
            </form>
        </div>
    );
};

export default FilterByType;
