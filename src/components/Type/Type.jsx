import css from "./Type.module.css"
import sprite from "../img/sprite.svg";
import { useSelector } from "react-redux";
import { selectIsLoading } from "store/selectors";
import Loader from "components/Loader/Loader";



const Type = ({ props }) => {
    const isLoading = useSelector(selectIsLoading);
    return (
        <ul className={css.equipment_box}>
            {isLoading ? (
                <Loader />
            ) : (
                <>  {props.details && Object.entries(props.details).map(([key, value]) => (

                    <li key={key} className={css.equipment} >
                        <svg className={css.icon} width={20} height={20}>
                            <use href={`${sprite}#icon-${key}`} />
                        </svg>
                        <p className={css.equipment_name}>
                            {key}
                        </p>
                    </li>
                ))}

                </>
            )}

        </ul>
    )
}
export default Type;