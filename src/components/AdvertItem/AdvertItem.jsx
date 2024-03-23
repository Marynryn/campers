import Rating from "components/Rating/Rating";
import Location from "components/Location/Location";
import Equipment from "components/Equipment/Equipment";
import Price from "components/Price/Price";
import css from "./AdvertItem.module.css"

import Modal from "components/Modal/Modal";
import { useState } from "react";

const AdvertItem = ({ props }) => {


    const [openModal, setModal] = useState(false);

    const handleOpenModal = () => {
        setModal(true);
    };
    const handleCloseModal = () => {
        setModal(false);
    };
    return (
        <div className={css.advert_box}>
            <div>
                <img className={css.car_img} alt="car" src={props.gallery[0]} width={290} height={310} />
            </div>
            <div className={css.about}>
                <div className={css.about_header}>
                    <h3 className={css.about_title}>{props.name}</h3>
                    <Price props={props} /></div>
                <div className={css.rating_location}><Rating props={props} />

                    <Location props={props} /></div>
                <p className={css.paragraph}>{props.description}</p>
                <Equipment props={props} />
                {openModal && (
                    <Modal onClose={handleCloseModal} props={props} />

                )}
                <button className={css.more} type="button" onClick={handleOpenModal} >Show more</button>
            </div>
        </div>
    )
}
export default AdvertItem;