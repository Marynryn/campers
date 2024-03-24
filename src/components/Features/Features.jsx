import Details from "components/Details/Details";
import sprite from "../img/sprite.svg"
import BookingForm from "components/BookingForm/BookingForm";
import css from "./Features.module.css"

const Features = ({ props }) => {
    return (
        <div className={css.features_box}>
            <div className={css.features_container}>
                <ul className={css.equipment_box}>
                    <div className={css.equipment}>
                        <svg className={css.icon} width={16} height={16}>
                            <use href={`${sprite}#icon-Users`} />
                        </svg>
                        <p className={css.equipment_name}>{props.adults} adults</p>
                    </div>
                    {props.details && Object.entries(props.details).map(([key, value]) => (
                        (value > 0) &&
                        <div key={key} className={css.equipment}>
                            <svg className={css.icon} width={16} height={16}>
                                <use href={`${sprite}#icon-${key}`} />
                            </svg>
                            <p className={css.equipment_name}>
                                {(value > 1) ? `${value} ${key}` : (key === "airConditioner" ? "AC" : key)}
                            </p>
                        </div>
                    ))}
                </ul>

                <Details props={props} />
            </div>
            <BookingForm />
        </div>
    )
}
export default Features;