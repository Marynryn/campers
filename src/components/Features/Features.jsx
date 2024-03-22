import Details from "components/Details/Details";
import sprite from "../img/sprite.svg"
import BookingForm from "components/BookingForm/BookingForm";


const Features = ({ props }) => {
    return (
        <div>
            <div>
                <svg className="" width={16} height={16}>
                    <use href={`${sprite}#icon-Users`} />
                </svg>
                <p>{props.adults} adults</p>
            </div>
            <div>
                <svg className="" width={16} height={16}>
                    <use href={`${sprite}#icon-Container`} />
                </svg>
                <p>{props.transmission}</p>
            </div>
            <div>
                <svg className="" width={16} height={16}>
                    <use href={`${sprite}#icon-Vertical-container`} />
                </svg>
                <p>{props.engine}</p>
            </div>
            <div>
                <svg className="" width={16} height={16}>
                    <use href={`${sprite}#icon-Horizontal-container`} />
                </svg>
                <p>Kitchen</p>
            </div>
            <div>
                <svg className="" width={16} height={16}>
                    <use href={`${sprite}#icon-Container-1`} />
                </svg>
                <p>{props.details.beds} beds</p>
            </div>
            <div>
                <svg className="" width={16} height={16}>
                    <use href="../img/Vector.svg" />
                </svg>
                <p>{props.details.airConditioner} air conditioner</p>
            </div>
            <div>
                <svg className="" width={16} height={16}>
                    <use href="../img/Vector.svg" />
                </svg>
                <p>CD</p>
            </div>
            <div>
                <svg className="" width={16} height={16}>
                    <use href="../img/Vector.svg" />
                </svg>
                <p>Radio</p>
            </div>
            <div>
                <svg className="" width={16} height={16}>
                    <use href="../img/Vector.svg" />
                </svg>
                <p>hob</p>
            </div>
            <Details props={props} />
            <BookingForm />
        </div>
    )
}
export default Features;