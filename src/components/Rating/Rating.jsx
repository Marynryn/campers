import sprite from "../img/sprite.svg";

const Rating = ({ props }) => {
    return (
        <div>
            <svg className="" width={16} height={16}>
                <use href={`${sprite}#icon-star-empty`} />
            </svg>
            <p>{props.rating}({props.reviews.length} Reviews)</p>
        </div>
    )
}
export default Rating;