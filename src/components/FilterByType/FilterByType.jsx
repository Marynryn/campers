import React, { useState } from 'react';
import sprite from "../img/sprite.svg";
import css from "./FilterByType.module.css"
const FilterByType = ({ setType }) => {
    const [selectedType, setSelectedType] = useState('');

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        setType(e.target.value);
    };


    return (
        <div className="">
            <h3 className={css.type_title}>Vechicle type</h3>
            <form>
                <div className={css.input_container}>
                    <label htmlFor="panelTruck" className={css.box}>
                        <input
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


                    <label htmlFor='FullyIntegrated' className={css.box}>
                        <input
                            type="radio"
                            value="FullyIntegrated"
                            checked={selectedType === 'FullyIntegrated'}
                            onChange={handleTypeChange}
                        /> <svg className={css.icon} width="16" height="16">
                            <use href={`${sprite}#icon-Button-1`} />
                        </svg>
                        Fully Integrated
                    </label>


                    <label htmlFor='Alcove' className={css.box}>
                        <input
                            type="radio"
                            value="Alcove"
                            checked={selectedType === 'Alcove'}
                            onChange={handleTypeChange}
                        /> <svg className={css.icon} width="16" height="16">
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
