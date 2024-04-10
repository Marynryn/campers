import React, { useEffect, useState, useCallback } from 'react';
import Price from 'components/Price/Price';
import css from './Modal.module.css';
import sprite from "../img/sprite.svg";
import Rating from 'components/Rating/Rating';
import Location from 'components/Location/Location';
import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'store/modalreducer';
import ReactDOM from 'react-dom';

const Modal = () => {
    const [activeTab, setActiveTab] = useState(null);
    const isOpen = useSelector(state => state.modal.isOpen);
    const modalProps = useSelector(state => state.modal.modalProps); // Получаем modalProps из хранилища Redux
    const dispatch = useDispatch();

    const handleCloseModal = useCallback(() => {
        dispatch(closeModal());
    }, [dispatch]);

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                handleCloseModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleCloseModal]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }


        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return isOpen ? ReactDOM.createPortal(
        <div className={css.modal_backdrop} onClick={handleBackdropClick}>
            <div className={css.modal_content}>
                <div className={css.modal_scrollbar}>
                    <h3 className={css.modal_header}>{modalProps.name}</h3>
                    <button className={css.close_button} type='button' onClick={handleCloseModal}>
                        <svg className={css.close} >
                            <use href={`${sprite}#icon-x`} width='32px' height={32} />
                        </svg>
                    </button>
                    <div className={css.rating_location}>
                        <Rating props={modalProps} />
                        <Location props={modalProps} />
                    </div>
                    <Price props={modalProps} />
                    <div className={css.scroll_container}>
                        <ul className={css.img_list}>
                            {modalProps.gallery.map((item, index) => (
                                <li className={css.img_box} key={index}>
                                    <img alt="car" src={item} width={290} height={310} />
                                </li>
                            ))}
                        </ul>
                        <p className={css.about}>{modalProps.description}</p>
                    </div>
                    <ul className={css.tabs}>
                        <li className={css.tab}>
                            <button className={activeTab === 'tab1' ? css.active : ''} onClick={() => handleTabClick('tab1')}>Features</button>
                        </li>
                        <li className={css.tab}>
                            <button className={activeTab === 'tab2' ? css.active : ''} onClick={() => handleTabClick('tab2')}>Reviews</button>
                        </li>
                    </ul>
                    <div className={css.tab_content}>
                        {activeTab === 'tab1' && <Features props={modalProps} />}
                        {activeTab === 'tab2' && <Reviews props={modalProps} />}
                    </div></div>
            </div>
        </div>, document.getElementById('modal-root')
    ) : null;
};

export default Modal;
