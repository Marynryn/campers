import { useState } from 'react';
import FilterLocation from '../FilterLocation/FilterLocation';
import FilterByEquipment from '../FilterByEquipment/FilterByEquipment';
// import FilterByType from './FilterByType';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/advertsreducer';
import FilterByType from 'components/FilterByType/FilterByType';
import css from "./Filters.module.css"


const Filters = () => {
    const [location, setLocation] = useState('');
    const [equipment, setEquipment] = useState([]);
    const [type, setType] = useState('');
    const dispatch = useDispatch();

    const handleApplyFilter = () => {
        const filter = {
            location: location,
            equipment: equipment,
            type: type
        };
        console.log(filter)
        dispatch(setFilter(filter));
    };

    return (
        <div className={css.filters_box}>
            <FilterLocation setLocation={setLocation} />
            <FilterByEquipment setEquipment={setEquipment} />
            <FilterByType setType={setType} />
            <button type='button' onClick={handleApplyFilter}>Seach</button>
        </div>
    );
};

export default Filters;
