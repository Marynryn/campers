import sprite from "../img/sprite.svg"

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
                <p>{props.beds} beds</p>
            </div>
            <div>
                <svg className="" width={16} height={16}>
                    <use href="../img/Vector.svg" />
                </svg>
                <p>AC</p>
            </div>

        </div>
    )
}
export default Features;