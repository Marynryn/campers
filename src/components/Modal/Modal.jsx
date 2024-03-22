
import Price from 'components/Price/Price';
import css from './Modal.module.css';

import { useEffect, useState } from 'react';
import Rating from 'components/Rating/Rating';
import Location from 'components/Location/Location';

import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';



const Modal = ({ onClose, props }) => {
    const [activeTab, setActiveTab] = useState('tab1');

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
    };
    return (
        <div className={css.modal_backdrop} onClick={handleBackdropClick}>
            <div className={css.modal_content}>
                <h3>{props.name}</h3>
                <Price props={props} />
                <Rating props={props} />
                <Location props={props} />
                <ul>{props.gallery.map((item, index) => { return <li key={index}><img alt="car" src={item} width={100} height={100} /></li> })}

                </ul>
                <p>{props.description}</p>
                <div className="tabs">
                    <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>Features</button>
                    <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Reviews</button>
                </div>
                <div className="tab-content">
                    {activeTab === 'tab1' && (

                        <div>
                            <h2>Features</h2>
                            <Features props={props} />
                        </div>
                    )}
                    {activeTab === 'tab2' && (

                        <div>
                            <h2>Reviews</h2>
                            <Reviews props={props} />
                        </div>
                    )}
                    <button type='button' onClick={onClose}>close</button>
                </div>
            </div>
            /</div>
    )

};
export default Modal;