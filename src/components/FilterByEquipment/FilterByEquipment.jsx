import { useEffect, useState } from "react";
import sprite from "../img/sprite.svg"

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
                <h6>Filters</h6>
                <h4>Vehicle equipment</h4>
                <label>
                    <input type="checkbox" id="airConditioner" onChange={() => handleCheckboxChange('airConditioner')} /><svg className="icon" width="16" height="16">
                        <use href="../img/Vector.svg" />
                    </svg>
                    Air Conditioner
                </label>
                <label>
                    <input type="checkbox" id="transmission" onChange={() => handleCheckboxChange('transmission')} /><svg className="icon" width="16" height="16">
                        <use href={`${sprite}#icon-Container`} />
                    </svg>
                    Transmission
                </label>
                <label>
                    <input type="checkbox" id="kitchen" onChange={() => handleCheckboxChange('kitchen')} /><svg className="icon" width="16" height="16">
                        <use href={`${sprite}#icon-Container-1`} />
                    </svg>
                    Kitchen
                </label>
                <label>
                    <input type="checkbox" id="TV" onChange={() => handleCheckboxChange('TV')} /><svg className="icon" width="16" height="16">
                        <use href={`${sprite}#icon-Vertical-container`} />
                    </svg>
                    TV
                </label>
                <label>
                    <input type="checkbox" id="shower" onChange={() => handleCheckboxChange('shower')} /><svg className="icon" width="16" height="16">
                        <use href={`${sprite}#icon-Rating`} />
                    </svg>
                    Shower
                </label>
            </div>
        </form>
    );
};

export default FilterByEquipment;
