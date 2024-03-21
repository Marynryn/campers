import sprite from "../img/sprite.svg"

const Price = ({ props }) => {
    return (<div>
        <h3>{props.price}</h3>
        <svg className="" width={16} height={16}>
            <use href={`${sprite}#icon-Property-1Default`} />
        </svg>

    </div>

    )
}
export default Price;