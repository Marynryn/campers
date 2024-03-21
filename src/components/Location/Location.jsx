import sprite from "../img/sprite.svg";

const Location = ({ props }) => {
    return (<div>
        <svg className="" width={16} height={16}>
            <use href={`${sprite}#icon-map-pin`} />
        </svg>
        <p>{props.location}</p>
    </div >

    )
}
export default Location;