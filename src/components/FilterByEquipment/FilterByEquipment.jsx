import { useEffect, useState } from "react";
import sprite from "../img/sprite.svg"
import css from "./FiltersByEquipment.module.css"
const FilterByEquipment = ({ setEquipment }) => {
    const [selectedEquipment, setSelectedEquipment] = useState([]);

    const handleCheckboxChange = (equipment) => {
        setSelectedEquipment((prevSelected) => {
            if (prevSelected.includes(equipment)) {
                return prevSelected.filter((item) => item !== equipment);
            } else {
                return [...prevSelected, equipment];
            }
        });
    };

    useEffect(() => {
        setEquipment(selectedEquipment);
    }, [selectedEquipment, setEquipment]);


    return (
        <form>
            <div>
                <h6 className={css.filters_title}>Filters</h6>
                <h4 className={css.equipment_title}>Vehicle equipment</h4>
                <div className={css.label_box}>
                    <label className={css.box}>
                        <input type="checkbox" id="airConditioner" onChange={() => handleCheckboxChange('airConditioner')} />
                        <span className={css.icon}><svg width="16" height="16">
                            <use href={`${sprite}#icon-airConditioner`} />
                        </svg></span>
                        AC
                    </label>
                    <label className={css.box}>
                        <input type="checkbox" id="transmission" onChange={() => handleCheckboxChange('transmission')} />
                        <span className={css.icon}><svg width="16" height="16">
                            <use href={`${sprite}#icon-transmission`} />
                        </svg></span>
                        Automatic
                    </label>
                    <label className={css.box}>
                        <input type="checkbox" id="kitchen" onChange={() => handleCheckboxChange('kitchen')} />
                        <span className={css.icon}><svg width="16" height="16">
                            <use href={`${sprite}#icon-kitchen`} />
                        </svg></span>
                        Kitchen
                    </label>
                    <label className={css.box}>
                        <input type="checkbox" id="TV" onChange={() => handleCheckboxChange('TV')} />
                        <span className={css.icon}><svg width="16" height="16">
                            <use href={`${sprite}#icon-TV`} />
                        </svg></span>
                        TV
                    </label>
                    <label className={css.box}>
                        <input type="checkbox" id="shower" onChange={() => handleCheckboxChange('shower')} />
                        <span className={css.icon}><svg width="16" height="16">
                            <use href={`${sprite}#icon-shower`} />
                        </svg></span>
                        Shower/WC
                    </label></div>
            </div>
        </form>
    );
};

export default FilterByEquipment;
