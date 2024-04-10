import css from './ButtonFavorite.module.css';
import sprite from '../img/sprite.svg';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'store/advertsreducer';

const ButtonFavorite = ({ props }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(storedFavorites.some(favorite => favorite._id === props._id));
    }, [props._id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            const updatedFavorites = favorites.filter(favorite => favorite._id !== props._id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            dispatch(removeFromFavorites(props._id));
        } else {
            favorites.push(props);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            dispatch(addToFavorites(props));
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <button className={css.heart} onClick={toggleFavorite}>
            <svg className={isFavorite ? css.favorite_on : css.favorite_off} width={16} height={16}>
                <use href={`${sprite}#icon-heart`} />
            </svg>
        </button>
    );
};

export default ButtonFavorite;
