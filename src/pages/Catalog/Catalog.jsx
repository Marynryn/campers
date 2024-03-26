import AdvertsList from "components/AdvertsList/AdvertsList"
import Filters from "components/Filters/Filters"
import css from "./Catalog.module.css"
import Modal from "components/Modal/Modal"




const Catalog = () => {

    return (
        <div className={css.catalog}>
            <Filters />
            <AdvertsList />

        </div>
    )
}
export default Catalog