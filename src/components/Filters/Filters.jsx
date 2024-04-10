import { useState } from 'react';
import FilterLocation from '../FilterLocation/FilterLocation';
import FilterByEquipment from '../FilterByEquipment/FilterByEquipment';
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

        setLocation('');
        setEquipment([]);
        setType('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleApplyFilter();
    };

    return (
        <div className={css.filters_box}>
            <form onSubmit={handleSubmit}>
                <FilterLocation setLocation={setLocation} value={location} handleApplyFilter={handleApplyFilter} />
                <FilterByEquipment setEquipment={setEquipment} value={equipment} />
                <FilterByType setType={setType} value={type} />
                <button type='submit' className={css.search_button}>Search</button>
            </form>
        </div>
    );
};

export default Filters;
