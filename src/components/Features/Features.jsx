import Details from "components/Details/Details";

import BookingForm from "components/BookingForm/BookingForm";
import css from "./Features.module.css"
import Equipment from "components/Equipment/Equipment";

const Features = ({ props }) => {
    return (
        <div className={css.features_box}>
            <div className={css.features_container}>
                <Equipment props={props} />

                <Details props={props} />
            </div>
            <BookingForm />
        </div>
    )
}
export default Features;