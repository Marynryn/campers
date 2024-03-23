
import Price from 'components/Price/Price';
import css from './Modal.module.css';
import Image from 'react-image';
import { useEffect, useState } from 'react';
import Rating from 'components/Rating/Rating';
import Location from 'components/Location/Location';

import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';



const Modal = ({ props, onClose }) => {
    const [activeTab, setActiveTab] = useState(null);
    const [modalHeight, setModalHeight] = useState('640px');
    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);


    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setModalHeight(`1208px`);
    };
    return (
        <div className={css.modal_backdrop} onClick={handleBackdropClick}>
            <button type='button' onClick={onClose}>close</button>
            <div className={css.modal_content} style={{ height: modalHeight }}>
                <h3>{props.name}</h3>

                <Rating props={props} />
                <Location props={props} />
                <Price props={props} />
                <div className={css.scroll_container}>
                    <ul className={css.img_list}>{props.gallery.map((item, index) => { return <li className={css.img_box} key={index}><img alt="car" src={item} width="100%" height="100%" /></li> })}

                    </ul>
                    <p>{props.description}</p>
                </div>
                <ul className={css.tabs}>
                    <li className={css.tab}>
                        <button style={{ backgroundColor: 'transparent', color: 'black' }} className={activeTab === 'tab1' ? css.active : ''} onClick={() => handleTabClick('tab1')}>Features</button></li>
                    <li className={css.tab}>
                        <button style={{ backgroundColor: 'transparent', color: 'black' }} className={activeTab === 'tab2' ? css.active : ''} onClick={() => handleTabClick('tab2')}>Reviews</button></li>
                </ul>
                <div className={css.tab_content}>
                    {activeTab === 'tab1' && (

                        <div>

                            <Features props={props} />
                        </div>
                    )}
                    {activeTab === 'tab2' && (

                        <div>

                            <Reviews props={props} />
                        </div>
                    )}

                </div>
            </div>
            /</div>
    )

};
export default Modal;