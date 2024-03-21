import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectGetAdverts } from "store/selectors";
import sprite from "../img/sprite.svg";
import { setFilter } from "store/advertsreducer";

const FilterLocation = () => {
    const dispatch = useDispatch();
    const adverts = useSelector(selectGetAdverts);

    const [uniqueLocations, setUniqueLocations] = useState([]);
    useEffect(() => {
        const locations = [...new Set(adverts.map(adverts => adverts.location))];
        setUniqueLocations(locations);
    }, [adverts]);

    const handleLocationFilter = event => {
        dispatch(setFilter(event.target.value));
    };
    return (
        <div className="">
            <h3 className="">Location</h3>
            <div className="">
                <select onChange={handleLocationFilter}>

                    {uniqueLocations.map((location, index) => (<>
                        <svg className="" width={16} height={16}>
                            <use href={`${sprite}#icon-map-pin`} />
                        </svg>
                        <option key={index} value={location}>{location}</option></>
                    ))}
                </select>
            </div>

        </div>
    );
};

export default FilterLocation;