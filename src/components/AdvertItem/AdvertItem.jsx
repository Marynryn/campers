import Rating from "components/Rating/Rating";
import Location from "components/Location/Location";
import Equipment from "components/Equipment/Equipment";
import Price from "components/Price/Price";


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
        <div>
            <div>
                <img alt="car" src={props.gallery[0]} />
            </div>
            <div>
                <h3>{props.name}</h3>
                <Price props={props} />
                <Rating props={props} />
                <Location props={props} />
                <p>{props.description}</p>
                <Equipment props={props} />
                {openModal && (
                    <Modal onClose={handleCloseModal} props={props} />

                )}
                <button className="" type="button" onClick={handleOpenModal} >Show more</button>
            </div>
        </div>
    )
}
export default AdvertItem;