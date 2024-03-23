import sprite from "../img/sprite.svg"
import css from "./Equipment.module.css"
const Equipment = ({ props }) => {
    return (
        <div className={css.equipment_box}>
            <div className={css.equipment}>
                <svg className={css.icon} width={16} height={16}>
                    <use href={`${sprite}#icon-Users`} />
                </svg>
                <p className={css.equipment_name}>{props.adults} adults</p>
            </div>
            <div className={css.equipment}>
                <svg className={css.icon} width={16} height={16}>
                    <use href={`${sprite}#icon-Container`} />
                </svg>
                <p className={css.equipment_name}>{props.transmission}</p>
            </div>
            <div className={css.equipment}>
                <svg className={css.icon} width={16} height={16}>
                    <use href={`${sprite}#icon-Vertical-container`} />
                </svg>
                <p className={css.equipment_name}>{props.engine}</p>
            </div>
            <div className={css.equipment}>
                <svg className={css.icon} width={16} height={16}>
                    <use href={`${sprite}#icon-Horizontal-container`} />
                </svg>
                <p>Kitchen</p>
            </div>
            <div className={css.equipment}>
                <svg className={css.icon} width={16} height={16}>
                    <use href={`${sprite}#icon-Container-1`} />
                </svg>
                <p className={css.equipment_name}>{props.details.beds} beds</p>
            </div>
            <div className={css.equipment}>
                <svg className={css.icon} width={16} height={16}>
                    <use href="../img/Vector.svg" />
                </svg>
                <p className={css.equipment_name}>AC</p>
            </div>

        </div>
    )
}
export default Equipment;