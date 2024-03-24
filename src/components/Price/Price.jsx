import css from "./Price.module.css"
import ButtonFavorite from "components/ButtonFavorite/ButtonFavorite";


const Price = ({ props }) => {
    function addDotAndTwoZerosToEnd(number) {

        let result = number.toString() + ',00';

        return result;
    }

    return (
        <div className={css.price_box}>
            <h3 className={css.price}>&euro; {addDotAndTwoZerosToEnd(props.price)}</h3>
            <ButtonFavorite props={props} />


        </div>
    );
};

export default Price;