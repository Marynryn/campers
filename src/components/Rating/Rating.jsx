import sprite from "../img/sprite.svg";
import css from "./Rating.module.css"
const Rating = ({ props }) => {
    return (
        <div className={css.rating_box}>
            <svg className={css.icon_star} width={16} height={16}>
                <use href={`${sprite}#icon-star-full`} />
            </svg>
            <h4 className={css.reviews}>{props.rating} ({props.reviews.length} Reviews)</h4>
        </div>
    )
}
export default Rating;